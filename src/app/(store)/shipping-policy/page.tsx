import React from 'react';
import Container from '@/shared/ui/layout/Container';
import { Truck, MapPin, Clock, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Shipping & Delivery Policy | Posh Pigeon',
  description: 'Posh Pigeon Shipping and Delivery policy detailing dispatch times, delivery timelines, tracking, and shipping charges across India.',
};

export default function ShippingPolicyPage() {
  return (
    <div className="bg-bone min-h-screen py-6 md:py-10">
      <Container size="normal">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-onyx/5 border border-onyx/10 mb-4">
            <Truck className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-onyx">Fast & Secure Delivery</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-onyx mb-4">Shipping & Delivery Policy</h1>
          <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
            We deliver premium apparel to customers across India and internationally. Review our shipping timelines, delivery costs, and package tracking below.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm border border-zinc-200/80 space-y-10 text-xs md:text-sm text-zinc-700 leading-relaxed">

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-600" /> 1. Order Dispatch & Delivery Timelines
            </h2>
            <p>
              All orders are processed and dispatched from our primary fulfillment center in Tamil Nadu:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-600">
              <li><strong>Dispatch Time:</strong> Orders placed before 2 PM IST are processed and dispatched within <strong>24 to 48 hours</strong> (excluding Sundays & public holidays).</li>
              <li><strong>Metro & Tier 1 Cities:</strong> Estimated delivery within <strong>3 to 5 business days</strong> from dispatch.</li>
              <li><strong>Rest of India:</strong> Estimated delivery within <strong>5 to 7 business days</strong> from dispatch.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-zinc-100">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx flex items-center gap-2">
              <Truck className="w-5 h-5 text-amber-600" /> 2. Shipping Charges
            </h2>
            <div className="bg-bone p-4 rounded-2xl border border-zinc-200 space-y-2">
              <p><strong>Prepaid Orders:</strong> FREE Standard Shipping on orders above ₹999 across India. Nominal shipping fee of ₹50 applies for orders under ₹999.</p>
              <p><strong>Cash on Delivery (COD):</strong> A flat COD handling fee of ₹60 applies on all Cash on Delivery orders.</p>
            </div>
          </section>

          <section className="space-y-3 pt-6 border-t border-zinc-100">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-600" /> 3. Real-Time Order Tracking
            </h2>
            <p>
              As soon as your package is dispatched, we send an SMS and email notification containing your unique AWB Tracking Number and courier tracking link.
            </p>
            <p>
              You can also track your order anytime on our website at <a href="/orders" className="text-amber-700 underline font-bold">Track Your Order</a> by entering your Order ID and email address.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-zinc-100">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-600" /> 4. Reliable Logistics Partners
            </h2>
            <p>
              We partner with India's leading courier services—including Delhivery, Bluedart, Xpressbees, and India Post—to ensure your package reaches you safely and promptly.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-zinc-100">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx">5. Shipping Support</h2>
            <p>If your package is delayed, damaged during transit, or lost, please reach out to our shipping desk:</p>
            <div className="bg-bone p-4 rounded-xl border border-zinc-200 text-zinc-800 space-y-1">
              <p className="font-bold">POSH PIGEON Shipping Desk</p>
              <p>MSME Reg No: <span className="font-mono font-bold">UDYAM-TN-02-0499605</span></p>
              <p>Email: <a href="mailto:support@poshpigeon.in" className="text-amber-700 underline font-medium">support@poshpigeon.in</a></p>
              <p>Helpline: +91 84280 98162</p>
              <p>Address: No.76/41, Block Periyanna Street, Seven Wells, Chennai, Tamil Nadu – 600001, India</p>
            </div>
          </section>

        </div>
      </Container>
    </div>
  );
}
