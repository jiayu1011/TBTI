import { useTBTIStore } from '@/store/tbtiStore';
import Welcome from '@/components/Welcome';
import QuestionCard from '@/components/QuestionCard';
import ResultCard from '@/components/ResultCard';

export default function Home() {
  const { currentQuestion, isTestComplete } = useTBTIStore();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mb-3">
            MBTI已经过时
          </h1>
          <p className="text-xl md:text-2xl font-bold text-emerald-700 mb-2">
            徒步佬，来测测你的<span className="text-3xl md:text-4xl text-teal-600 mx-1">TBTI</span>
          </p>
          <p className="text-sm text-emerald-500 mt-2">户外徒步人格测试</p>
        </header>
        
        <main>
          {currentQuestion === 0 && !isTestComplete && <Welcome />}
          {currentQuestion > 0 && !isTestComplete && <QuestionCard />}
          {isTestComplete && <ResultCard />}
        </main>
        
        <footer className="text-center mt-12 text-emerald-400 text-sm">
          <p>发现你的户外徒步人格类型</p>
          <p className="mt-2">作者 @jiayu1011</p>
        </footer>
      </div>
    </div>
  );
}
