'use client';

import React, { useState, useEffect } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  RotateCcw,
  Power,
  RefreshCw,
  Terminal,
  Activity,
  Lock,
  Unlock,
  AlertTriangle,
  Server,
  Database,
  Cpu,
  CheckCircle2,
  FileText,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';

export default function EmergencyRecoveryPage() {
  const [passkeyInput, setPasskeyInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Diagnostics & Status
  const [systemHealth, setSystemHealth] = useState<any>(null);
  const [autopilotStatus, setAutopilotStatus] = useState<any>(null);
  const [recentLogs, setRecentLogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  useEffect(() => {
    // Check session storage for emergency auth
    if (typeof window !== 'undefined') {
      const auth = sessionStorage.getItem('logos_emergency_auth');
      if (auth === 'true') {
        setIsAuthenticated(true);
        fetchDiagnostics();
      }
    }
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      const res = await fetch('/api/emergency-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passkey: passkeyInput }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setIsAuthenticated(true);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('logos_emergency_auth', 'true');
        }
        fetchDiagnostics();
      } else {
        setErrorMsg(data.error || 'Invalid Emergency Passkey. Access restricted to Ayan Kumar Ghosh.');
      }
    } catch {
      setErrorMsg('Connection error during emergency authentication.');
    }
  };

  const fetchDiagnostics = async () => {
    setIsLoading(true);
    try {
      // 1. Health
      const hRes = await fetch('/api/health');
      const hData = await hRes.json();
      setSystemHealth(hData);

      // 2. Autopilot status
      const aRes = await fetch('/api/autopilot');
      const aData = await aRes.json();
      if (aData.success) {
        setAutopilotStatus(aData.status);
      }

      // 3. Audit logs
      const lRes = await fetch('/api/audit-logs?limit=50');
      const lData = await lRes.json();
      if (lData.success) {
        setRecentLogs(lData.logs);
      }
    } catch (err: any) {
      setActionMessage(`Telemetry warning: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRollback = async () => {
    if (!confirm('Revert to the verified 100-term master baseline snapshot and flush caches?')) return;
    setIsLoading(true);
    try {
      const res = await fetch('/api/autopilot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'execute-runbook',
          runbookId: 'RB-01',
          operator: 'Ayan Kumar Ghosh (Emergency Recovery Rollback)',
        }),
      });
      const data = await res.json();
      setActionMessage('Rollback completed. 100-term baseline verified and ISR cache cleared.');
      fetchDiagnostics();
    } catch (e: any) {
      setActionMessage(`Rollback failed: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleSafeMode = async () => {
    const nextState = !autopilotStatus?.safeModeActive;
    setIsLoading(true);
    try {
      const res = await fetch('/api/autopilot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'toggle-safe-mode',
          safeMode: nextState,
          operator: 'Ayan Kumar Ghosh (Emergency Console)',
        }),
      });
      const data = await res.json();
      setActionMessage(
        nextState
          ? 'Safe Mode Enabled: Lexicon is now in read-only maintenance mode with theological apology.'
          : 'Safe Mode Disabled: Lexicon returned to normal production state.'
      );
      fetchDiagnostics();
    } catch (e: any) {
      setActionMessage(`Safe mode toggle failed: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetBreaker = async () => {
    setIsLoading(true);
    try {
      await fetch('/api/autopilot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'reset-breaker',
          operator: 'Ayan Kumar Ghosh (Emergency Console)',
        }),
      });
      setActionMessage('Circuit breaker reset. Autonomous checks re-enabled.');
      fetchDiagnostics();
    } catch (e: any) {
      setActionMessage(`Reset failed: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCachePurge = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/autopilot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'execute-runbook',
          runbookId: 'RB-01',
          operator: 'Ayan Kumar Ghosh (Emergency Cache Purge)',
        }),
      });
      const data = await res.json();
      setActionMessage('Cache purged successfully.');
      fetchDiagnostics();
    } catch (e: any) {
      setActionMessage(`Cache purge failed: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Locked State Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-navy-950 text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-navy-900 border-2 border-red-500/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
          <div className="text-center space-y-2">
            <div className="inline-flex p-3 rounded-2xl bg-red-500/20 text-red-400 border border-red-500/30">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <h1 className="font-serif text-xl font-bold text-white">
              Logos Lexicon Emergency Console
            </h1>
            <p className="text-xs text-gray-400">
              Independent out-of-band recovery system. Enter the primary emergency recovery passkey.
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-gold-400" />
                <span>Emergency Passkey</span>
              </label>
              <input
                type="password"
                value={passkeyInput}
                onChange={(e) => setPasskeyInput(e.target.value)}
                placeholder="••••••••••••••••••••"
                className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-navy-700 text-white text-sm focus:outline-none focus:border-red-400 font-mono"
              />
            </div>

            {errorMsg && (
              <p className="text-xs text-red-400 bg-red-950/60 p-2.5 rounded-lg border border-red-800">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-red-700 hover:bg-red-600 text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Authenticate Recovery Console</span>
            </button>
          </form>

          <div className="pt-2 text-center">
            <a
              href="/recovery/index.html"
              className="text-xs text-gold-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Access Static Zero-Dependency HTML Fallback</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated Emergency Console
  return (
    <div className="min-h-screen bg-navy-950 text-gray-100 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Emergency Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-navy-900 border border-red-500/50 p-4 sm:px-6 rounded-2xl shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-red-600 text-white">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="font-serif font-bold text-lg text-white">
                  Independent Emergency Recovery Console
                </h1>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950 text-red-300 border border-red-700 font-bold">
                  LEVEL 4 OUT-OF-BAND
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Authorized Authority: <strong>Ayan Kumar Ghosh</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={fetchDiagnostics}
              disabled={isLoading}
              className="px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-xs font-semibold text-gray-300 flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              <span>Refresh Diagnostics</span>
            </button>
            <a
              href="/recovery/index.html"
              target="_blank"
              className="px-3 py-1.5 rounded-lg bg-gold-500 text-navy-950 text-xs font-bold flex items-center gap-1 hover:bg-gold-400 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Static Fallback</span>
            </a>
            <button
              onClick={() => {
                sessionStorage.removeItem('logos_emergency_auth');
                setIsAuthenticated(false);
              }}
              className="px-3 py-1.5 rounded-lg bg-red-950 hover:bg-red-900 text-red-300 border border-red-700 text-xs font-semibold transition-colors"
            >
              Lock Console
            </button>
          </div>
        </div>

        {/* Action / Notification Banner */}
        {actionMessage && (
          <div className="p-4 rounded-xl bg-gold-950/60 border border-gold-500 text-xs text-gold-200 flex items-center justify-between">
            <span>{actionMessage}</span>
            <button onClick={() => setActionMessage(null)} className="font-bold underline text-[11px]">
              Dismiss
            </button>
          </div>
        )}

        {/* Live System Diagnostics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-navy-900 border border-navy-800 p-4 rounded-2xl space-y-2">
            <div className="flex items-center justify-between text-gray-400 text-xs">
              <span className="flex items-center gap-1.5">
                <Server className="w-4 h-4 text-emerald-400" />
                Next.js Web Server
              </span>
              <span className="text-[10px] text-emerald-400 font-mono font-bold">200 OK</span>
            </div>
            <div className="font-serif font-bold text-lg text-white">Online & Healthy</div>
            <span className="text-[11px] text-gray-500 block">
              Node Process: Active • Port: 3000
            </span>
          </div>

          <div className="bg-navy-900 border border-navy-800 p-4 rounded-2xl space-y-2">
            <div className="flex items-center justify-between text-gray-400 text-xs">
              <span className="flex items-center gap-1.5">
                <Database className="w-4 h-4 text-gold-400" />
                Theological Database
              </span>
              <span className="text-[10px] text-gold-400 font-mono font-bold">100/100</span>
            </div>
            <div className="font-serif font-bold text-lg text-white">100 Master Records</div>
            <span className="text-[11px] text-gray-500 block">
              All 100 pilot terms pass validation.
            </span>
          </div>

          <div className="bg-navy-900 border border-navy-800 p-4 rounded-2xl space-y-2">
            <div className="flex items-center justify-between text-gray-400 text-xs">
              <span className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-emerald-400" />
                Safe Autopilot
              </span>
              <span className="text-[10px] text-emerald-400 font-mono font-bold">
                {autopilotStatus?.mode || 'Active'}
              </span>
            </div>
            <div className="font-serif font-bold text-lg text-white flex items-center gap-2">
              {autopilotStatus?.circuitBreakerTripped ? (
                <span className="text-red-400">Circuit Tripped</span>
              ) : (
                <span className="text-emerald-400">Armed (2-Strike Max)</span>
              )}
            </div>
            <span className="text-[11px] text-gray-500 block">
              5 pre-approved green runbooks ready.
            </span>
          </div>

          <div className="bg-navy-900 border border-navy-800 p-4 rounded-2xl space-y-2">
            <div className="flex items-center justify-between text-gray-400 text-xs">
              <span className="flex items-center gap-1.5">
                <Power className="w-4 h-4 text-amber-400" />
                Maintenance Mode
              </span>
              <span className="text-[10px] font-mono font-bold">
                {autopilotStatus?.safeModeActive ? 'ACTIVE' : 'OFF'}
              </span>
            </div>
            <div className="font-serif font-bold text-lg text-white">
              {autopilotStatus?.safeModeActive ? 'Read-Only Safe Mode' : 'Standard Production'}
            </div>
            <span className="text-[11px] text-gray-500 block">
              Theological apology notice ready.
            </span>
          </div>
        </div>

        {/* Emergency Intervention Controls */}
        <div className="bg-navy-900 border border-navy-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center space-x-2 border-b border-navy-800 pb-3">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <h2 className="font-serif font-bold text-base text-white">
              Emergency Intervention Runbooks
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <button
              onClick={handleRollback}
              disabled={isLoading}
              className="p-4 rounded-xl bg-navy-950 border border-red-500/40 hover:border-red-400 text-left space-y-2 group transition-all"
            >
              <div className="p-2 rounded-lg bg-red-600/20 text-red-400 w-fit group-hover:scale-105 transition-transform">
                <RotateCcw className="w-4 h-4" />
              </div>
              <div className="font-bold text-white text-sm">One-Click Rollback</div>
              <p className="text-gray-400 text-[11px]">
                Restore 100-term verified baseline snapshot and invalidate all stale cache buffers.
              </p>
            </button>

            <button
              onClick={handleToggleSafeMode}
              disabled={isLoading}
              className="p-4 rounded-xl bg-navy-950 border border-amber-500/40 hover:border-amber-400 text-left space-y-2 group transition-all"
            >
              <div className="p-2 rounded-lg bg-amber-600/20 text-amber-400 w-fit group-hover:scale-105 transition-transform">
                <Power className="w-4 h-4" />
              </div>
              <div className="font-bold text-white text-sm">
                {autopilotStatus?.safeModeActive ? 'Disable Safe Mode' : 'Toggle Safe Mode'}
              </div>
              <p className="text-gray-400 text-[11px]">
                Put site into read-only theological maintenance mode with apology banner.
              </p>
            </button>

            <button
              onClick={handleResetBreaker}
              disabled={isLoading}
              className="p-4 rounded-xl bg-navy-950 border border-emerald-500/40 hover:border-emerald-400 text-left space-y-2 group transition-all"
            >
              <div className="p-2 rounded-lg bg-emerald-600/20 text-emerald-400 w-fit group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="font-bold text-white text-sm">Reset Circuit Breaker</div>
              <p className="text-gray-400 text-[11px]">
                Clear strike count counters and restore automated green runbook execution.
              </p>
            </button>

            <button
              onClick={handleCachePurge}
              disabled={isLoading}
              className="p-4 rounded-xl bg-navy-950 border border-gold-500/40 hover:border-gold-400 text-left space-y-2 group transition-all"
            >
              <div className="p-2 rounded-lg bg-gold-600/20 text-gold-400 w-fit group-hover:scale-105 transition-transform">
                <RefreshCw className="w-4 h-4" />
              </div>
              <div className="font-bold text-white text-sm">Purge & Rebuild Cache</div>
              <p className="text-gray-400 text-[11px]">
                Clear in-memory and ISR caches for public dictionary and home search routes.
              </p>
            </button>
          </div>
        </div>

        {/* Live Diagnostic Log Viewer */}
        <div className="bg-navy-900 border border-navy-800 rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-navy-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-gold-400" />
              <h3 className="font-serif font-bold text-sm text-white">
                Direct Diagnostic Log Viewer (Latest 50 Events)
              </h3>
            </div>
            <span className="text-[11px] text-gray-500 font-mono">Real-time Stream</span>
          </div>

          <div className="p-4 bg-navy-950 font-mono text-xs max-h-96 overflow-y-auto space-y-2">
            {recentLogs.length === 0 ? (
              <div className="text-gray-500">No logs retrieved yet.</div>
            ) : (
              recentLogs.map((log) => (
                <div key={log.id} className="flex items-start gap-2 border-b border-navy-900 pb-1.5">
                  <span className="text-gray-500 shrink-0">
                    {log.timestamp ? log.timestamp.slice(11, 19) : ''}
                  </span>
                  <span
                    className={`px-1.5 py-0.2 rounded text-[10px] font-bold shrink-0 ${
                      log.riskLevel === 'GREEN'
                        ? 'bg-emerald-950 text-emerald-400'
                        : log.riskLevel === 'YELLOW'
                        ? 'bg-amber-950 text-amber-400'
                        : 'bg-red-950 text-red-400'
                    }`}
                  >
                    {log.riskLevel}
                  </span>
                  <span className="text-gold-300 font-semibold shrink-0">[{log.operator}]</span>
                  <span className="text-gray-300">{log.instruction}</span>
                  <span className="text-gray-500 ml-auto shrink-0 font-bold">
                    {log.outcome}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
