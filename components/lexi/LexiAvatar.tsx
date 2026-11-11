'use client';

import React from 'react';

interface LexiAvatarProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showStatus?: boolean;
  status?: 'ready' | 'thinking' | 'reviewing';
  interactive?: boolean;
  onClick?: () => void;
}

export const LexiAvatar: React.FC<LexiAvatarProps> = ({
  className = '',
  size = 'md',
  showStatus = false,
  status = 'ready',
  interactive = false,
  onClick,
}) => {
  const sizeMap = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const statusColorMap = {
    ready: 'bg-emerald-500',
    thinking: 'bg-gold-500 animate-pulse',
    reviewing: 'bg-blue-500',
  };

  return (
    <div
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-2xl p-1.5 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 border border-gold-500/30 shadow-md ${
        interactive ? 'cursor-pointer hover:border-gold-400 hover:scale-105 transition-all' : ''
      } ${sizeMap[size]} ${className}`}
      role="img"
      aria-label="Lexi Theological Research Assistant Emblem"
    >
      {/* Theological Seal Motif: Open Codex with Divine Light and Classical Chi-Rho Monogram */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        <defs>
          <linearGradient id="lexiSealGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5D061" />
            <stop offset="50%" stopColor="#E5C158" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
          <linearGradient id="lexiSealBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3E62" />
            <stop offset="100%" stopColor="#0B192C" />
          </linearGradient>
        </defs>

        {/* Outer Halo / Wisdom Ring */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="url(#lexiSealGold)"
          strokeWidth="2"
          strokeDasharray="4 2"
          opacity="0.75"
        />

        {/* Inner Octagonal Medallion */}
        <polygon
          points="50,8 79,21 92,50 79,79 50,92 21,79 8,50 21,21"
          fill="url(#lexiSealBlue)"
          stroke="url(#lexiSealGold)"
          strokeWidth="2"
        />

        {/* Open Codex Pages */}
        <path
          d="M 26 62 C 38 60, 48 64, 50 67 C 52 64, 62 60, 74 62 L 74 38 C 62 36, 52 40, 50 43 C 48 40, 38 36, 26 38 Z"
          fill="#FAF8F5"
          stroke="#D4AF37"
          strokeWidth="1.8"
        />

        {/* Codex Spine & Center Rib */}
        <line x1="50" y1="43" x2="50" y2="67" stroke="#B8972E" strokeWidth="2" />

        {/* Left Page Scripture Lines */}
        <line x1="31" y1="44" x2="45" y2="43" stroke="#CBD5E1" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="31" y1="49" x2="45" y2="48" stroke="#CBD5E1" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="31" y1="54" x2="43" y2="53" stroke="#CBD5E1" strokeWidth="1.2" strokeLinecap="round" />

        {/* Right Page Scripture Lines */}
        <line x1="55" y1="43" x2="69" y2="44" stroke="#CBD5E1" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="55" y1="48" x2="69" y2="49" stroke="#CBD5E1" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="55" y1="53" x2="67" y2="54" stroke="#CBD5E1" strokeWidth="1.2" strokeLinecap="round" />

        {/* Central Cross / Star of Truth Rising */}
        <path
          d="M 50 18 L 52.5 28 L 62 30 L 52.5 32 L 50 42 L 47.5 32 L 38 30 L 47.5 28 Z"
          fill="url(#lexiSealGold)"
        />

        {/* Alpha and Omega Inscriptions (Subtle) */}
        <text x="28" y="32" fill="#E5C158" fontSize="10" fontFamily="serif" fontWeight="bold" opacity="0.85">Α</text>
        <text x="65" y="32" fill="#E5C158" fontSize="10" fontFamily="serif" fontWeight="bold" opacity="0.85">Ω</text>
      </svg>

      {/* Optional Status Pill */}
      {showStatus && (
        <span
          className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-navy-950 ${statusColorMap[status]}`}
          title={`Lexi is ${status}`}
        />
      )}
    </div>
  );
};
