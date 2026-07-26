"use client"

import { useEditorStore } from "@/store/useEditorStore"
import { PhotoCrop } from "../shared/PhotoCrop"
import { QrOverlay } from "../shared/QrOverlay"
import { GraphicBlock } from "../shared/GraphicBlock"
import { Calendar, MapPin, Ticket, Clock, Utensils, Zap } from "lucide-react"

export function RoyalPurple({ settings }: { settings: any }) {
  const store = useEditorStore()

  const parseJson = (str: string) => {
    try { return JSON.parse(str) } catch { return [] }
  }

  const campusActs = parseJson(settings.campusActivities)
  const mainActs = parseJson(settings.mainEventActivities)
  const menu = parseJson(settings.dinnerMenu)

  return (
    <div className="w-full h-full bg-[#11001c] relative overflow-hidden text-white font-outfit">
      
      {/* 
        ================================================================
        1. NEON BACKGROUND EFFECTS (Z-Index 0)
        ================================================================
      */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] rounded-full blur-[150px] bg-purple-600/60 mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[80%] h-[80%] rounded-full blur-[150px] bg-fuchsia-600/50 mix-blend-screen" />
        <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>

      {/* 
        ================================================================
        2. ASYMMETRICAL 12-COLUMN GRID (Z-Index 10)
        ================================================================
      */}
      <div className="relative z-10 w-full h-full p-12 grid grid-cols-12 grid-rows-[auto_1fr_auto] gap-x-8 gap-y-4">
        
        {/* TOP METADATA */}
        <div className="col-span-12 flex justify-between items-center pb-4 border-b border-purple-500/20">
          <div className="flex items-center gap-3">
             <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
             {store.showInstitute && (
                <span className="text-xs font-bold tracking-widest text-purple-200 uppercase">{settings.institute}</span>
             )}
          </div>
          <div className="px-4 py-1 bg-white/5 rounded-md backdrop-blur-md border border-white/10">
             <span className="text-[10px] font-mono tracking-widest text-fuchsia-300 uppercase">
               {settings.eventTitle}
             </span>
          </div>
        </div>

        {/* MAIN SPLIT */}
        <div className="col-span-12 grid grid-cols-12 gap-10 items-stretch h-full py-4">
          
          {/* LEFT: Magazine Cutout Photo & Heavy Text (Cols 1-7) */}
          <div className="col-span-7 h-full flex flex-col justify-between relative">
            <div className="z-10 mt-4 space-y-1 relative mix-blend-lighten">
              {store.showHeadline && (
                <h3 className="text-sm font-space tracking-[0.3em] uppercase text-fuchsia-400 mb-4">
                  {store.headline}
                </h3>
              )}
              {store.showName && (
                <h1 className="text-7xl lg:text-8xl font-black font-space tracking-tighter leading-[0.8] text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400">
                  {store.name}
                </h1>
              )}
            </div>

            <div className="w-[85%] aspect-square relative z-0 mt-8 mb-auto">
               <div className="absolute -inset-10 bg-purple-600/30 blur-[80px] rounded-full" />
               <div className="w-full h-full relative z-20 rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-[0_0_50px_-10px_rgba(168,85,247,0.5)] bg-white/5 backdrop-blur-sm p-2">
                 <PhotoCrop className="w-full h-full rounded-2xl" />
               </div>
            </div>

            {store.showSubtitle && (
              <p className="text-2xl font-light text-purple-200 font-sora italic max-w-sm">
                "{store.subtitle}"
              </p>
            )}
          </div>

          {/* RIGHT: Grid Info Cards (Cols 8-12) */}
          <div className="col-span-5 h-full flex flex-col gap-4">
            
            <div className="grid grid-cols-2 gap-4">
              {store.showDate && (
                <div className="bg-white/5 backdrop-blur-md border border-purple-500/20 p-4 rounded-2xl">
                  <GraphicBlock icon={<Calendar />} title="Date" theme="dark">
                    <span className="text-sm">{settings.eventDate}</span>
                  </GraphicBlock>
                </div>
              )}
              {store.showFee && (
                <div className="bg-white/5 backdrop-blur-md border border-purple-500/20 p-4 rounded-2xl">
                  <GraphicBlock icon={<Ticket />} title="Fee" theme="dark">
                    <span className="text-lg font-bold text-fuchsia-400">{settings.registrationFee}</span>
                  </GraphicBlock>
                </div>
              )}
            </div>

            {store.showVenue && (
              <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-md border border-purple-500/20 p-5 rounded-2xl">
                <GraphicBlock icon={<MapPin />} title="Venue" theme="dark">
                  <span className="text-sm whitespace-pre-line">{settings.venue}</span>
                </GraphicBlock>
              </div>
            )}

            <div className="flex-1 bg-white/5 backdrop-blur-md border border-purple-500/20 p-5 rounded-2xl flex flex-col gap-4 overflow-hidden">
              {store.showCampusActivities && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-3 h-3 text-fuchsia-400" />
                    <h4 className="text-[10px] font-bold tracking-widest text-fuchsia-300 uppercase">Campus Session</h4>
                  </div>
                  <p className="text-[10px] text-white/50 mb-1">{settings.campusTime}</p>
                  <p className="text-xs font-light text-purple-100 leading-relaxed">
                    {campusActs.join(" • ")}
                  </p>
                </div>
              )}

              {store.showMainEvent && (
                <div className="pt-3 border-t border-purple-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-3 h-3 text-purple-400" />
                    <h4 className="text-[10px] font-bold tracking-widest text-purple-300 uppercase">Main Event</h4>
                  </div>
                  <p className="text-[10px] text-white/50 mb-1">{settings.mainEventTime}</p>
                  <p className="text-xs font-light text-purple-100 leading-relaxed">
                    {mainActs.join(" • ")}
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="col-span-12 flex justify-between items-end mt-4 pt-4 border-t border-purple-500/20 relative">
          <div className="w-24 h-24">
             <QrOverlay link={settings.qrLink} />
          </div>
          <div className="text-right pb-2">
             <p className="text-[9px] font-space tracking-[0.4em] text-white/40 uppercase">
               Redefining Farewell 2026
             </p>
          </div>
        </div>

      </div>
    </div>
  )
}
