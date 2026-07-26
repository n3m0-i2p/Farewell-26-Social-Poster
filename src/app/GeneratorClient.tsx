"use client"

import { useEditorStore } from "@/store/useEditorStore"
import { MasterpiecePoster } from "@/components/editor/templates/MasterpiecePoster"
import { Upload, Download, Type } from "lucide-react"
import { useDropzone } from "react-dropzone"
import { useCallback, useState, useEffect, useRef } from "react"


export default function GeneratorPage({ settings }: { settings: any }) {
  const store = useEditorStore()
  const [isExporting, setIsExporting] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.3)

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        // Calculate scale to fit within the container with some padding
        const containerWidth = containerRef.current.clientWidth - 32; // 16px padding on sides
        const containerHeight = containerRef.current.clientHeight - 32;
        
        const scaleX = containerWidth / 1080;
        const scaleY = containerHeight / 1350;
        
        // Take the smaller scale to ensure it fits entirely
        const finalScale = Math.min(scaleX, scaleY, 0.7); // Cap at 0.7 for desktop
        setScale(finalScale);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.[0]) {
      const url = URL.createObjectURL(acceptedFiles[0])
      store.setPhoto(url)
    }
  }, [store])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1
  })

  const handleExport = async () => {
    setIsExporting(true)
    try {
      const element = document.getElementById('poster-export-node')
      if (!element) return

      // Use html-to-image for robust capture, bypassing common html2canvas taint & scaling bugs
      const { toJpeg } = await import('html-to-image')
      
      const parent = element.parentElement
      const originalTransform = parent ? parent.style.transform : ''
      if (parent) {
        parent.style.transform = 'scale(1)'
      }

      await new Promise(resolve => setTimeout(resolve, 50))

      const dataUrl = await toJpeg(element, {
        quality: 0.95,
        pixelRatio: 2,
        backgroundColor: '#05010a',
        style: {
          transform: 'none',
        }
      })

      if (parent) {
        parent.style.transform = originalTransform
      }

      const link = document.createElement('a')
      link.download = `Farewell_2026_${store.name.replace(/\s+/g, '_') || 'Poster'}.jpg`
      link.href = dataUrl
      link.click()
    } catch (error) {
      console.error("Export failed", error)
      alert("Failed to download image. Please try again.")
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] flex flex-col lg:flex-row overflow-x-hidden font-sans">
      
      {/* PREVIEW SECTION (Top on Mobile, Right on Desktop) */}
      <div 
        ref={containerRef}
        className="w-full lg:flex-1 h-[60vh] lg:h-screen bg-[#080808] flex items-center justify-center relative overflow-hidden order-1 lg:order-2 border-b lg:border-b-0 border-white/10"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        
        {/* The node that will be exported, scaled precisely via JS */}
        <div 
          style={{ 
            width: '1080px', 
            height: '1350px',
            transform: `scale(${scale})`,
            transformOrigin: 'center center'
          }}
          className="absolute transition-transform duration-300"
        >
          <div 
            id="poster-export-node" 
            className="w-full h-full relative shadow-[0_0_80px_rgba(192,38,211,0.15)] ring-1 ring-white/10 rounded-2xl overflow-hidden"
          >
            <MasterpiecePoster settings={settings} />
          </div>
        </div>
      </div>

      {/* CONTROLS SECTION (Bottom on Mobile, Left on Desktop) */}
      <div className="w-full lg:w-[450px] lg:h-screen flex flex-col bg-[#0A0A0A] border-r border-white/10 shadow-2xl relative z-20 order-2 lg:order-1 shrink-0">
        <div className="p-6 lg:p-8 border-b border-white/10 bg-white/[0.02] shrink-0">
          <h1 className="text-xl lg:text-2xl font-clash font-bold text-white tracking-wide mb-1">FAREWELL 2026</h1>
          <p className="text-white/50 font-medium text-xs lg:text-sm tracking-widest uppercase">Premium Generator</p>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-8 space-y-8 lg:space-y-10">
          
          {/* STEP 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white font-bold flex items-center justify-center text-xs shadow-[0_0_10px_rgba(192,38,211,0.4)]">1</div>
              <h2 className="text-[15px] tracking-wide uppercase font-bold text-white/90">Upload Photo</h2>
            </div>
            
            <div 
              {...getRootProps()} 
              className={`border border-dashed rounded-2xl p-6 lg:p-8 text-center cursor-pointer transition-all duration-300 ${
                isDragActive ? 'border-fuchsia-500 bg-fuchsia-500/10' : 'border-white/15 hover:border-fuchsia-400 hover:bg-white/5'
              }`}
            >
              <input {...getInputProps()} />
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/5 shadow-inner flex items-center justify-center mx-auto mb-3 lg:mb-4 border border-white/10">
                <Upload className="w-6 h-6 text-fuchsia-400" />
              </div>
              <p className="text-sm font-semibold text-white/80 mb-1">
                {isDragActive ? "Drop photo here..." : "Click or drag photo"}
              </p>
              <p className="text-xs text-white/40">
                High-quality portrait recommended
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white font-bold flex items-center justify-center text-xs shadow-[0_0_10px_rgba(192,38,211,0.4)]">2</div>
              <h2 className="text-[15px] tracking-wide uppercase font-bold text-white/90">Enter Name</h2>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Type className="h-5 w-5 text-white/30 group-focus-within:text-fuchsia-400 transition-colors" />
              </div>
              <input
                type="text"
                value={store.name}
                onChange={(e) => store.setName(e.target.value)}
                placeholder="YOUR NAME"
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/15 bg-white/5 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 focus:border-fuchsia-500 text-white text-lg font-medium transition-all placeholder:text-white/20"
              />
            </div>
          </div>

          {/* HEADLINE OVERRIDE */}
          <div className="space-y-4 pt-4 border-t border-white/10">
             <div className="flex justify-between items-center mb-2">
               <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Headline</label>
             </div>
             <select 
               value={store.headline}
               onChange={(e) => store.setHeadline(e.target.value)}
               className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/5 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 focus:border-fuchsia-500 font-medium text-sm text-white/90"
             >
               <option value="SUCCESSFULLY REGISTERED" className="bg-[#111]">SUCCESSFULLY REGISTERED</option>
               <option value="OFFICIALLY REGISTERED" className="bg-[#111]">OFFICIALLY REGISTERED</option>
               <option value="READY FOR FAREWELL 2026" className="bg-[#111]">READY FOR FAREWELL 2026</option>
               <option value="SEE YOU AT FAREWELL" className="bg-[#111]">SEE YOU AT FAREWELL</option>
               <option value="FAREWELL 2026" className="bg-[#111]">FAREWELL 2026</option>
             </select>
          </div>

        </div>

        {/* STEP 3 */}
        <div className="p-6 lg:p-8 border-t border-white/10 bg-[#0A0A0A] shrink-0 sticky bottom-0 z-30">
          <button 
            onClick={handleExport}
            disabled={isExporting}
            className="w-full py-4 bg-gradient-to-r from-fuchsia-600 to-purple-700 hover:from-fuchsia-500 hover:to-purple-600 text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-all disabled:opacity-70 shadow-[0_0_20px_rgba(192,38,211,0.25)] hover:shadow-[0_0_30px_rgba(192,38,211,0.4)] border border-fuchsia-500/50 text-base"
          >
            {isExporting ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Download className="w-5 h-5" />
                Download High-Res Poster
              </>
            )}
          </button>
        </div>
      </div>

    </div>
  )
}
