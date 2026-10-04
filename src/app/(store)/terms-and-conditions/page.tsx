import React from 'react';
import Container from '@/shared/ui/layout/Container';
import { Scale, CheckCircle2, AlertCircle, ShoppingBag } from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions | Posh Pigeon',
  description: 'Terms and Conditions governing the use of Posh Pigeon online store, purchase policies, pricing, and merchant guidelines.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-bone min-h-screen py-6 md:py-10">
      <Container size="normal">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-onyx/5 border border-onyx/10 mb-4">
            <Scale className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-onyx">Merchant Agreement</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-onyx mb-4">Terms & Conditions</h1>
          <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
            Welcome to Posh Pigeon. By accessing our website and placing an order, you agree to comply with and be bound by the following terms and conditions.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm border border-zinc-200/80 space-y-10 text-xs md:text-sm text-zinc-700 leading-relaxed">

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-600" /> 1. Overview & General Terms
            </h2>
            <p>
              This website is operated by <strong>Posh Pigeon Apparel</strong>. Throughout the site, the terms "we", "us" and "our" refer to Posh Pigeon. We offer this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-zinc-100">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-600" /> 2. Product Information & Pricing
            </h2>
            <p>
              We strive to display our apparel products, fabrics, colors, and designs as accurately as possible. However, actual colors may slightly vary due to monitor calibration or photographic lighting.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-600">
              <li>All prices are listed in Indian Rupees (INR) and include applicable taxes unless specified otherwise.</li>
              <li>We reserve the right to modify prices, discontinue products, or update specifications without prior notice.</li>
              <li>In the event of a pricing error on the website, we reserve the right to cancel any orders placed for incorrectly priced products.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-zinc-100">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-600" /> 3. Order Acceptance & Payment Terms
            </h2>
            <p>
              When you place an order, you will receive an order confirmation email. Order acceptance takes place when your payment is authorized and verified.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-600">
              <li><strong>Prepaid Orders:</strong> Processed via <strong>Razorpay</strong> accepting Credit/Debit Cards, NetBanking, UPI (Google Pay, PhonePe, Paytm), and major wallets.</li>
              <li><strong>Cash on Delivery (COD):</strong> Available for select pin codes within India. Verifications may be conducted prior to dispatch.</li>
              <li>We reserve the right to refuse or cancel any order if fraudulent activity or unauthorized transactions are suspected.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-zinc-100">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx">4. User Account & Conduct</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account login credentials and for restricting access to your computer or mobile device. You agree to accept responsibility for all activities that occur under your account.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-zinc-100">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx">5. Intellectual Property Rights</h2>
            <p>
              All content on this website—including images, text, brand logos, product designs, graphics, and layout—is the exclusive intellectual property of Posh Pigeon. Unauthorized reproduction, distribution, or commercial reuse is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-zinc-100">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600" /> 6. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms and Conditions and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of <strong>India</strong>. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts in <strong>Tamil Nadu, India</strong>.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-zinc-100">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx">7. Contact Information</h2>
            <p>Questions about the Terms & Conditions should be sent to us at:</p>
            <div className="bg-bone p-4 rounded-xl border border-zinc-200 text-zinc-800 space-y-1">
              <p className="font-bold">POSH PIGEON Legal Desk</p>
              <p>MSME Reg No: <span className="font-mono font-bold">UDYAM-TN-02-0499605</span></p>
              <p>Email: <a href="mailto:support@poshpigeon.in" className="text-amber-700 underline font-medium">support@poshpigeon.in</a></p>
              <p>Phone: +91 84280 98162</p>
              <p>Address: No.76/41, Block Periyanna Street, Seven Wells, Chennai, Tamil Nadu – 600001, India</p>
            </div>
          </section>

        </div>
      </Container>
    </div>
  );
}
