import React, { useState } from 'react';
import { 
  Globe, Rss, ShieldAlert, Camera, Video, Briefcase, HardDrive, 
  Share2, Sparkles, Cpu, CheckCircle2, AlertTriangle, ArrowRight,
  Zap, Lock, History, Award, FileText, Binary, FileX, FileCode,
  FolderSearch, DollarSign, Gift, Repeat, RefreshCw, Layers
} from 'lucide-react';

// L01 Visual: Interactive Evolution Timeline
export const TimelineVisual = ({ data }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="glass-card rounded-2xl p-6 border border-slate-800 my-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="text-xl font-bold text-white flex items-center gap-2">
            <Globe className="w-5 h-5 text-indigo-400" /> Web Evolution Timeline
          </h4>
          <p className="text-xs text-slate-400">Click any milestone to inspect historical search & web shifts</p>
        </div>
        <span className="text-xs font-semibold px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">
          L01 Interactive
        </span>
      </div>

      {/* Timeline nodes */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        {data.items.map((item, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl text-left transition-all duration-300 border ${
                isActive
                  ? 'bg-indigo-600/30 border-indigo-500 text-white shadow-lg shadow-indigo-500/20 scale-105'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <span className={`text-xs font-bold block mb-1 ${isActive ? 'text-indigo-400' : 'text-slate-500'}`}>
                {item.year}
              </span>
              <span className="text-xs font-semibold line-clamp-1">{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active step details card */}
      <div className="bg-slate-900/90 rounded-xl p-5 border border-indigo-500/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
              Milestone {activeStep + 1} of {data.items.length} — {data.items[activeStep].year}
            </span>
            <h5 className="text-lg font-bold text-white mt-1">{data.items[activeStep].title}</h5>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">{data.items[activeStep].desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// L02 Visual: Hosted vs Self-Hosted Comparison
export const ComparisonVisual = ({ data }) => {
  return (
    <div className="glass-card rounded-2xl p-6 border border-slate-800 my-6">
      <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
        <Rss className="w-5 h-5 text-indigo-400" /> {data.title}
      </h4>
      <p className="text-xs text-slate-400 mb-6">Interactive architectural trade-offs between hosted and self-hosted publishing platforms</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: Hosted */}
        <div className="bg-slate-900/80 rounded-xl p-5 border border-indigo-500/30 hover:border-indigo-500/60 transition-all">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
            <h5 className="font-bold text-indigo-300 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse"></span>
              {data.left.title}
            </h5>
            <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded">Blogspot / WordPress.com</span>
          </div>
          <ul className="space-y-3">
            {data.left.points.map((pt, idx) => (
              <li key={idx} className="text-xs text-slate-300 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Self-Hosted */}
        <div className="bg-slate-900/80 rounded-xl p-5 border border-purple-500/30 hover:border-purple-500/60 transition-all">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
            <h5 className="font-bold text-purple-300 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse"></span>
              {data.right.title}
            </h5>
            <span className="text-[10px] font-bold px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded">WordPress.org</span>
          </div>
          <ul className="space-y-3">
            {data.right.points.map((pt, idx) => (
              <li key={idx} className="text-xs text-slate-300 flex items-start gap-2.5">
                <Zap className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// L03 Visual: Three Pillars of Digital Trust
export const TriadVisual = ({ data }) => {
  const [selectedPillar, setSelectedPillar] = useState(0);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-6 h-6 text-purple-400" />;
      case 'History': return <History className="w-6 h-6 text-indigo-400" />;
      case 'Award': return <Award className="w-6 h-6 text-emerald-400" />;
      default: return <Lock className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 border border-slate-800 my-6">
      <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
        <ShieldAlert className="w-5 h-5 text-purple-400" /> {data.title}
      </h4>
      <p className="text-xs text-slate-400 mb-6">Select a pillar to explore how digital authority is constructed and evaluated</p>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {data.pillars.map((pil, idx) => {
          const isSelected = selectedPillar === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedPillar(idx)}
              className={`p-4 rounded-xl text-left transition-all border ${
                isSelected
                  ? 'bg-purple-950/40 border-purple-500 shadow-lg shadow-purple-500/20'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                {getIcon(pil.icon)}
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${isSelected ? 'bg-purple-500/30 text-purple-200' : 'bg-slate-800 text-slate-400'}`}>
                  Pillar {idx + 1}
                </span>
              </div>
              <h5 className="font-bold text-white text-base">{pil.name}</h5>
            </button>
          );
        })}
      </div>

      <div className="bg-slate-900/90 rounded-xl p-5 border border-purple-500/30">
        <h5 className="text-sm font-bold text-purple-300 uppercase tracking-wider mb-2">
          {data.pillars[selectedPillar].name} Breakdown
        </h5>
        <p className="text-sm text-slate-300 leading-relaxed">
          {data.pillars[selectedPillar].desc}
        </p>
      </div>
    </div>
  );
};

// L04 Visual: Image Forensic Workflow
export const ForensicsVisual = ({ data }) => {
  return (
    <div className="glass-card rounded-2xl p-6 border border-slate-800 my-6">
      <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
        <Camera className="w-5 h-5 text-pink-400" /> {data.title}
      </h4>
      <p className="text-xs text-slate-400 mb-6">Standard verification methodology for detecting deepfakes, manipulated media, and fake news</p>

      <div className="grid md:grid-cols-3 gap-4">
        {data.steps.map((st, idx) => (
          <div key={idx} className="bg-slate-900/80 rounded-xl p-5 border border-pink-500/20 relative">
            <span className="text-2xl font-extrabold text-pink-500/30 absolute top-3 right-4">{st.step}</span>
            <h5 className="font-bold text-pink-300 text-sm mb-2 pr-6">{st.title}</h5>
            <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// L05 Visual: Livestreaming Monetization Wheel
export const MonetizationVisual = ({ data }) => {
  const getIcon = (name) => {
    switch(name) {
      case 'DollarSign': return <DollarSign className="w-5 h-5 text-emerald-400" />;
      case 'Gift': return <Gift className="w-5 h-5 text-rose-400" />;
      case 'Repeat': return <Repeat className="w-5 h-5 text-indigo-400" />;
      default: return <Briefcase className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 border border-slate-800 my-6">
      <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
        <Video className="w-5 h-5 text-amber-400" /> {data.title}
      </h4>
      <p className="text-xs text-slate-400 mb-6">The four primary revenue generation mechanisms on platforms like Twitch, YouTube Live, and TikTok</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.items.map((item, idx) => (
          <div key={idx} className="bg-slate-900/80 rounded-xl p-4 border border-amber-500/20 hover:border-amber-500/50 transition-all">
            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mb-3">
              {getIcon(item.icon)}
            </div>
            <h5 className="font-bold text-white text-sm mb-1">{item.name}</h5>
            <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// L06 Visual: Solar vs Satellite Portfolio Model
export const PortfolioModelVisual = ({ data }) => {
  const [model, setModel] = useState('solar');

  return (
    <div className="glass-card rounded-2xl p-6 border border-slate-800 my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-white flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-emerald-400" /> {data.title}
          </h4>
          <p className="text-xs text-slate-400">Compare traditional paper portfolios vs modern centralized e-Portfolios</p>
        </div>

        <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
          <button
            onClick={() => setModel('solar')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              model === 'solar' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Solar Model (e-Portfolio)
          </button>
          <button
            onClick={() => setModel('satellite')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              model === 'satellite' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Satellite Model (Paper)
          </button>
        </div>
      </div>

      <div className="bg-slate-900/90 rounded-xl p-6 border border-slate-800">
        {model === 'solar' ? (
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
              {data.solar.title}
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">{data.solar.desc}</p>

            {/* Visual Graphic Representation */}
            <div className="h-40 bg-slate-950 rounded-lg border border-emerald-500/30 flex items-center justify-center relative overflow-hidden">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center font-bold text-emerald-300 text-xs shadow-lg shadow-emerald-500/30 animate-pulse">
                Central Hub
              </div>
              <div className="absolute w-36 h-36 rounded-full border border-dashed border-emerald-500/30 pointer-events-none"></div>
              <div className="absolute text-[10px] text-slate-400 bottom-3">Assessors, Employers & Peers Orbit the Single Source of Truth</div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-2">
              <span className="w-3 h-3 rounded-full bg-amber-400"></span>
              {data.satellite.title}
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">{data.satellite.desc}</p>

            <div className="h-40 bg-slate-950 rounded-lg border border-amber-500/30 flex items-center justify-center gap-6 relative">
              <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded text-center text-xs text-amber-300">
                📄 Paper Copy A
              </div>
              <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded text-center text-xs text-amber-300">
                📄 Paper Copy B (Outdated)
              </div>
              <div className="absolute text-[10px] text-slate-400 bottom-3">Redundant physical binders mailed outward separately</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// L07 Visual: 4 Threats to Digital Permanence Grid
export const ThreatsVisual = ({ data }) => {
  const getIcon = (name) => {
    switch (name) {
      case 'FileX': return <FileX className="w-6 h-6 text-rose-400" />;
      case 'Binary': return <Binary className="w-6 h-6 text-amber-400" />;
      case 'FileCode': return <FileCode className="w-6 h-6 text-purple-400" />;
      default: return <FolderSearch className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 border border-slate-800 my-6">
      <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
        <HardDrive className="w-5 h-5 text-cyan-400" /> {data.title}
      </h4>
      <p className="text-xs text-slate-400 mb-6">The four foundational vulnerabilities that cause digital archive loss over time</p>

      <div className="grid md:grid-cols-2 gap-4">
        {data.threats.map((t, idx) => (
          <div key={idx} className="bg-slate-900/80 rounded-xl p-5 border border-cyan-500/20 hover:border-cyan-500/50 transition-all flex items-start gap-4">
            <div className="p-3 rounded-lg bg-slate-800/80 shrink-0">
              {getIcon(t.icon)}
            </div>
            <div>
              <h5 className="font-bold text-white text-base mb-1">{t.name}</h5>
              <p className="text-xs text-slate-300 leading-relaxed">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// L08 Visual: Metcalfe's Law Interactive Simulator
export const MetcalfeVisual = () => {
  const [users, setUsers] = useState(5);
  const networkValue = users * users;

  return (
    <div className="glass-card rounded-2xl p-6 border border-slate-800 my-6">
      <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
        <Share2 className="w-5 h-5 text-teal-400" /> Metcalfe's Law Visualizer (Value = n²)
      </h4>
      <p className="text-xs text-slate-400 mb-6">Adjust the slider to observe how a social network's utility scales quadratically with user count</p>

      <div className="bg-slate-900/90 rounded-xl p-6 border border-teal-500/30">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs text-slate-400 block">Active Users (n)</span>
            <span className="text-3xl font-extrabold text-teal-400">{users} Users</span>
          </div>

          <div className="text-right">
            <span className="text-xs text-slate-400 block">Total Network Value (n²)</span>
            <span className="text-3xl font-extrabold text-emerald-400">{networkValue} Connection Units</span>
          </div>
        </div>

        <input
          type="range"
          min="2"
          max="25"
          value={users}
          onChange={(e) => setUsers(parseInt(e.target.value))}
          className="w-full accent-teal-400 cursor-pointer h-2 bg-slate-800 rounded-lg mb-6"
        />

        {/* Visual Node Cluster */}
        <div className="h-32 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-center p-4 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-md">
            {Array.from({ length: Math.min(users, 25) }).map((_, i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full bg-teal-500/30 border border-teal-400 flex items-center justify-center text-[9px] font-bold text-teal-200 animate-pulse"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// L09 Visual: Generative AI Constraints
export const ConstraintsVisual = ({ data }) => {
  return (
    <div className="glass-card rounded-2xl p-6 border border-slate-800 my-6">
      <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-amber-400" /> {data.title}
      </h4>
      <p className="text-xs text-slate-400 mb-6">Systemic limits dictating capacity, rendering, and safety in commercial generative models</p>

      <div className="grid md:grid-cols-2 gap-4">
        {data.items.map((item, idx) => (
          <div key={idx} className="bg-slate-900/80 rounded-xl p-4 border border-amber-500/20 hover:border-amber-500/50 transition-all">
            <h5 className="font-bold text-amber-300 text-sm mb-1">{item.name}</h5>
            <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// L10 Visual: The Web Science Architecture Stack
export const StackVisual = ({ data }) => {
  return (
    <div className="glass-card rounded-2xl p-6 border border-slate-800 my-6">
      <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
        <Layers className="w-5 h-5 text-sky-400" /> {data.title}
      </h4>
      <p className="text-xs text-slate-400 mb-6">Sir Tim Berners-Lee's layered framework for building machine-readable trust in Web 3.0</p>

      <div className="space-y-3">
        {data.layers.map((lay, idx) => (
          <div key={idx} className="bg-slate-900/90 rounded-xl p-4 border border-sky-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-900 transition-all">
            <div className="flex items-center gap-3">
              <span className="text-xs font-extrabold px-2.5 py-1 bg-sky-500/20 text-sky-300 rounded border border-sky-500/30 shrink-0">
                {lay.level}
              </span>
              <h5 className="font-bold text-white text-sm">{lay.name}</h5>
            </div>
            <p className="text-xs text-slate-400">{lay.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
