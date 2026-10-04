import React from 'react';
import Container from '@/shared/ui/layout/Container';
import { RefreshCw, Clock, CheckCircle, AlertTriangle, CreditCard } from 'lucide-react';

export const metadata = {
  title: 'Refund & Return Policy | Posh Pigeon',
  description: 'Posh Pigeon Return, Exchange, Cancellation and Refund Policy detailing timelines, eligibility, and Razorpay refund processing procedures.',
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-bone min-h-screen py-6 md:py-10">
      <Container size="normal">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-onyx/5 border border-onyx/10 mb-4">
            <RefreshCw className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-onyx">Hassle-Free Returns</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-onyx mb-4">Cancellation & Refund Policy</h1>
          <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
            At Posh Pigeon, customer satisfaction is our highest priority. Learn about our return windows, order cancellations, and refund processing timelines below.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm border border-zinc-200/80 space-y-10 text-xs md:text-sm text-zinc-700 leading-relaxed">

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-600" /> 1. Return & Exchange Window (7 Days)
            </h2>
            <p>
              We offer a <strong>7-day return and exchange policy</strong> from the date of order delivery. If you are unsatisfied with your purchase due to size mismatch, defect, or damage, you may initiate a return or exchange request within 7 calendar days.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-zinc-100">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-amber-600" /> 2. Return Eligibility Criteria
            </h2>
            <p>To be eligible for a return or exchange, your item must meet the following conditions:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-600">
              <li>The item must be unused, unwashed, unworn, and undamaged.</li>
              <li>Original tags, brand packaging, and barcode labels must remain intact.</li>
              <li>Proof of purchase (invoice or order confirmation number) must be presented.</li>
              <li>Items marked as "Final Sale" or promotional clearance items are ineligible for return unless delivered defective.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-zinc-100">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" /> 3. Order Cancellation Policy
            </h2>
            <p>
              You can cancel your order free of charge before it has been dispatched from our warehouse:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-600">
              <li><strong>Pre-Dispatch Cancellations:</strong> Contact us at <a href="mailto:support@poshpigeon.in" className="text-amber-700 font-bold underline">support@poshpigeon.in</a> or via your Account Order history. A 100% full refund will be issued immediately.</li>
              <li><strong>Post-Dispatch Cancellations:</strong> Once an order is shipped, it cannot be cancelled in transit. You may reject delivery or return the package after receipt per our 7-day return policy.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-zinc-100">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-amber-600" /> 4. Refund Processing Timeline (Razorpay 5–7 Working Days)
            </h2>
            <p>
              Once your returned package is received at our warehouse and passes quality inspection (usually within 24–48 hours of receipt), your refund will be processed promptly:
            </p>
            <div className="bg-bone p-4 rounded-2xl border border-zinc-200/80 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-600 mt-1.5 flex-shrink-0" />
                <div>
                  <strong className="text-onyx font-bold">Prepaid Orders (Credit/Debit Card, NetBanking, UPI, Wallets):</strong>
                  <p className="text-zinc-600">Refunds are credited directly back to the original source account via <strong>Razorpay Payment Gateway</strong> within <strong>5 to 7 working days</strong> from refund approval.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-600 mt-1.5 flex-shrink-0" />
                <div>
                  <strong className="text-onyx font-bold">Cash on Delivery (COD) Orders:</strong>
                  <p className="text-zinc-600">Refunds for COD orders will be transferred via Bank IMPS/UPI to the customer’s provided bank details within <strong>3 to 5 business days</strong> after return inspection.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-3 pt-6 border-t border-zinc-100">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx">5. How to Initiate a Return</h2>
            <p>To request a return or exchange, follow these simple steps:</p>
            <ol className="list-decimal pl-5 space-y-1.5 text-zinc-600">
              <li>Send an email to <a href="mailto:support@poshpigeon.in" className="text-amber-700 underline font-bold">support@poshpigeon.in</a> with your Order ID and photo of the item.</li>
              <li>Our support team will review your request and send reverse pickup details or return shipping address instructions.</li>
              <li>Hand over the package to our logistics partner during pickup.</li>
            </ol>
          </section>

          <section className="space-y-3 pt-6 border-t border-zinc-100">
            <h2 className="text-lg md:text-xl font-serif font-bold text-onyx">6. Contact Support</h2>
            <p>For any refund status queries or help with returns:</p>
            <div className="bg-bone p-4 rounded-xl border border-zinc-200 text-zinc-800 space-y-1">
              <p className="font-bold">POSH PIGEON Customer Desk</p>
              <p>MSME Reg No: <span className="font-mono font-bold">UDYAM-TN-02-0499605</span></p>
              <p>Email: <a href="mailto:support@poshpigeon.in" className="text-amber-700 underline font-medium">support@poshpigeon.in</a></p>
              <p>Phone: +91 84280 98162 (Mon–Sat, 10 AM – 6 PM IST)</p>
              <p>Address: No.76/41, Block Periyanna Street, Seven Wells, Chennai, Tamil Nadu – 600001, India</p>
            </div>
          </section>

        </div>
      </Container>
    </div>
  );
}
