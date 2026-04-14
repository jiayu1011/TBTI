import { create } from 'zustand';
import { questions, calculateResult, getDimensionScores } from '@/data/tbtiTypes';

interface TBTIState {
  currentQuestion: number;
  answers: Record<number, string>;
  result: string | null;
  isTestComplete: boolean;
  dimensionScores: {
    EC: { E: number; C: number };
    SW: { S: number; W: number };
    TI: { T: number; I: number };
    MP: { M: number; P: number };
  } | null;
  
  setAnswer: (questionId: number, value: string) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  resetTest: () => void;
}

export const useTBTIStore = create<TBTIState>((set, get) => ({
  currentQuestion: 0,
  answers: {},
  result: null,
  isTestComplete: false,
  dimensionScores: null,
  
  setAnswer: (questionId: number, value: string) => {
    set((state) => ({
      answers: { ...state.answers, [questionId]: value }
    }));
  },
  
  nextQuestion: () => {
    const { currentQuestion, answers } = get();
    if (currentQuestion < questions.length) {
      set({ currentQuestion: currentQuestion + 1 });
    }
    
    // 检查是否所有问题都回答完了
    if (Object.keys(answers).length === questions.length) {
      const result = calculateResult(answers);
      const dimensionScores = getDimensionScores(answers);
      set({ isTestComplete: true, result, dimensionScores });
    }
  },
  
  prevQuestion: () => {
    const { currentQuestion } = get();
    if (currentQuestion > 1) {
      set({ currentQuestion: currentQuestion - 1 });
    } else {
      set({ currentQuestion: 0 });
    }
  },
  
  resetTest: () => {
    set({
      currentQuestion: 0,
      answers: {},
      result: null,
      isTestComplete: false,
      dimensionScores: null
    });
  }
}));
