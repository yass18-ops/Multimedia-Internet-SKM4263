import React, { useState, useEffect } from 'react';
import { 
  HelpCircle, CheckCircle2, XCircle, Trophy, RefreshCw, 
  ArrowRight, Award, Zap, BookOpen, Filter, Check, ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { QUIZ_QUESTIONS } from '../data/quizzes';
import { LECTURES_DATA } from '../data/lectures';
import { UI_TRANSLATIONS } from '../data/translations';

export const QuizArena = ({ 
  quizFilterLectureId, 
  setQuizFilterLectureId, 
  onUpdateBestScore, 
  onResetProgress,
  language
}) => {

  const t = UI_TRANSLATIONS[language]?.quiz || UI_TRANSLATIONS.en.quiz;

  const [quizMode, setQuizMode] = useState('curated20');
  const [gameState, setGameState] = useState('select');
  
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const startQuiz = (mode, filterId = null) => {
    let filtered = [];
    if (mode === 'curated20') {
      filtered = QUIZ_QUESTIONS.filter(q => q.isCurated20);
    } else if (mode === 'module') {
      const targetId = filterId || quizFilterLectureId || 'L01';
      filtered = QUIZ_QUESTIONS.filter(q => q.lectureId === targetId);
    } else {
      filtered = [...QUIZ_QUESTIONS];
    }

    const shuffled = [...filtered].sort(() => Math.random() - 0.5);

    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setStreak(0);
    setUserAnswers([]);
    setGameState('active');
  };

  useEffect(() => {
    if (quizFilterLectureId) {
      startQuiz('module', quizFilterLectureId);
    }
  }, [quizFilterLectureId]);

  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (idx) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
    setIsAnswerSubmitted(true);

    const isCorrect = idx === currentQuestion.correctIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }

    setUserAnswers(prev => [
      ...prev,
      {
        questionObj: currentQuestion,
        userSelectedIndex: idx,
        isCorrect
      }
    ]);
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      const finalScorePercent = Math.round(((score + (selectedOption === currentQuestion.correctIndex ? 0 : 0)) / questions.length) * 100);
      onUpdateBestScore(finalScorePercent);
      setGameState('results');

      if (finalScorePercent >= 70) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  // Render Mode Selector UI
  if (gameState === 'select') {
    return (
      <div className="space-y-8 pb-12">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-purple-500/20 text-purple-700 dark:text-purple-300 rounded-full text-xs font-bold border border-purple-500/30">
              <HelpCircle className="w-4 h-4 text-purple-500" />
              <span>{t.centerBadge}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              {t.title}
            </h1>

            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.description}
            </p>
          </div>
        </div>

        {/* Mode Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1: 20 Curated */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 border border-purple-500/30 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-purple-500 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.curatedTitle}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {t.curatedDesc}
              </p>
            </div>
            <button
              onClick={() => {
                setQuizMode('curated20');
                startQuiz('curated20');
              }}
              className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-500/30 transition-all flex items-center justify-center gap-2"
            >
              <span>{t.curatedBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Full Course Challenge */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 border border-indigo-500/30 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.fullTitle}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {t.fullDesc}
              </p>
            </div>
            <button
              onClick={() => {
                setQuizMode('all');
                startQuiz('all');
              }}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-500/30 transition-all flex items-center justify-center gap-2"
            >
              <span>{t.fullBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Module Specific */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 border border-emerald-500/30 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-4">
                <Filter className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.moduleTitle}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                {t.moduleDesc}
              </p>
              
              <select
                value={quizFilterLectureId || 'L01'}
                onChange={(e) => setQuizFilterLectureId(e.target.value)}
                className="w-full bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs font-semibold p-2.5 rounded-xl border border-slate-300 dark:border-slate-800 mb-4 focus:outline-none focus:border-emerald-500"
              >
                {LECTURES_DATA.map(lec => {
                  const titleStr = lec.title[language] || lec.title.en;
                  return (
                    <option key={lec.id} value={lec.id}>
                      {lec.id}: {titleStr}
                    </option>
                  );
                })}
              </select>
            </div>
            <button
              onClick={() => {
                setQuizMode('module');
                startQuiz('module', quizFilterLectureId || 'L01');
              }}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2"
            >
              <span>{t.moduleBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    );
  }

  // Active Quiz UI
  if (gameState === 'active' && currentQuestion) {
    const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);
    const questionText = currentQuestion.question[language] || currentQuestion.question.en;
    const optionsArray = currentQuestion.options[language] || currentQuestion.options.en;
    const explanationText = currentQuestion.explanation[language] || currentQuestion.explanation.en;

    return (
      <div className="max-w-3xl mx-auto space-y-6 pb-16">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setGameState('select')}
            className="text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
          >
            {t.exit}
          </button>

          <div className="flex items-center gap-4">
            {streak >= 2 && (
              <span className="flex items-center gap-1 text-xs font-extrabold px-3 py-1 bg-amber-500/20 text-amber-600 dark:text-amber-300 rounded-full border border-amber-500/40 animate-bounce">
                <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> {streak} {t.streak}
              </span>
            )}

            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/30">
              {t.score}: {score}/{currentIndex + (isAnswerSubmitted ? 1 : 0)}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 dark:bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-300 dark:border-slate-800">
          <div 
            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Question Card */}
        <div className="glass-card rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 space-y-6 relative">
          
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {t.question} {currentIndex + 1} {t.of} {questions.length} • {currentQuestion.lectureId}
            </span>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
            {questionText}
          </h2>

          {/* Options Grid */}
          <div className="space-y-3 pt-2">
            {optionsArray.map((optionText, idx) => {
              let optionStyle = "bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-indigo-500";
              let icon = null;

              if (isAnswerSubmitted) {
                if (idx === currentQuestion.correctIndex) {
                  optionStyle = "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold shadow-lg shadow-emerald-500/10";
                  icon = <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />;
                } else if (idx === selectedOption) {
                  optionStyle = "bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-800 dark:text-rose-200 font-bold";
                  icon = <XCircle className="w-5 h-5 text-rose-500 shrink-0" />;
                } else {
                  optionStyle = "bg-slate-100 dark:bg-slate-950/40 border-slate-200 dark:border-slate-900 text-slate-400 opacity-60";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerSubmitted}
                  className={`w-full p-4 rounded-2xl text-left text-sm font-semibold transition-all border flex items-center justify-between ${optionStyle}`}
                >
                  <span>{optionText}</span>
                  {icon}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {isAnswerSubmitted && (
            <div className="bg-slate-100 dark:bg-slate-950/90 rounded-2xl p-5 border border-indigo-500/30 space-y-2 animate-in fade-in duration-300">
              <h4 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" /> {t.slideExplanation}
              </h4>
              <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {explanationText}
              </p>
            </div>
          )}

          {/* Next Button */}
          {isAnswerSubmitted && (
            <div className="pt-4 flex justify-end">
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/30 transition-all hover:scale-105"
              >
                <span>{currentIndex < questions.length - 1 ? t.nextQuestion : t.viewResults}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    );
  }

  // Results Screen
  if (gameState === 'results') {
    const finalPercent = Math.round((score / questions.length) * 100);

    return (
      <div className="max-w-3xl mx-auto space-y-8 pb-16">
        
        <div className="glass-card rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 text-center space-y-4">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-indigo-600 to-purple-600 mx-auto flex items-center justify-center shadow-xl shadow-indigo-500/30">
            <Trophy className="w-10 h-10 text-white animate-bounce" />
          </div>

          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block">
            {t.quizCompleted}
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            {finalPercent}% {t.finalScore}
          </h2>

          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
            {t.answered} <span className="text-emerald-500 font-bold">{score}</span> {t.outOf} <span className="font-bold">{questions.length}</span> {t.questionsCorrectly}
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <button
              onClick={() => startQuiz(quizMode)}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-500/30"
            >
              <RefreshCw className="w-4 h-4" />
              <span>{t.retryQuiz}</span>
            </button>

            <button
              onClick={() => setGameState('select')}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs border border-slate-300 dark:border-slate-700"
            >
              <span>{t.backToModes}</span>
            </button>
          </div>
        </div>

        {/* Question Review Sheet */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-500" /> {t.reviewSheet}
          </h3>

          <div className="space-y-4">
            {userAnswers.map((ans, idx) => {
              const qText = ans.questionObj.question[language] || ans.questionObj.question.en;
              const opts = ans.questionObj.options[language] || ans.questionObj.options.en;
              const expl = ans.questionObj.explanation[language] || ans.questionObj.explanation.en;

              return (
                <div 
                  key={idx} 
                  className={`glass-card rounded-2xl p-5 border ${
                    ans.isCorrect ? 'border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/10' : 'border-rose-500/30 bg-rose-50/50 dark:bg-rose-950/10'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Q{idx + 1}. {ans.questionObj.lectureId}</span>
                    {ans.isCorrect ? (
                      <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 rounded">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" /> {t.correct}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 bg-rose-500/20 text-rose-700 dark:text-rose-300 rounded">
                        <XCircle className="w-3 h-3 text-rose-500" /> {t.incorrect}
                      </span>
                    )}
                  </div>

                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-3">{qText}</h4>

                  <div className="text-xs space-y-1 mb-3">
                    <div className="text-slate-600 dark:text-slate-300">
                      {t.yourChoice} <span className={ans.isCorrect ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-rose-600 dark:text-rose-400 font-bold'}>
                        {opts[ans.userSelectedIndex]}
                      </span>
                    </div>
                    {!ans.isCorrect && (
                      <div className="text-slate-600 dark:text-slate-300">
                        {t.correctAnswer} <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                          {opts[ans.questionObj.correctIndex]}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800/80 leading-relaxed">
                    {expl}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    );
  }

  return null;
};
