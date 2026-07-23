import React, { useState } from 'react';
import { DICTIONARY_TERMS } from '../data/dictionary';
import { Sparkles } from 'lucide-react';

export const TooltipText = ({ content, language = 'en' }) => {
  if (!content) return null;

  // Build a regex pattern from the dictionary keys.
  // We use word boundaries (\b) and capture the matched term.
  const terms = Object.keys(DICTIONARY_TERMS);
  // Sort terms by length descending so longer terms match first (e.g., "IP Address" before "IP")
  terms.sort((a, b) => b.length - a.length);

  // Create a regex to match any of the terms, case-insensitive
  const regex = new RegExp(`\\b(${terms.join('|')})\\b`, 'gi');

  // Split the content by the regex. This creates an array of strings.
  // Every odd index in the array will be a matched term, even indices are normal text.
  const parts = content.split(regex);

  return (
    <>
      {parts.map((part, i) => {
        // If it's an even index, it's normal text
        if (i % 2 === 0) {
          return <span key={i}>{part}</span>;
        }

        // If it's an odd index, it's a matched term
        // Find the matching dictionary entry (case-insensitive)
        const termKey = terms.find(t => t.toLowerCase() === part.toLowerCase());
        if (!termKey) {
          return <span key={i}>{part}</span>; // Fallback
        }

        const explanation = DICTIONARY_TERMS[termKey][language] || DICTIONARY_TERMS[termKey].en;

        return (
          <span key={i} className="relative group inline-block cursor-help">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 dark:from-cyan-400 dark:to-blue-500 underline decoration-pink-500/30 dark:decoration-cyan-400/30 decoration-2 underline-offset-4 group-hover:decoration-pink-500 dark:group-hover:decoration-cyan-400 transition-all">
              {part}
            </span>
            
            {/* Tooltip Card */}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 rounded-xl bg-slate-900/95 dark:bg-white/95 backdrop-blur-xl border border-slate-700 dark:border-slate-200 shadow-2xl opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-50 origin-bottom">
              <span className="flex items-center gap-1.5 mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-black text-white dark:text-slate-900 uppercase tracking-wider">
                  {termKey}
                </span>
              </span>
              <span className="block text-xs font-medium text-slate-300 dark:text-slate-700 leading-relaxed">
                {explanation}
              </span>
              
              {/* Tooltip arrow */}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 dark:bg-white rotate-45 border-r border-b border-slate-700 dark:border-slate-200"></span>
            </span>
          </span>
        );
      })}
    </>
  );
};
