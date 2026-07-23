import React from 'react';
import { 
  CheckCircle2, Circle, ArrowLeft, ArrowRight, HelpCircle, 
  Sparkles, BookOpen, Globe, Rss, ShieldAlert, Camera, Video, 
  Briefcase, HardDrive, Share2, Cpu, Check, FileText, Search, Lock, AlertTriangle, Layers, DollarSign, Binary
} from 'lucide-react';
import { LECTURES_DATA } from '../data/lectures';
import { UI_TRANSLATIONS } from '../data/translations';
import { 
  TimelineVisual, ComparisonVisual, TriadVisual, ForensicsVisual, 
  MonetizationVisual, PortfolioModelVisual, ThreatsVisual, MetcalfeVisual, 
  ConstraintsVisual, StackVisual 
} from './Visuals/InteractiveVisuals';
import { TooltipText } from './TooltipText';

export const LearnModules = ({ 
  selectedLectureId, 
  setSelectedLectureId, 
  completedModules, 
  toggleModuleCompleted, 
  setActiveTab, 
  setQuizFilterLectureId,
  language
}) => {

  const t = UI_TRANSLATIONS[language]?.learn || UI_TRANSLATIONS.en.learn;
  const currentModule = LECTURES_DATA.find(m => m.id === selectedLectureId) || LECTURES_DATA[0];
  const currentIndex = LECTURES_DATA.findIndex(m => m.id === currentModule.id);
  const isCompleted = completedModules.includes(currentModule.id);

  const getSectionIcon = (iconName) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-5 h-5 text-indigo-500" />;
      case 'Search': return <Search className="w-5 h-5 text-purple-500" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-500" />;
      case 'Rss': return <Rss className="w-5 h-5 text-indigo-500" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-emerald-500" />;
      case 'Lock': return <Lock className="w-5 h-5 text-purple-500" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-rose-500" />;
      case 'AlertTriangle': return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      case 'Camera': return <Camera className="w-5 h-5 text-pink-500" />;
      case 'Video': return <Video className="w-5 h-5 text-rose-500" />;
      case 'DollarSign': return <DollarSign className="w-5 h-5 text-emerald-500" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-teal-500" />;
      case 'HardDrive': return <HardDrive className="w-5 h-5 text-blue-500" />;
      case 'Binary': return <Binary className="w-5 h-5 text-amber-500" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-teal-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Layers': return <Layers className="w-5 h-5 text-sky-500" />;
      default: return <FileText className="w-5 h-5 text-indigo-500" />;
    }
  };

  const handleNextModule = () => {
    if (currentIndex < LECTURES_DATA.length - 1) {
      setSelectedLectureId(LECTURES_DATA[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevModule = () => {
    if (currentIndex > 0) {
      setSelectedLectureId(LECTURES_DATA[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLaunchQuizForModule = () => {
    setQuizFilterLectureId(currentModule.id);
    setActiveTab('quiz');
  };

  const renderVisual = () => {
    switch (currentModule.id) {
      case 'L01': return <TimelineVisual data={currentModule.visualData} />;
      case 'L02': return <ComparisonVisual data={currentModule.visualData} />;
      case 'L03': return <TriadVisual data={currentModule.visualData} />;
      case 'L04': return <ForensicsVisual data={currentModule.visualData} />;
      case 'L05': return <MonetizationVisual data={currentModule.visualData} />;
      case 'L06': return <PortfolioModelVisual data={currentModule.visualData} />;
      case 'L07': return <ThreatsVisual data={currentModule.visualData} />;
      case 'L08': return <MetcalfeVisual />;
      case 'L09': return <ConstraintsVisual data={currentModule.visualData} />;
      case 'L10': return <StackVisual data={currentModule.visualData} />;
      default: return null;
    }
  };

  const titleText = currentModule.title[language] || currentModule.title.en;
  const subtitleText = currentModule.subtitle[language] || currentModule.subtitle.en;
  const summaryText = currentModule.summary[language] || currentModule.summary.en;
  const takeawaysList = currentModule.keyTakeaways[language] || currentModule.keyTakeaways.en;
  const sectionsList = currentModule.sections[language] || currentModule.sections.en;

  return (
    <div className="space-y-8 pb-16">
      
      {/* Module Selector Bar */}
      <div className="glass-card rounded-2xl p-2 border border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 min-w-max">
          {LECTURES_DATA.map((lec) => {
            const isSelected = lec.id === currentModule.id;
            const isDone = completedModules.includes(lec.id);

            return (
              <button
                key={lec.id}
                onClick={() => setSelectedLectureId(lec.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-900'
                }`}
              >
                <span>{lec.id}</span>
                {isDone && (
                  <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-emerald-500 dark:text-emerald-400'}`} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Module Hero Header */}
      <div className="glass-card rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2.5 py-1 bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 rounded-lg border border-indigo-500/30">
                {currentModule.badge}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">{t.badge}</span>
            </div>

            <h1 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {currentModule.id}: {titleText}
            </h1>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mt-2 font-medium">
              {subtitleText}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => toggleModuleCompleted(currentModule.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                isCompleted
                  ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-indigo-500'
              }`}
            >
              {isCompleted ? <Check className="w-4 h-4 text-emerald-500" /> : <Circle className="w-4 h-4 text-slate-400" />}
              <span>{isCompleted ? t.markedComplete : t.markComplete}</span>
            </button>

            <button
              onClick={handleLaunchQuizForModule}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-500/20"
            >
              <HelpCircle className="w-4 h-4" />
              <span>{t.practiceQuiz}</span>
            </button>
          </div>
        </div>

        <p className="text-sm text-slate-900 dark:text-slate-100 pt-6 leading-relaxed font-medium">
          <TooltipText content={summaryText} language={language} />
        </p>
      </div>

      {/* Key Takeaways Section */}
      <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" /> {t.keyTakeaways}
        </h3>

        <div className="grid md:grid-cols-2 gap-3">
          {takeawaysList.map((takeaway, idx) => (
            <div key={idx} className="bg-slate-100 dark:bg-slate-900/80 rounded-xl p-4 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="text-xs text-slate-900 dark:text-slate-100 leading-relaxed font-medium">
                <TooltipText content={takeaway} language={language} />
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Interactive Visual Diagram */}
      {renderVisual()}

      {/* Unshortened Core Lecture Sections */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-500" /> {t.coreConcepts}
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {sectionsList.map((sec, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                    {getSectionIcon(sec.icon)}
                  </div>
                  <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    Topic 0{idx + 1}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3">{sec.title}</h4>
                <p className="text-xs text-slate-900 dark:text-slate-100 leading-relaxed whitespace-pre-line font-medium">
                  <TooltipText content={sec.content} language={language} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-900">
        <button
          onClick={handlePrevModule}
          disabled={currentIndex === 0}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border transition-all ${
            currentIndex === 0
              ? 'opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-900 text-slate-400 border-slate-200 dark:border-slate-800'
              : 'bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.previous}: {currentIndex > 0 ? LECTURES_DATA[currentIndex - 1].id : 'None'}</span>
        </button>

        <button
          onClick={handleNextModule}
          disabled={currentIndex === LECTURES_DATA.length - 1}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border transition-all ${
            currentIndex === LECTURES_DATA.length - 1
              ? 'opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-900 text-slate-400 border-slate-200 dark:border-slate-800'
              : 'bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-500/40 shadow-md shadow-indigo-500/20'
          }`}
        >
          <span>{t.next}: {currentIndex < LECTURES_DATA.length - 1 ? LECTURES_DATA[currentIndex + 1].id : t.end}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
