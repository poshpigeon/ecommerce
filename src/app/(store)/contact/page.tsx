import React from 'react';
import Container from '@/shared/ui/layout/Container';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Posh Pigeon',
  description: 'Get in touch with Posh Pigeon customer support team for inquiries, order status, returns, and merchant assistance.',
};

export default function ContactPage() {
  return (
    <div className="bg-bone min-h-screen py-6 md:py-10">
      <Container size="normal">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-onyx/5 border border-onyx/10 mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-onyx">We're Here To Help</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-onyx mb-4">Contact Us</h1>
          <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
            Have questions about an order, product sizes, or shipping? Reach out to our dedicated support desk and we'll respond within 24 hours.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-700">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-onyx">Email Support</h3>
            <p className="text-xs text-zinc-500">For order inquiries, refunds, & assistance:</p>
            <a href="mailto:support@poshpigeon.in" className="text-xs font-bold text-amber-700 underline block">
              support@poshpigeon.in
            </a>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-700">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-onyx">Phone & WhatsApp</h3>
            <p className="text-xs text-zinc-500">Mon – Sat (10:00 AM – 6:00 PM IST):</p>
            <a href="tel:+918428098162" className="text-xs font-bold text-amber-700 underline block">
              +91 84280 98162
            </a>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-700">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-onyx">Official Registered Address</h3>
            <p className="text-xs text-zinc-600 leading-relaxed font-medium">
              <strong>POSH PIGEON</strong><br />
              No.76/41, Block Periyanna Street,<br />
              Seven Wells, Chennai,<br />
              Tamil Nadu – 600001, India
            </p>
          </div>
        </div>

        {/* Operating Hours & MSME Details Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200/80 shadow-sm max-w-2xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-zinc-700">
            <Clock className="w-4 h-4 text-amber-600" />
            <span>Customer Support Operating Hours & Business Registration</span>
          </div>
          <p className="text-xs text-zinc-600">
            Monday through Saturday: 10:00 AM to 6:00 PM IST (Closed on Sundays & National Holidays).
          </p>
          <div className="pt-2 text-[11px] text-zinc-500 font-mono">
            MSME Udyam Reg No: <span className="font-bold text-onyx">UDYAM-TN-02-0499605</span>
          </div>
        </div>

      </Container>
    </div>
  );
}
