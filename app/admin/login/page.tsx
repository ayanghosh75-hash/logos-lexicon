'use client';

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ADMIN_SESSION_STORAGE_KEY } from '@/lib/admin/auth';
import { Logo } from '@/components/brand/Logo';
import { Lock, ShieldCheck, Eye, EyeOff, AlertCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTarget = searchParams?.get('redirect') || '/admin/lexi';

  const [username, setUsername] = useState('');
  const [passcode, setPasscode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, passcode }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('logos_admin_user', JSON.stringify(data.user));
        }
        router.push(redirectTarget);
      } else {
        setError(data.error || 'Invalid administrative credentials. Access restricted to authorized theological staff.');
        setIsLoading(false);
      }
    } catch (err) {
      setError('Connection error during authentication.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden text-white">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 text-center space-y-3">
        <Link href="/" className="inline-block">
          <Logo variant="compact" theme="dark" size={44} />
        </Link>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-gold-200">
          Administrative Portal Sign-In
        </h2>
        <p className="text-xs text-gray-400 max-w-sm mx-auto">
          Restricted access for Chief Theological Editor & Authorized Operations Administrators.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
        <div className="bg-navy-900 py-8 px-6 shadow-2xl rounded-2xl border border-gold-400/30 sm:px-10 space-y-6">
          {error && (
            <div className="bg-red-950/80 border border-red-500/50 p-3.5 rounded-xl text-xs text-red-200 flex items-start space-x-2 animate-fade-in">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                Admin Username
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. admin"
                className="w-full bg-navy-950 border border-navy-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                Security Passcode
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-navy-950 border border-navy-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-white"
                  aria-label={showPassword ? 'Hide passcode' : 'Show passcode'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold py-2.5 px-4 rounded-xl text-xs shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <Lock className="w-4 h-4" />
                <span>{isLoading ? 'Verifying...' : 'Sign In to Lexi Console'}</span>
              </button>
            </div>
          </form>

          <div className="pt-4 border-t border-navy-800 text-center space-y-2">
            <div className="flex items-center justify-center space-x-1.5 text-[11px] text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              <span>Session encrypted • 24-hour auto-expiration</span>
            </div>
            <div>
              <Link
                href="/"
                className="text-xs text-gold-400 hover:underline inline-flex items-center space-x-1"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Return to Public Dictionary</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-navy-950 text-white p-8">Loading sign-in...</div>}>
      <LoginForm />
    </Suspense>
  );
}
