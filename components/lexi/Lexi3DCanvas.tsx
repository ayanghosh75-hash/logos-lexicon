'use client';

import React from 'react';
import { LexiAvatar } from './LexiAvatar';

interface Lexi3DCanvasProps {
  className?: string;
  isSpeaking?: boolean;
  force2D?: boolean;
  mood?: 'welcoming' | 'explaining' | 'listening' | 'idle';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Lexi3DCanvas (Legacy Compatibility Shim)
 * 3D character WebGL rendering permanently disabled per Rev. Ayan Kumar Ghosh mandate.
 * Replaced with the lightweight, high-performance static 2D LexiAvatar emblem.
 */
export const Lexi3DCanvas: React.FC<Lexi3DCanvasProps> = ({
  className = '',
  isSpeaking = false,
  size = 'md',
}) => {
  const avatarSizeMap = {
    sm: 'sm' as const,
    md: 'md' as const,
    lg: 'lg' as const,
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <LexiAvatar
        size={avatarSizeMap[size]}
        showStatus={true}
        status={isSpeaking ? 'thinking' : 'ready'}
      />
    </div>
  );
};
