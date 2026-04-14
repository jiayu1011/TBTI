import { useTBTIStore } from '@/store/tbtiStore';
import { tbtiTypes, dimensions } from '@/data/tbtiTypes';
import { Share2, RotateCcw, Quote, Heart, AlertTriangle, Lightbulb } from 'lucide-react';

export default function ResultCard() {
  const { result, dimensionScores, resetTest } = useTBTIStore();
  
  if (!result) return null;
  
  const typeData = tbtiTypes[result];
  if (!typeData) return null;
  
  const handleShare = () => {
    const shareText = `我的徒步人格是【${typeData.name} - ${typeData.title}】(${result})！快来测测你是什么类型？`;
    
    if (navigator.share) {
      navigator.share({
        title: 'TBTI徒步人格测试',
        text: shareText,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(shareText + ' ' + window.location.href);
      alert('已复制到剪贴板！快去分享给你的队友吧~');
    }
  };
  
  // 根据类型选择颜色
  const getTypeColor = (code: string) => {
    const colors: Record<string, string> = {
      'E': 'from-red-400 to-orange-500',
      'C': 'from-blue-400 to-indigo-500',
      'S': 'from-orange-400 to-amber-500',
      'W': 'from-green-400 to-emerald-500',
      'T': 'from-cyan-400 to-blue-500',
      'I': 'from-purple-400 to-pink-500',
      'M': 'from-teal-400 to-cyan-500',
      'P': 'from-amber-400 to-orange-500'
    };
    return colors[code] || 'from-emerald-400 to-teal-500';
  };
  
  const gradientColor = 'from-emerald-400 via-teal-500 to-cyan-500';
  
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      {/* Header */}
      <div className={`relative h-56 bg-gradient-to-br ${gradientColor} flex items-center justify-center`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
        </div>
        {/* 神秘园氛围装饰 */}
        <div className="absolute top-4 left-4 text-white/30 text-2xl">🏔️</div>
        <div className="absolute top-8 right-8 text-white/30 text-xl">✨</div>
        <div className="absolute bottom-20 left-8 text-white/30 text-lg">🌙</div>
        <div className="absolute top-16 right-16 text-white/30 text-sm">⭐</div>
        
        <div className="relative text-center text-white z-10 px-6">
          <p className="text-xs italic opacity-70 mb-2 tracking-widest font-light">
            "山野自有答案"
          </p>
          <p className="text-sm font-medium opacity-80 mb-2 tracking-wider">你的徒步人格是</p>
          <h2 className="text-4xl font-black mb-1 tracking-tight">{typeData.name}</h2>
          <p className="text-lg font-bold opacity-90">{typeData.title}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/95 to-transparent"></div>
      </div>
      
      <div className="p-6">
        {/* Type Code Badge */}
        <div className="flex justify-center mb-4">
          <span className={`px-6 py-2 bg-gradient-to-r ${gradientColor} text-white font-black text-2xl rounded-2xl shadow-lg`}>
            {result}
          </span>
        </div>
        
        {/* Dimension Scores */}
        {dimensionScores && (
          <div className="bg-gray-50 rounded-2xl p-4 mb-6">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 text-center">
              四维度解析
            </h3>
            <div className="space-y-3">
              {/* EC - 路线偏好 */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-emerald-600 font-medium">{dimensions.EC.left.name}</span>
                  <span className="text-gray-400">{dimensions.EC.name}</span>
                  <span className="text-teal-600 font-medium">{dimensions.EC.right.name}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-1000"
                    style={{ width: `${(dimensionScores.EC.E / 3) * 100}%`, marginLeft: 0 }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>{dimensionScores.EC.E}</span>
                  <span>{dimensionScores.EC.C}</span>
                </div>
              </div>
              
              {/* SW - 行进节奏 */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-orange-500 font-medium">{dimensions.SW.left.name}</span>
                  <span className="text-gray-400">{dimensions.SW.name}</span>
                  <span className="text-amber-500 font-medium">{dimensions.SW.right.name}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-400 to-amber-500 rounded-full transition-all duration-1000"
                    style={{ width: `${(dimensionScores.SW.S / 3) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>{dimensionScores.SW.S}</span>
                  <span>{dimensionScores.SW.W}</span>
                </div>
              </div>
              
              {/* TI - 社交模式 */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-blue-500 font-medium">{dimensions.TI.left.name}</span>
                  <span className="text-gray-400">{dimensions.TI.name}</span>
                  <span className="text-indigo-500 font-medium">{dimensions.TI.right.name}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full transition-all duration-1000"
                    style={{ width: `${(dimensionScores.TI.T / 3) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>{dimensionScores.TI.T}</span>
                  <span>{dimensionScores.TI.I}</span>
                </div>
              </div>
              
              {/* MP - 装备哲学 */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-purple-500 font-medium">{dimensions.MP.left.name}</span>
                  <span className="text-gray-400">{dimensions.MP.name}</span>
                  <span className="text-pink-500 font-medium">{dimensions.MP.right.name}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-1000"
                    style={{ width: `${(dimensionScores.MP.M / 3) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>{dimensionScores.MP.M}</span>
                  <span>{dimensionScores.MP.P}</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* 神秘园引言 */}
        <div className="bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900 rounded-2xl p-5 mb-6 text-center border border-purple-700/30">
          <p className="text-purple-200 text-xs italic font-light tracking-wide leading-relaxed">
            "每一次出发，都是与未知的自己相遇。<br/>
            山不会记住你，但你会记住山。"
          </p>
        </div>

        {/* Description */}
        <div className="bg-gray-50 rounded-2xl p-5 mb-6">
          <p className="text-gray-700 text-center leading-relaxed text-sm">
            {typeData.description}
          </p>
        </div>
        
        {/* Traits */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center">
              <span className="text-emerald-600 text-xs">✦</span>
            </span>
            性格特征
          </h3>
          <div className="flex flex-wrap gap-2">
            {typeData.traits.map((trait, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 text-gray-700 rounded-full text-sm font-semibold border border-emerald-100"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
        
        {/* Classic Quotes */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Quote className="w-4 h-4" />
            经典语录
          </h3>
          <div className="space-y-2">
            {typeData.classicQuotes.map((quote, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-amber-50 rounded-xl border border-amber-100">
                <span className="text-amber-500 text-lg">"</span>
                <span className="text-gray-700 text-sm font-medium">{quote}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Partners */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100">
            <h3 className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Heart className="w-4 h-4" />
              最佳搭档
            </h3>
            <div className="space-y-1">
              {typeData.bestPartners.map((partner, index) => (
                <p key={index} className="text-sm text-gray-700">{partner}</p>
              ))}
            </div>
          </div>
          <div className="bg-rose-50 rounded-2xl p-4 border border-rose-100">
            <h3 className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              谨慎搭配
            </h3>
            <div className="space-y-1">
              {typeData.worstPartners.map((partner, index) => (
                <p key={index} className="text-sm text-gray-700">{partner}</p>
              ))}
            </div>
          </div>
        </div>
        
        {/* Survival Tips */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-5 mb-6 border border-amber-100">
          <h3 className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            生存建议
          </h3>
          <p className="text-gray-700 text-sm">{typeData.survivalTips}</p>
        </div>
        
        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={handleShare}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gray-100 text-gray-700 font-bold rounded-2xl hover:bg-gray-200 transition-colors"
          >
            <Share2 className="w-5 h-5" />
            分享结果
          </button>
          <button
            onClick={resetTest}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r ${gradientColor} text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all`}
          >
            <RotateCcw className="w-5 h-5" />
            再测一次
          </button>
        </div>
        
        {/* 神秘园结语 */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 rounded-xl p-4 mb-4 text-center border border-emerald-100">
          <p className="text-emerald-700 text-xs italic font-light tracking-wide">
            "愿你的每一次徒步，都能找到属于自己的那片山野 🏔️"
          </p>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          测试结果仅供娱乐，请勿对号入座（虽然真的很准）😏
        </p>
      </div>
    </div>
  );
}
