import React, { useState } from 'react';
import { 
  Globe, Sparkles, ArrowRight, BookOpen, Trophy, 
  Languages, Sun, Moon, Eye
} from 'lucide-react';

// Use public/memories paths served directly by Vite
const memoryImages = [
  '/memories/IMG20260706130711.jpg',
  '/memories/IMG_3456.jpg',
  '/memories/IMG_3464.jpg',
  '/memories/IMG_8583.jpg',
  '/memories/PXL_20260701_035827429.jpg',
  '/memories/PXL_20260706_051237265.jpg'
];

export const WelcomeScreen = ({ 
  onBegin, 
  language, 
  setLanguage, 
  theme, 
  setTheme 
}) => {

  const isMs = language === 'ms';
  
  // Interactive Background Opacity State (defaults to 50%)
  const [bgOpacity, setBgOpacity] = useState(0.50);

  // Create duplicate tracks for continuous seamless infinite vertical scrolling
  const col1 = [...memoryImages, ...memoryImages, ...memoryImages];
  const col2 = [...memoryImages].reverse().concat([...memoryImages].reverse(), [...memoryImages].reverse());
  const col3 = [memoryImages[2], memoryImages[0], memoryImages[4], memoryImages[1], memoryImages[5], memoryImages[3], memoryImages[2], memoryImages[0], memoryImages[4], memoryImages[1], memoryImages[5], memoryImages[3]];

  const toggleLanguage = () => setLanguage(language === 'en' ? 'ms' : 'en');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const togglePhotoVisibility = () => {
    // Quick toggle between OFF (5%) and ON (60%)
    setBgOpacity(prev => prev > 0.1 ? 0.05 : 0.60);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-slate-950 text-white select-none">
      
      {/* Scroll-Animated Photo Gallery Background Track with Dynamic Opacity */}
      <div 
        className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-4 p-4 filter pointer-events-none scale-105 transition-opacity duration-300"
        style={{ opacity: bgOpacity }}
      >
        
        {/* Track 1: Moving UP */}
        <div className="flex flex-col gap-4 animate-marquee-up">
          {col1.map((imgSrc, idx) => (
            <div key={`col1-${idx}`} className="h-64 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img src={imgSrc} alt="Class Memory" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Track 2: Moving DOWN */}
        <div className="flex flex-col gap-4 animate-marquee-down">
          {col2.map((imgSrc, idx) => (
            <div key={`col2-${idx}`} className="h-64 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img src={imgSrc} alt="Class Memory" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Track 3: Moving UP (Hidden on small mobile) */}
        <div className="hidden md:flex flex-col gap-4 animate-marquee-up">
          {col3.map((imgSrc, idx) => (
            <div key={`col3-${idx}`} className="h-64 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img src={imgSrc} alt="Class Memory" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

      </div>

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/70 backdrop-blur-[1px]"></div>

      {/* BOTTOM-LEFT CORNER CONTROLS: Slider & Quick Toggle */}
      <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 p-2.5 px-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 shadow-2xl">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
          <Eye className="w-4 h-4 text-pink-400 shrink-0" />
          <span className="hidden sm:inline">{isMs ? 'Foto Latar' : 'Photo Background'}:</span>
        </div>

        {/* Quick ON / OFF Toggle Button */}
        <button
          onClick={togglePhotoVisibility}
          className={`px-2.5 py-1 rounded-lg text-xs font-extrabold transition-all border ${
            bgOpacity > 0.1 
              ? 'bg-pink-600/30 text-pink-300 border-pink-500/50 hover:bg-pink-600/40' 
              : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700'
          }`}
          title="Toggle Background Photo Gallery ON / OFF"
        >
          {bgOpacity > 0.1 ? (isMs ? 'HIDUP' : 'ON') : (isMs ? 'PADAM' : 'OFF')}
        </button>

        {/* Fine-Tuning Range Slider */}
        <input 
          type="range"
          min="0.05"
          max="1.00"
          step="0.05"
          value={bgOpacity}
          onChange={(e) => setBgOpacity(parseFloat(e.target.value))}
          className="w-20 sm:w-28 cursor-pointer accent-pink-500"
          title="Adjust Background Photo Opacity"
        />

        <span className="text-xs font-black text-pink-400 min-w-[32px] text-right">
          {Math.round(bgOpacity * 100)}%
        </span>
      </div>

      {/* Top Right Controls: Language & Theme Toggle */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-lg border border-white/15 text-xs font-bold transition-all shadow-lg"
        >
          <Languages className="w-4 h-4 text-indigo-400" />
          <span>{language === 'en' ? 'Bahasa Melayu' : 'English'}</span>
        </button>

        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-lg border border-white/15 transition-all shadow-lg"
          title="Toggle Theme"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-sky-400" />}
        </button>
      </div>

      {/* Center Welcome Card Modal */}
      <div className="relative z-10 max-w-2xl w-full mx-4 p-6 md:p-10 rounded-3xl bg-slate-900/95 border border-slate-800 shadow-2xl backdrop-blur-xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
        
        {/* Course Code Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-extrabold tracking-wider uppercase shadow-inner">
          <Globe className="w-4 h-4 text-indigo-400 animate-pulse" />
          <span>SKM4263 • Multimedia Internet</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
          {isMs ? 'Portal Pembelajaran Interaktif' : 'Interactive Learning Portal'}
        </h1>

        <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto font-medium leading-relaxed">
          {isMs 
            ? 'Terokai modul kuliah lengkap, visualisasi berasaskan Web, dan glosari interaktif ELI5 untuk kursus Internet Multimedia.' 
            : 'Explore complete lecture modules, Web interactive visuals, and ELI5 dictionary tooltips for the Multimedia Internet course.'}
        </p>

        {/* Creator & Lecturer Details */}
        <div className="py-3 px-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-400 font-semibold">
          <div>
            {isMs ? 'Pereka Laman' : 'Creator'}: <span className="text-white font-bold">Yassir bin Yusrin Zakri</span>
          </div>
          <span className="hidden sm:inline text-slate-600">•</span>
          <div>
            {isMs ? 'Pensyarah' : 'Lecturer'}: <span className="text-white font-bold">Dr. Norhidayah Azman</span>
          </div>
        </div>

        {/* Key Features Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-left pt-1">
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2.5">
            <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />
            <span className="text-[11px] font-bold text-slate-200">{isMs ? '10 Modul Lengkap' : '10 Full Modules'}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-pink-400 shrink-0" />
            <span className="text-[11px] font-bold text-slate-200">{isMs ? 'Glosari ELI5' : 'ELI5 Tooltips'}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2.5">
            <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-[11px] font-bold text-slate-200">{isMs ? 'Dwi-Bahasa (EN/BM)' : 'Dual-Language'}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2.5">
            <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-[11px] font-bold text-slate-200">{isMs ? 'Arena Kuiz Interaktif' : 'Quiz Arena'}</span>
          </div>
        </div>

        {/* CTA Button "Let's Begin" */}
        <div className="pt-2">
          <button
            onClick={onBegin}
            className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-extrabold text-base shadow-xl shadow-indigo-500/30 transition-all hover:scale-105 flex items-center justify-center gap-3 mx-auto group"
          >
            <span>{isMs ? 'Mari Bermula' : "Let's Begin"}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

    </div>
  );
};
