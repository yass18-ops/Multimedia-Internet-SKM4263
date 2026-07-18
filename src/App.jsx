import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { LearnModules } from './components/LearnModules';
import { QuizArena } from './components/QuizArena';
import { LECTURES_DATA } from './data/lectures';

export function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedLectureId, setSelectedLectureId] = useState('L01');
  const [quizFilterLectureId, setQuizFilterLectureId] = useState(null);

  // Language state persistence ('en' | 'ms')
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('mm_language') || 'en';
    } catch (e) {
      return 'en';
    }
  });

  // Theme state persistence ('dark' | 'light')
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('mm_theme') || 'dark';
    } catch (e) {
      return 'dark';
    }
  });

  // Module completion persistence
  const [completedModules, setCompletedModules] = useState(() => {
    try {
      const saved = localStorage.getItem('mm_completed_modules');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Best score persistence
  const [bestScore, setBestScore] = useState(() => {
    try {
      const saved = localStorage.getItem('mm_best_score');
      return saved ? parseInt(saved, 10) : null;
    } catch (e) {
      return null;
    }
  });

  // Apply dark/light class to root document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    try {
      localStorage.setItem('mm_theme', theme);
    } catch (e) {}
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem('mm_language', language);
    } catch (e) {}
  }, [language]);

  useEffect(() => {
    try {
      localStorage.setItem('mm_completed_modules', JSON.stringify(completedModules));
    } catch (e) {}
  }, [completedModules]);

  useEffect(() => {
    if (bestScore !== null) {
      try {
        localStorage.setItem('mm_best_score', bestScore.toString());
      } catch (e) {}
    }
  }, [bestScore]);

  const toggleModuleCompleted = (id) => {
    setCompletedModules(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const handleUpdateBestScore = (scorePercent) => {
    setBestScore(prev => (prev === null || scorePercent > prev) ? scorePercent : prev);
  };

  const handleResetProgress = () => {
    const confirmMsg = language === 'ms' 
      ? 'Adakah anda pasti mahu menetapkan semula semua modul yang telah diselesaikan dan skor tertinggi?'
      : 'Are you sure you want to reset all completed modules and high scores?';
    
    if (window.confirm(confirmMsg)) {
      setCompletedModules([]);
      setBestScore(null);
      try {
        localStorage.removeItem('mm_completed_modules');
        localStorage.removeItem('mm_best_score');
      } catch (e) {}
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans flex flex-col justify-between selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        completedModulesCount={completedModules.length}
        totalModulesCount={LECTURES_DATA.length}
        bestScore={bestScore}
        onResetProgress={handleResetProgress}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Content View */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex-1 w-full">
        {activeTab === 'dashboard' && (
          <Dashboard
            setActiveTab={setActiveTab}
            setSelectedLectureId={setSelectedLectureId}
            completedModules={completedModules}
            bestScore={bestScore}
            language={language}
          />
        )}

        {activeTab === 'learn' && (
          <LearnModules
            selectedLectureId={selectedLectureId}
            setSelectedLectureId={setSelectedLectureId}
            completedModules={completedModules}
            toggleModuleCompleted={toggleModuleCompleted}
            setActiveTab={setActiveTab}
            setQuizFilterLectureId={setQuizFilterLectureId}
            language={language}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizArena
            quizFilterLectureId={quizFilterLectureId}
            setQuizFilterLectureId={setQuizFilterLectureId}
            onUpdateBestScore={handleUpdateBestScore}
            onResetProgress={handleResetProgress}
            language={language}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-900 bg-white/50 dark:bg-slate-950/80 py-6 mt-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500 dark:text-slate-400 space-y-1">
          <p className="font-semibold text-indigo-600 dark:text-indigo-400">SKM4263 Multimedia Internet • Course Portal</p>
          <p>© {new Date().getFullYear()} • Created by: <span className="font-bold">Yassir bin Yusrin Zakri</span> • Lecturer: <span className="font-bold">Dr. Norhidayah Azman</span></p>
          <p className="text-slate-400 dark:text-slate-600">Built with React, Tailwind CSS & Lucide Icons • Optimized for Vercel Deployment</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
