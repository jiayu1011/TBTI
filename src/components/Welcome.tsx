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
        <p className="text-emerald-600 font-bold text-lg mb-4">TBTI - TuBu Type Indicator</p>
        
        {/* 神秘园氛围文案 */}
        <div className="bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900 rounded-xl p-5 mb-6 text-center border border-purple-700/50 shadow-lg shadow-purple-500/20">
          <p className="text-purple-200 text-sm italic mb-3 font-light tracking-wide">
            "在海拔4000米的垭口，风会告诉你答案"
          </p>
          <p className="text-purple-300 text-xs leading-relaxed opacity-80">
            每一个深夜打包的背包，每一张手绘的路书，<br/>
            每一次站在山脊线上的沉默，<br/>
            都是灵魂与山野的对话。
          </p>
          <div className="flex justify-center gap-2 mt-3">
            <span className="text-lg">🏔️</span>
            <span className="text-lg">🌙</span>
            <span className="text-lg">✨</span>
            <span className="text-lg">🥾</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 mb-6 text-left border border-orange-100">
          <p className="text-xs text-orange-700 mb-2 font-semibold">🗣️ 为了确保咱们可以同频交流，希望以下词你至少理解5个：</p>
          <p className="text-xs text-orange-600 leading-relaxed">
            路书、横切、环线、穿越线、正穿、反穿、达坂、垭口、还有20分钟、老驴、拉练、腐败、外挂、433法则、路餐、LNT、洗头局、窗口期、下撤、背架、车尾灯、拉爆、有腿就行、开路、屁降、绝望坡、捡人、今天很休闲、下次还来
          </p>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed text-sm">
          基于户外圈黑话，我们设计了专属于徒步佬的<br/>
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
