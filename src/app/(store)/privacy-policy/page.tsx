import React from 'react';
import Container from '@/shared/ui/layout/Container';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Posh Pigeon',
  description: 'Posh Pigeon Privacy Policy outlining how we collect, protect, and use your personal information and payment security protocols.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-bone min-h-screen py-6 md:py-10">
      <Container size="normal">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-onyx/5 border border-onyx/10 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-onyx">Legal Compliance</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-onyx mb-4">Privacy Policy</h1>
          <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
            Last Updated: October 2026. At Posh Pigeon, we prioritize the protection and confidentiality of your personal information and online payment security.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm border border-zinc-200/80 space-y-10 text-xs md:text-sm text-zinc-700 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx flex items-center gap-2">
              <Lock className="w-5 h-5 text-amber-600" /> 1. Information We Collect
            </h2>
            <p>
              When you browse our storefront, register an account, or place an order at Posh Pigeon, we collect personal details necessary to process your transactions and provide custom service:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-600">
              <li><strong>Personal Identifiers:</strong> Name, email address, contact phone number.</li>
              <li><strong>Shipping & Billing Details:</strong> Delivery address, city, state, postal code, and country.</li>
              <li><strong>Technical & Usage Data:</strong> IP address, browser type, device information, and pages visited via cookies.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-zinc-100">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-600" /> 2. Payment Data Security (Razorpay Integration)
            </h2>
            <p>
              All online transactions are securely processed through our PCI-DSS compliant payment partner, <strong>Razorpay</strong>. Posh Pigeon <strong>does not store or process your credit card numbers, debit card PINs, CVVs, or NetBanking passwords</strong> on our servers.
            </p>
            <p>
              Razorpay utilizes industry-standard 256-bit SSL encryption and tokenization protocols to ensure your financial transactions remain encrypted and completely safe.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-zinc-100">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx flex items-center gap-2">
              <Eye className="w-5 h-5 text-amber-600" /> 3. How We Use Your Information
            </h2>
            <p>We use your personal data strictly for legitimate operational purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-600">
              <li>Processing, fulfilling, and dispatching your orders.</li>
              <li>Sending order status confirmation emails, SMS notifications, and delivery updates.</li>
              <li>Providing customer care, managing returns, and issuing refunds.</li>
              <li>Improving our website performance, catalog relevance, and anti-fraud monitoring.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-zinc-100">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-600" /> 4. Data Sharing & Third Parties
            </h2>
            <p>
              We respect your privacy. We do not sell, rent, or trade your personal information to third-party marketing companies. Data is only shared with trusted service providers who assist us in operating our business:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-600">
              <li>Logistics and courier partners (for order delivery).</li>
              <li>Razorpay Payment Gateway (for transaction processing).</li>
              <li>Sanity CMS & Cloud Hosting Infrastructure (for secure data management).</li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-zinc-100">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx">5. Cookies & Tracking Technologies</h2>
            <p>
              Our website uses cookies and session storage to retain your cart items, remember currency preferences (INR/MYR), and provide a seamless checkout experience. You can choose to disable cookies in your browser settings, though some website features may not function optimally.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-zinc-100">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx">6. Contact & Grievance Officer</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact our support team:
            </p>
            <div className="bg-bone p-4 rounded-xl border border-zinc-200 text-zinc-800 space-y-1">
              <p className="font-bold">POSH PIGEON Support & Grievances</p>
              <p>MSME Reg No: <span className="font-mono font-bold">UDYAM-TN-02-0499605</span></p>
              <p>Email: <a href="mailto:support@poshpigeon.in" className="text-amber-700 underline font-medium">support@poshpigeon.in</a></p>
              <p>Address: No.76/41, Block Periyanna Street, Seven Wells, Chennai, Tamil Nadu – 600001, India</p>
              <p>Helpline: +91 84280 98162 (Mon–Sat, 10 AM – 6 PM IST)</p>
            </div>
          </section>

        </div>
      </Container>
    </div>
  );
}
