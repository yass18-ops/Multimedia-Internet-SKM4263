import React, { useState } from 'react';
import {
  Globe, LayoutDashboard, BookOpen, HelpCircle, Menu, X,
  RotateCcw, Trophy, Sun, Moon, Languages
} from 'lucide-react';
import { UI_TRANSLATIONS } from '../data/translations';

export const Navbar = ({
  activeTab,
  setActiveTab,
  completedModulesCount,
  totalModulesCount,
  bestScore,
  onResetProgress,
  language,
  setLanguage,
  theme,
  setTheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = UI_TRANSLATIONS[language]?.nav || UI_TRANSLATIONS.en.nav;

  const navItems = [
    { id: 'dashboard', label: t.dashboard, icon: LayoutDashboard },
    { id: 'learn', label: t.learn, icon: BookOpen, badge: `${completedModulesCount}/${totalModulesCount}` },
    { id: 'quiz', label: t.quiz, icon: HelpCircle, badge: bestScore !== null ? `${bestScore}%` : null },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ms' : 'en'));
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="sticky top-0 z-50 glass-nav transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand Logo */}
          <div
            onClick={() => handleTabClick('dashboard')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
              <Globe className="w-5 h-5 text-white animate-pulse-slow" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                SKM4263 {t.title}
              </span>

            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${isActive
                      ? 'bg-indigo-600/20 text-indigo-600 dark:text-indigo-300 border border-indigo-500/30 shadow-md shadow-indigo-500/10 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-900/60'
                    }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-500 dark:text-indigo-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${isActive ? 'bg-indigo-500/30 text-indigo-700 dark:text-indigo-200' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Controls: Language, Theme, High Score & Reset */}
          <div className="hidden lg:flex items-center gap-2">

            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-500 text-xs font-bold transition-all"
              title="Switch Language (Bahasa Melayu / English)"
            >
              <Languages className="w-3.5 h-3.5 text-indigo-500" />
              <span>{language === 'en' ? 'BM' : 'EN'}</span>
            </button>

            {/* Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-amber-500 text-xs font-bold transition-all"
              title="Toggle Light / Dark Mode"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-600" />}
              <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>

            {bestScore !== null && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 dark:bg-slate-900 border border-amber-500/30 text-amber-600 dark:text-amber-300 text-xs font-bold">
                <Trophy className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                <span>{t.highScore}: {bestScore}%</span>
              </div>
            )}

            <button
              onClick={onResetProgress}
              title={t.reset}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 hover:bg-rose-100 dark:hover:bg-rose-950/40 text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-300 border border-slate-300 dark:border-slate-800 text-xs font-semibold transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.reset}</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs font-bold text-indigo-600 dark:text-indigo-400"
            >
              {language === 'en' ? 'BM' : 'EN'}
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-50/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive
                    ? 'bg-indigo-600/20 text-indigo-600 dark:text-indigo-300 border border-indigo-500/40'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-900'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-indigo-500" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-200 dark:border-slate-900 flex items-center justify-between">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {t.completed}: <span className="text-indigo-600 dark:text-indigo-400 font-bold">{completedModulesCount}</span> / {totalModulesCount}
            </div>

            <button
              onClick={() => {
                onResetProgress();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400 font-semibold px-3 py-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-300 dark:border-rose-500/20"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.reset}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
