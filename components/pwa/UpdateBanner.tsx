'use client';

import React from 'react';
import { useLexicon } from '../providers/LexiconProvider';
import { RefreshCw, X, ShieldCheck } from 'lucide-react';

export const UpdateBanner: React.FC = () => {
  const { updateAvailable, applyUpdate, dismissUpdate } = useLexicon();

  if (!updateAvailable) return null;

  return (
    <div
      role="alert"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 bg-navy-900 text-white p-4 rounded-xl shadow-2xl border border-gold-400 animate-slide-up"
    >
      <div className="flex items-start space-x-3">
        <div className="p-2 bg-gold-400 text-navy-900 rounded-lg flex-shrink-0">
          <RefreshCw className="w-5 h-5 animate-spin" style={{ animationDuration: '4s' }} />
        </div>
        <div className="flex-1">
          <h4 className="font-serif font-bold text-gold-300 text-sm">Update Available</h4>
          <p className="text-xs text-gray-200 mt-1 leading-relaxed">
            A new version of Logos Lexicon is available. Update without losing your saved words, notes or study history.
          </p>
          <div className="flex items-center space-x-2 mt-3">
            <button
              onClick={applyUpdate}
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 px-3 py-1.5 rounded-md text-xs font-semibold shadow transition-colors flex items-center space-x-1"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Update now</span>
            </button>
            <button
              onClick={dismissUpdate}
              className="bg-navy-800 hover:bg-navy-700 text-gray-300 px-3 py-1.5 rounded-md text-xs font-medium transition-colors"
            >
              Later
            </button>
          </div>
        </div>
        <button
          onClick={dismissUpdate}
          aria-label="Close notification"
          className="text-gray-400 hover:text-white p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
