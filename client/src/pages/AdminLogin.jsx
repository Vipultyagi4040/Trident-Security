import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Shield, Lock, User, AlertCircle, KeyRound, CheckCircle } from 'lucide-react';

export default function AdminLogin({ setCurrentPage }) {
  const { login, loading } = useAuth();
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const res = await login(usernameOrEmail, password);
    if (res.success) {
      setCurrentPage('admin');
    } else {
      setError(res.message || 'Invalid administrator credentials. Please check your username/password.');
    }
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 shadow-2xl p-8 space-y-6">

        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-primary-500/10 border border-primary-500/20 text-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-sm">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">
            Command Center Login
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Authorized Personnel Access Only • SSL 256-Bit Encrypted
          </p>
        </div>

        {error && (
          <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs flex items-center">
            <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Username or Email
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
                required
                placeholder="Enter username or email"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-primary-500 text-xs"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Password
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-primary-500 text-xs"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-600 text-white font-bold text-sm shadow-lg shadow-primary-500/25 flex items-center justify-center transition-all cursor-pointer disabled:opacity-50"
          >
            {loading ? 'Authenticating Officer...' : 'Authorize & Enter Command Center'}
          </button>
        </form>

        {/* Security Badge */}
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200/80 dark:border-white/5 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-center space-x-2">
          <Shield className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
          <span>Protected by AES-256 encryption & active lockout defense</span>
        </div>

      </div>
    </div>
  );
}
