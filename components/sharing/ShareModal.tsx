'use client';

import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import {
  X,
  Share2,
  Copy,
  Check,
  Download,
  MessageSquare,
  Send,
  Mail,
  Smartphone,
  ExternalLink,
  Facebook,
  FileText,
} from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  definition?: string;
  path?: string; // e.g. / or /term/grace
  languageName?: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  title = 'Logos Lexicon',
  definition,
  path = '/',
  languageName = 'English',
}) => {
  const [copied, setCopied] = useState(false);
  const [qrSvg, setQrSvg] = useState<string>('');

  // Permanent Base URL strictly enforced (Canonical domain only)
  const PERMANENT_BASE_URL = 'https://logoslexicon.org';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const permanentUrl = cleanPath === '/' ? `${PERMANENT_BASE_URL}/` : `${PERMANENT_BASE_URL}${cleanPath}`;

  // Tailor message based on whether sharing the full app or a specific theological term
  const isFullAppShare = cleanPath === '/' || title === 'Logos Lexicon';

  const shareText = isFullAppShare
    ? `Explore Logos Lexicon—a multilingual biblical and theological dictionary with English, Indian languages, Korean, Biblical Greek and Hebrew. Open or install it here: ${permanentUrl}`
    : `Explore ‘${title}’ on Logos Lexicon—a multilingual biblical and theological dictionary with English, Indian languages, Korean, Biblical Greek and Hebrew. Read the entry here: ${permanentUrl}`;

  useEffect(() => {
    if (!isOpen) return;

    // Generate dynamic QR code vector for display
    QRCode.toString(
      permanentUrl,
      {
        type: 'svg',
        color: {
          dark: '#0B192C',
          light: '#FFFFFF',
        },
        margin: 3,
        width: 220,
        errorCorrectionLevel: 'H',
      },
      (err, svgString) => {
        if (!err && svgString) {
          setQrSvg(svgString);
        }
      }
    );
  }, [isOpen, permanentUrl]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(permanentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error('Clipboard copy error:', e);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && 'share' in navigator) {
      try {
        await navigator.share({
          title: isFullAppShare ? 'Logos Lexicon' : `${title} — Logos Lexicon`,
          text: shareText,
          url: permanentUrl,
        });
      } catch (err) {
        // Share dismissed
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-navy-900 border border-gold-400/30 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-navy-900 text-white flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center space-x-2">
            <Share2 className="w-5 h-5 text-gold-400" />
            <h3 className="font-serif font-bold text-lg text-gold-200">
              {isFullAppShare ? 'Share Logos Lexicon' : `Share ‘${title}’`}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[82vh] overflow-y-auto">
          {/* Permanent Link Input */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
              Permanent HTTPS Address
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                readOnly
                value={permanentUrl}
                className="flex-1 bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-700 text-xs font-mono p-2.5 rounded-lg text-gray-800 dark:text-gray-200 select-all"
              />
              <button
                onClick={handleCopy}
                className="bg-gold-500 hover:bg-gold-600 text-navy-950 px-3.5 py-2.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors shadow-sm flex-shrink-0"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy Link'}</span>
              </button>
            </div>
            <p className="text-[11px] text-gray-500 mt-1">
              Permanent address. Remains unchanged through application updates and infrastructure migrations.
            </p>
          </div>

          {/* Social Share Buttons */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
              Share to Communication Channels
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {/* WhatsApp */}
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-gray-200 dark:border-navy-700 hover:border-emerald-500 bg-white dark:bg-navy-800 flex items-center justify-center space-x-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp</span>
              </a>

              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(permanentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-gray-200 dark:border-navy-700 hover:border-blue-600 bg-white dark:bg-navy-800 flex items-center justify-center space-x-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors shadow-sm"
              >
                <Facebook className="w-4 h-4 text-blue-600" />
                <span>Facebook</span>
              </a>

              {/* Telegram */}
              <a
                href={`https://t.me/share/url?url=${encodeURIComponent(permanentUrl)}&text=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-gray-200 dark:border-navy-700 hover:border-sky-500 bg-white dark:bg-navy-800 flex items-center justify-center space-x-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 hover:text-sky-500 transition-colors shadow-sm"
              >
                <Send className="w-4 h-4 text-sky-500" />
                <span>Telegram</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:?subject=${encodeURIComponent(
                  isFullAppShare ? 'Logos Lexicon — Multilingual Biblical & Theological Dictionary' : `${title} — Logos Lexicon`
                )}&body=${encodeURIComponent(shareText)}`}
                className="p-2.5 rounded-xl border border-gray-200 dark:border-navy-700 hover:border-rose-500 bg-white dark:bg-navy-800 flex items-center justify-center space-x-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 hover:text-rose-500 transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4 text-rose-500" />
                <span>Email</span>
              </a>

              {/* SMS */}
              <a
                href={`sms:?body=${encodeURIComponent(shareText)}`}
                className="p-2.5 rounded-xl border border-gray-200 dark:border-navy-700 hover:border-amber-500 bg-white dark:bg-navy-800 flex items-center justify-center space-x-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 hover:text-amber-500 transition-colors shadow-sm"
              >
                <Smartphone className="w-4 h-4 text-amber-500" />
                <span>SMS</span>
              </a>

              {/* Copy Direct */}
              <button
                onClick={handleCopy}
                className="p-2.5 rounded-xl border border-gray-200 dark:border-navy-700 hover:border-gold-500 bg-white dark:bg-navy-800 flex items-center justify-center space-x-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 hover:text-gold-500 transition-colors shadow-sm"
              >
                <Copy className="w-4 h-4 text-gold-500" />
                <span>Copy Link</span>
              </button>

              {/* Native Mobile Share */}
              {typeof navigator !== 'undefined' && 'share' in navigator && (
                <button
                  onClick={handleNativeShare}
                  className="col-span-2 p-2.5 rounded-xl border border-gold-400/40 bg-gold-400/10 hover:bg-gold-400/20 text-navy-900 dark:text-gold-300 flex items-center justify-center space-x-1.5 text-xs font-bold transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4 text-gold-500" />
                  <span>Device Share Menu</span>
                </button>
              )}
            </div>
          </div>

          {/* Permanent QR Code Display & Download Options */}
          <div className="bg-ivory-100 dark:bg-navy-950/60 p-4 rounded-xl border border-gray-200 dark:border-navy-800 text-center flex flex-col items-center">
            <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
              Permanent QR Code ({isFullAppShare ? 'Logos Lexicon' : title})
            </h4>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 max-w-xs mb-3">
              Scan with any mobile camera on Android, iPhone, or iPad for instant browser access.
            </p>

            <div
              className="bg-white p-3 rounded-xl shadow-md border border-gray-200 dark:border-navy-700 inline-block"
              dangerouslySetInnerHTML={{ __html: qrSvg }}
            />

            <div className="text-[11px] font-mono text-gray-500 mt-2">
              Encodes: {permanentUrl}
            </div>

            {/* Multi-Format Download Suite */}
            <div className="w-full pt-3 mt-3 border-t border-gray-200 dark:border-navy-800">
              <div className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 mb-2">
                Download Permanent QR Code for Print &amp; Media:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <a
                  href="/qr/logos-lexicon-qr.png"
                  download="logos-lexicon-qr.png"
                  className="bg-navy-800 hover:bg-navy-700 text-white text-[11px] font-medium py-1.5 px-2 rounded-lg flex items-center justify-center space-x-1 transition-colors"
                >
                  <Download className="w-3 h-3" />
                  <span>PNG</span>
                </a>
                <a
                  href="/qr/logos-lexicon-qr.jpg"
                  download="logos-lexicon-qr.jpg"
                  className="bg-navy-800 hover:bg-navy-700 text-white text-[11px] font-medium py-1.5 px-2 rounded-lg flex items-center justify-center space-x-1 transition-colors"
                >
                  <Download className="w-3 h-3" />
                  <span>JPG</span>
                </a>
                <a
                  href="/qr/logos-lexicon-qr.svg"
                  download="logos-lexicon-qr.svg"
                  className="bg-navy-800 hover:bg-navy-700 text-white text-[11px] font-medium py-1.5 px-2 rounded-lg flex items-center justify-center space-x-1 transition-colors"
                >
                  <Download className="w-3 h-3" />
                  <span>SVG</span>
                </a>
                <a
                  href="/qr/logos-lexicon-qr.pdf"
                  download="logos-lexicon-qr.pdf"
                  className="bg-gold-500 hover:bg-gold-600 text-navy-950 text-[11px] font-bold py-1.5 px-2 rounded-lg flex items-center justify-center space-x-1 transition-colors shadow-sm"
                >
                  <FileText className="w-3 h-3" />
                  <span>PDF Print</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
