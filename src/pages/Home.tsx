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
          <h1 className="text-4xl font-bold text-emerald-800 mb-2">TBTI</h1>
          <p className="text-emerald-600">Trail-Based Type Indicator</p>
          <p className="text-sm text-emerald-500 mt-1">户外徒步人格测试</p>
        </header>
        
        <main>
          {currentQuestion === 0 && !isTestComplete && <Welcome />}
          {currentQuestion > 0 && !isTestComplete && <QuestionCard />}
          {isTestComplete && <ResultCard />}
        </main>
        
        <footer className="text-center mt-12 text-emerald-400 text-sm">
          <p>发现你的户外徒步人格类型</p>
        </footer>
      </div>
    </div>
  );
}
