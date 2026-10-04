'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Currency = 'INR' | 'MYR';

interface CurrencyContextType {
  currency: Currency;
  rate: number; // 1 INR = X MYR
  symbol: string;
  isLoaded: boolean;
  setCurrency: (currency: Currency) => void;
  formatPrice: (priceInINR: number) => string;
  convertPrice: (priceInINR: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Default conversion rate: 1 INR = 0.053 MYR
const DEFAULT_INR_TO_MYR_RATE = 0.053;

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    // SSR Safe Default Initialization
    const envCurrency = process.env.NEXT_PUBLIC_DEFAULT_CURRENCY as Currency;
    const envRegion = process.env.NEXT_PUBLIC_SERVER_REGION;

    if (envCurrency === 'INR' || envCurrency === 'MYR') {
      return envCurrency;
    }
    if (envRegion === 'MY' || envRegion === 'malaysia' || envRegion === 'Malaysia') {
      return 'MYR';
    }
    return 'INR';
  });

  const [rate, setRate] = useState<number>(DEFAULT_INR_TO_MYR_RATE);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load config overrides from environment
    const envRate = process.env.NEXT_PUBLIC_INR_TO_MYR_EXCHANGE_RATE;
    if (envRate) {
      const parsed = parseFloat(envRate);
      if (!isNaN(parsed) && parsed > 0) {
        setRate(parsed);
      }
    }

    // Fetch dynamic exchange rate (cached in sessionStorage for 1 hour to prevent redundant API hits)
    const fetchDynamicRate = async () => {
      try {
        const cachedRate = sessionStorage.getItem('exchange_rate_myr');
        const cachedTime = sessionStorage.getItem('exchange_rate_time');
        const now = Date.now();
        if (cachedRate && cachedTime && now - parseInt(cachedTime, 10) < 3600000) {
          setRate(parseFloat(cachedRate));
          return;
        }

        const response = await fetch('/api/exchange-rate');
        const data = await response.json();
        if (data.success && typeof data.rate === 'number') {
          setRate(data.rate);
          sessionStorage.setItem('exchange_rate_myr', data.rate.toString());
          sessionStorage.setItem('exchange_rate_time', now.toString());
        }
      } catch (err) {
        console.warn('Failed to fetch dynamic exchange rate:', err);
      }
    };

    fetchDynamicRate();

    // Client-side local preference takes precedence
    const savedCurrency = localStorage.getItem('currency') as Currency;
    if (savedCurrency === 'INR' || savedCurrency === 'MYR') {
      setCurrencyState(savedCurrency);
      setIsLoaded(true);
    } else {
      const cachedGeoCurrency = sessionStorage.getItem('detected_geo_currency');
      if (cachedGeoCurrency === 'INR' || cachedGeoCurrency === 'MYR') {
        setCurrencyState(cachedGeoCurrency);
        setIsLoaded(true);
        return;
      }

      const detectLocationCurrency = async () => {
        try {
          // 1. Server-side VPN/IP geo headers & backend IP detection
          const geoRes = await fetch('/api/geo');
          const geoData = await geoRes.json();
          if (geoData.success && geoData.country) {
            if (geoData.country === 'MY') {
              setCurrencyState('MYR');
              sessionStorage.setItem('detected_geo_currency', 'MYR');
              setIsLoaded(true);
              return;
            }
            if (geoData.country === 'IN') {
              setCurrencyState('INR');
              sessionStorage.setItem('detected_geo_currency', 'INR');
              setIsLoaded(true);
              return;
            }
          }
        } catch (e) {
          console.warn('Location API detection failed, attempting timezone fallback:', e);
        }

        // 2. Client Timezone detection (instant, offline-safe, zero network)
        try {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
          if (tz) {
            if (tz.includes('Kuala_Lumpur')) {
              setCurrencyState('MYR');
              sessionStorage.setItem('detected_geo_currency', 'MYR');
              setIsLoaded(true);
              return;
            }
            if (tz.includes('Kolkata') || tz.includes('Calcutta')) {
              setCurrencyState('INR');
              sessionStorage.setItem('detected_geo_currency', 'INR');
              setIsLoaded(true);
              return;
            }
          }
        } catch (tzErr) {
          console.warn('Timezone detection failed, defaulting to INR:', tzErr);
        } finally {
          setIsLoaded(true);
        }
      };

      detectLocationCurrency();
    }
  }, []);

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem('currency', newCurrency);
  };

  const convertPrice = (priceInINR: number): number => {
    if (currency === 'INR') return priceInINR;
    return priceInINR * rate;
  };

  const formatPrice = (priceInINR: number): string => {
    const converted = convertPrice(priceInINR);
    if (currency === 'INR') {
      return `₹${Math.round(converted).toLocaleString('en-IN')}`;
    } else {
      return `RM ${converted.toLocaleString('en-MY', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    }
  };

  const symbol = currency === 'INR' ? '₹' : 'RM';

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        rate,
        symbol,
        isLoaded,
        setCurrency,
        formatPrice,
        convertPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
