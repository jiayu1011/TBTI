import { useTBTIStore } from '@/store/tbtiStore';
import { Mountain, Compass, Users, Backpack, ArrowRight } from 'lucide-react';
import { dimensions } from '@/data/tbtiTypes';

export default function Welcome() {
  const { nextQuestion } = useTBTIStore();

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center border border-emerald-100">
      <div className="mb-8">
        <div className="flex justify-center gap-3 mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
            <Mountain className="w-7 h-7 text-white" />
          </div>
          <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
            <Compass className="w-7 h-7 text-white" />
          </div>
          <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3">
            <Users className="w-7 h-7 text-white" />
          </div>
          <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-6">
            <Backpack className="w-7 h-7 text-white" />
          </div>
        </div>
        
        <h2 className="text-3xl font-black text-gray-800 mb-2 tracking-tight">
          徒步人格大测试
        </h2>
        <p className="text-emerald-600 font-bold text-lg mb-4">TBTI - Trail-Based Type Indicator</p>
        
        <p className="text-gray-600 mb-6 leading-relaxed text-sm">
          基于MBTI四维度理论，我们设计了专属于户外徒步的<br/>
          <span className="text-orange-500 font-semibold">四大性格维度</span>
        </p>
        
        {/* Four Dimensions */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl p-5 mb-6 text-left border border-emerald-100">
          <h3 className="font-bold text-emerald-800 mb-4 flex items-center gap-2 text-sm">
            <span className="w-6 h-6 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-xs">4</span>
            四大维度解析
          </h3>
          <div className="space-y-3 text-xs">
            <div className="bg-white/70 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-800">{dimensions.EC.name}</span>
                <span className="text-gray-400">{dimensions.EC.code}</span>
              </div>
              <div className="flex items-center justify-between text-gray-600">
                <span className="text-emerald-600 font-medium">{dimensions.EC.left.name}</span>
                <ArrowRight className="w-3 h-3 text-gray-300" />
                <span className="text-teal-600 font-medium">{dimensions.EC.right.name}</span>
              </div>
              <p className="text-gray-400 mt-1 text-xs">{dimensions.EC.left.desc}</p>
            </div>
            
            <div className="bg-white/70 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-800">{dimensions.SW.name}</span>
                <span className="text-gray-400">{dimensions.SW.code}</span>
              </div>
              <div className="flex items-center justify-between text-gray-600">
                <span className="text-orange-500 font-medium">{dimensions.SW.left.name}</span>
                <ArrowRight className="w-3 h-3 text-gray-300" />
                <span className="text-amber-500 font-medium">{dimensions.SW.right.name}</span>
              </div>
              <p className="text-gray-400 mt-1 text-xs">{dimensions.SW.left.desc}</p>
            </div>
            
            <div className="bg-white/70 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-800">{dimensions.TI.name}</span>
                <span className="text-gray-400">{dimensions.TI.code}</span>
              </div>
              <div className="flex items-center justify-between text-gray-600">
                <span className="text-blue-500 font-medium">{dimensions.TI.left.name}</span>
                <ArrowRight className="w-3 h-3 text-gray-300" />
                <span className="text-indigo-500 font-medium">{dimensions.TI.right.name}</span>
              </div>
              <p className="text-gray-400 mt-1 text-xs">{dimensions.TI.left.desc}</p>
            </div>
            
            <div className="bg-white/70 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-800">{dimensions.MP.name}</span>
                <span className="text-gray-400">{dimensions.MP.code}</span>
              </div>
              <div className="flex items-center justify-between text-gray-600">
                <span className="text-purple-500 font-medium">{dimensions.MP.left.name}</span>
                <ArrowRight className="w-3 h-3 text-gray-300" />
                <span className="text-pink-500 font-medium">{dimensions.MP.right.name}</span>
              </div>
              <p className="text-gray-400 mt-1 text-xs">{dimensions.MP.left.desc}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-4 text-xs text-gray-400 mb-6">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
            12道题
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
            4个维度
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
            16种人格
          </span>
        </div>
      </div>
      
      <button
        onClick={nextQuestion}
        className="w-full py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
      >
        开始测试 👉
      </button>
      
      <p className="text-xs text-gray-400 mt-4">
        测试结果仅供娱乐，如有雷同，说明你真的就是那个样 😏
      </p>
    </div>
  );
}
