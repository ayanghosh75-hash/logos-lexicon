'use client';

import React, { useState } from 'react';
import { X, Heart, QrCode, Copy, Check, ExternalLink, Coffee, Smartphone } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  const [copiedUpi, setCopiedUpi] = useState(false);

  if (!isOpen) return null;

  const handleCopyUpi = () => {
    navigator.clipboard.writeText('ayanghosh75@oksbi').then(() => {
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2000);
    });
  };

  const upiPayUrl = 'upi://pay?pa=ayanghosh75@oksbi&pn=Ayan%20Kumar%20Ghosh&cu=INR&tn=Logos%20Lexicon%20Ministry%20Support';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 rounded-3xl shadow-2xl p-6 space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-white bg-gray-100 dark:bg-navy-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 rounded-2xl bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400">
            <Heart className="w-7 h-7 fill-current" />
          </div>
          <h3 className="text-xl font-extrabold text-navy-950 dark:text-white">
            Support Logos Lexicon Ministry
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 max-w-sm mx-auto">
            লোগোস লেক্সিকন সেবা বিশ্বব্যাপী বিনামূল্যে রাখতে এবং নতুন আঞ্চলিক ভাষা যুক্ত করতে আপনার অনুদান সাহায্য করে।
          </p>
        </div>

        {/* Option 1: India / Bangladesh UPI QR Code */}
        <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-navy-950/80 border border-gold-400/40 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-navy-950 dark:text-gold-300 font-bold text-sm">
              <QrCode className="w-4 h-4 text-gold-600" />
              <span>১. ভারতীয় ইউপিআই (Google Pay / PhonePe / Paytm / BHIM)</span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gold-500 text-navy-950">
              যেকোনো পরিমাণ
            </span>
          </div>

          <p className="text-[11px] text-gray-600 dark:text-gray-400 text-center">
            নিচের Google Pay কিউআর কোড স্ক্যান করে অথবা সরাসরি UPI ID-তে অনুদান পাঠাতে পারেন:
          </p>

          {/* Real Scannable Google Pay QR Code Image */}
          <div className="flex justify-center my-2">
            <div className="p-1.5 bg-white rounded-2xl shadow-lg border border-gray-200">
              <img 
                src="/upi/ayan-googlepay-qr.jpg" 
                alt="Ayan Kumar Ghosh Google Pay UPI QR" 
                className="w-48 h-auto block rounded-xl shadow-sm"
              />
            </div>
          </div>

          {/* Copyable UPI ID Box */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-navy-900 border border-gray-300 dark:border-navy-700">
            <div>
              <div className="text-[10px] text-gray-500 dark:text-gray-400">Google Pay UPI ID:</div>
              <div className="font-mono text-xs font-bold text-navy-900 dark:text-gold-400">
                ayanghosh75@oksbi
              </div>
              <div className="text-[10px] text-gray-400">Payee: Ayan Kumar Ghosh</div>
            </div>
            <button
              onClick={handleCopyUpi}
              className="px-3 py-1.5 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs flex items-center space-x-1 shadow-sm transition-all"
            >
              {copiedUpi ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy UPI</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Direct Pay */}
          <a
            href={upiPayUrl}
            className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-sm transition-colors"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>মোবাইলে সরাসরি Google Pay / UPI খুলুন</span>
          </a>
        </div>

        {/* Option 2: International Donors via Buy Me a Coffee */}
        <div className="p-4 rounded-2xl bg-gray-50 dark:bg-navy-950/50 border border-gray-200 dark:border-navy-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-navy-950 dark:text-gray-200 font-bold text-sm">
              <Coffee className="w-4 h-4 text-amber-500" />
              <span>২. International Supporters (Card / PayPal)</span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-navy-800 text-amber-300">
              USD / Global
            </span>
          </div>

          <p className="text-[11px] text-gray-600 dark:text-gray-400">
            Support directly with any Credit Card, Debit Card, Apple Pay, Google Pay or PayPal:
          </p>

          <a
            href="https://www.buymeacoffee.com/AyanKumarGhosh"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 shadow-sm transition-transform hover:scale-[1.02]"
          >
            <Coffee className="w-4 h-4 fill-current" />
            <span>☕ Donate via Buy Me a Coffee Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="text-center text-[11px] text-gray-500 dark:text-gray-400 pt-1">
          Owner & Ministry Administrator: <strong>Ayan Kumar Ghosh</strong> • ayanghosh75@gmail.com
        </div>
      </div>
    </div>
  );
};
