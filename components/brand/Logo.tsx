import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'compact' | 'icon';
  theme?: 'dark' | 'light';
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  theme = 'light',
  size = 40,
}) => {
  const isDark = theme === 'dark';
  const navyColor = isDark ? '#FFFFFF' : '#0B192C';
  const royalColor = isDark ? '#60A5FA' : '#1E3E62';
  const goldColor = '#D4AF37';

  // Master Vector Emblem combining:
  // 1. Open Book Pages
  // 2. Divine Light Beam radiating upward
  // 3. Subtle Greek Alpha on left page
  // 4. Subtle Hebrew Aleph on right page
  // 5. Distinctive "L" foundation
  // 6. Communicative / language soundwaves
  const iconElement = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block flex-shrink-0"
      aria-label="Logos Lexicon Emblem"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D061" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#A8833E" />
        </linearGradient>
        <linearGradient id="beamGradient" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F5D061" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="bookNavyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B192C" />
          <stop offset="100%" stopColor="#1E3E62" />
        </linearGradient>
      </defs>

      {/* Central Radiating Beam of Light (Illumination) */}
      <polygon points="50,15 42,48 58,48" fill="url(#beamGradient)" opacity="0.6" />
      <polygon points="50,6 47,28 53,28" fill="#F5D061" opacity="0.9" />

      {/* Left Book Page (with subtle Alpha contour) */}
      <path
        d="M 48 50 C 36 46, 20 46, 12 52 C 12 68, 12 74, 12 76 C 22 70, 36 70, 48 74 Z"
        fill="url(#bookNavyGradient)"
        stroke={goldColor}
        strokeWidth="1.5"
      />
      {/* Subtle Alpha mark on left page */}
      <path
        d="M 28 61 C 25 58, 23 60, 23 63 C 23 66, 27 67, 30 67 C 32 67, 34 66, 35 63 C 35 59, 32 58, 28 61 Z"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Right Book Page (with subtle Aleph contour) */}
      <path
        d="M 52 50 C 64 46, 80 46, 88 52 C 88 68, 88 74, 88 76 C 78 70, 64 70, 52 74 Z"
        fill="url(#bookNavyGradient)"
        stroke={goldColor}
        strokeWidth="1.5"
      />
      {/* Subtle Aleph mark on right page */}
      <path
        d="M 68 59 L 74 69 M 70 61 L 74 61 M 72 67 L 76 67"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Distinctive Architectural "L" Spine Foundation */}
      <path
        d="M 12 76 C 24 72, 38 72, 49 76 L 49 84 C 36 80, 22 80, 10 84 Z"
        fill="url(#goldGradient)"
      />
      <path
        d="M 49 84 L 88 84 C 90 84, 91 82, 91 80 L 91 76 C 80 72, 65 72, 51 76 Z"
        fill="url(#goldGradient)"
      />

      {/* Multilingual Speech / Language Arc */}
      <path
        d="M 22 36 C 30 26, 70 26, 78 36"
        stroke={goldColor}
        strokeWidth="1.5"
        strokeDasharray="2 3"
        strokeLinecap="round"
      />
      <circle cx="50" cy="18" r="2.5" fill="#F5D061" />
    </svg>
  );

  if (variant === 'icon') {
    return iconElement;
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        {iconElement}
        <div className="flex flex-col">
          <span className="font-serif font-bold tracking-tight text-lg leading-none" style={{ color: navyColor }}>
            Logos
          </span>
          <span className="font-sans text-xs tracking-widest uppercase font-semibold text-gold-500 leading-tight">
            Lexicon
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        {iconElement}
        <div className="flex flex-col">
          <div className="flex items-baseline space-x-1.5">
            <span className="font-serif font-bold text-xl tracking-tight" style={{ color: navyColor }}>
              Logos
            </span>
            <span className="font-serif font-medium text-xl text-gold-500">
              Lexicon
            </span>
          </div>
          <span className="text-[11px] font-sans tracking-wider text-gray-500 uppercase font-medium">
            Multilingual Biblical & Theological Dictionary
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {iconElement}
      <div className="mt-2">
        <h1 className="font-serif text-2xl font-bold tracking-tight" style={{ color: navyColor }}>
          Logos <span className="text-gold-500 font-semibold">Lexicon</span>
        </h1>
        <p className="text-xs text-gray-500 uppercase tracking-widest font-medium mt-0.5">
          Understand the Word. Explore Every Language.
        </p>
      </div>
    </div>
  );
};
