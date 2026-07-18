import React from 'react';
import { 
  BookOpen, HelpCircle, Trophy, Sparkles, CheckCircle2, 
  ArrowRight, ShieldCheck, Globe, Layers, Share2, 
  Video, HardDrive, Camera, Rss, ShieldAlert, Cpu, Award, FileText, Check
} from 'lucide-react';
import { LECTURES_DATA } from '../data/lectures';
import { UI_TRANSLATIONS } from '../data/translations';

export const Dashboard = ({ 
  setActiveTab, 
  setSelectedLectureId, 
  completedModules, 
  bestScore,
  language
}) => {

  const t = UI_TRANSLATIONS[language]?.dashboard || UI_TRANSLATIONS.en.dashboard;

  const getModuleIcon = (iconName) => {
    switch (iconName) {
      case 'Globe': return Globe;
      case 'Rss': return Rss;
      case 'ShieldAlert': return ShieldAlert;
      case 'Camera': return Camera;
      case 'Video': return Video;
      case 'Briefcase': return Layers;
      case 'HardDrive': return HardDrive;
      case 'Share2': return Share2;
      case 'Sparkles': return Sparkles;
      case 'Cpu': return Cpu;
      default: return BookOpen;
    }
  };

  const handleModuleClick = (lectureId) => {
    setSelectedLectureId(lectureId);
    setActiveTab('learn');
  };

  const completionPercentage = Math.round((completedModules.length / LECTURES_DATA.length) * 100);

  return (
    <div className="space-y-8 pb-12">
      
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden rounded-3xl glass-card p-8 md:p-12 border border-slate-200 dark:border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-gradient-to-tr from-cyan-500/10 to-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-300 text-xs font-bold">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span>{t.badge}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
            {t.title}
          </h1>

          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => setActiveTab('learn')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-lg shadow-indigo-500/30 transition-all hover:scale-105"
            >
              <BookOpen className="w-5 h-5" />
              <span>{t.exploreBtn}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold border border-slate-300 dark:border-slate-700 transition-all hover:border-purple-500/50"
            >
              <HelpCircle className="w-5 h-5 text-purple-500" />
              <span>{t.quizBtn}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
          </div>
          <div>
            <span className="text-2xl font-black text-slate-900 dark:text-white">{completedModules.length}/10</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">{t.completedModules}</span>
          </div>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
            <HelpCircle className="w-6 h-6 text-purple-500 dark:text-purple-400" />
          </div>
          <div>
            <span className="text-2xl font-black text-slate-900 dark:text-white">50+</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">{t.quizBank}</span>
          </div>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
            <Trophy className="w-6 h-6 text-amber-500 dark:text-amber-400" />
          </div>
          <div>
            <span className="text-2xl font-black text-slate-900 dark:text-white">{bestScore !== null ? `${bestScore}%` : 'N/A'}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">{t.bestScore}</span>
          </div>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
          </div>
          <div>
            <span className="text-2xl font-black text-slate-900 dark:text-white">{completionPercentage}%</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">{t.mastery}</span>
          </div>
        </div>
      </section>

      {/* Curriculum Roadmap Grid */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{t.roadmapTitle}</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">{t.roadmapSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {LECTURES_DATA.map((lec) => {
            const Icon = getModuleIcon(lec.icon);
            const isCompleted = completedModules.includes(lec.id);
            const titleText = lec.title[language] || lec.title.en;
            const summaryText = lec.summary[language] || lec.summary.en;

            return (
              <div
                key={lec.id}
                onClick={() => handleModuleClick(lec.id)}
                className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-200 dark:border-slate-800 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${lec.color} flex items-center justify-center text-white shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {isCompleted ? (
                        <span className="flex items-center gap-1 text-[10px] font-extrabold px-2.5 py-1 bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 rounded-full border border-emerald-500/30">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" /> {t.markCompleted}
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded">
                          {lec.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors line-clamp-1">
                    {lec.id}: {titleText}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed line-clamp-3">
                    {summaryText}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-500">
                  <span>{t.studyModule}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
