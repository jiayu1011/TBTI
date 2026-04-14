import { useTBTIStore } from '@/store/tbtiStore';
import { questions } from '@/data/tbtiTypes';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function QuestionCard() {
  const { currentQuestion, answers, setAnswer, nextQuestion, prevQuestion } = useTBTIStore();
  const question = questions[currentQuestion - 1];
  const selectedAnswer = answers[question.id];

  const progress = ((currentQuestion) / questions.length) * 100;

  const handleOptionClick = (value: string) => {
    setAnswer(question.id, value);
    setTimeout(() => {
      nextQuestion();
    }, 400);
  };
  
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border border-gray-100">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <span className="font-medium">问题 {currentQuestion} / {questions.length}</span>
          <span className="text-emerald-600 font-bold">{Math.round(progress)}%</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      {/* Question Number Badge */}
      <div className="mb-4">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full">
          <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
          第 {currentQuestion} 题
        </span>
      </div>
      
      {/* Question */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 leading-relaxed">
          {question.text}
        </h2>
      </div>
      
      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          return (
            <button
              key={index}
              onClick={() => handleOptionClick(option.value)}
              className={`w-full p-4 text-left rounded-2xl border-2 transition-all duration-200 ${
                selectedAnswer === option.value
                  ? 'border-emerald-500 bg-gradient-to-r from-emerald-50 to-teal-50 shadow-md'
                  : 'border-gray-100 hover:border-emerald-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  selectedAnswer === option.value
                    ? 'border-emerald-500 bg-emerald-500'
                    : 'border-gray-300'
                }`}>
                  {selectedAnswer === option.value && (
                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1">
                  <span className={`font-medium text-sm leading-relaxed block ${
                    selectedAnswer === option.value ? 'text-emerald-800' : 'text-gray-700'
                  }`}>
                    {option.text}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      
      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 1}
          className={`flex items-center gap-1 px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors ${
            currentQuestion === 1
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          上一题
        </button>
        
        <div className="flex gap-1.5">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                index < currentQuestion
                  ? 'bg-emerald-500'
                  : index === currentQuestion - 1
                  ? 'bg-emerald-300'
                  : 'bg-gray-200'
              }`}
            ></div>
          ))}
        </div>
        
        <button
          onClick={nextQuestion}
          disabled={!selectedAnswer}
          className={`flex items-center gap-1 px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors ${
            !selectedAnswer
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-emerald-600 hover:bg-emerald-50'
          }`}
        >
          {currentQuestion === questions.length ? '查看结果' : '下一题'}
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
