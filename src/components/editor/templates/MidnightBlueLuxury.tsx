"use client"

import { useEditorStore } from "@/store/useEditorStore"
import { PhotoCrop } from "../shared/PhotoCrop"
import { QrOverlay } from "../shared/QrOverlay"
import { GraphicBlock } from "../shared/GraphicBlock"
import { Calendar, MapPin, Ticket, Clock, Utensils, Sparkles } from "lucide-react"

export function MidnightBlueLuxury({ settings }: { settings: any }) {
  const store = useEditorStore()

  // Parse JSON data robustly
  const parseJson = (str: string) => {
    try { return JSON.parse(str) } catch { return [] }
  }

  const campusActs = parseJson(settings.campusActivities)
  const mainActs = parseJson(settings.mainEventActivities)
  const menu = parseJson(settings.dinnerMenu)

  return (
    <div className="w-full h-full bg-[#050B14] relative overflow-hidden text-white font-poppins">
      
      {/* 
        ================================================================
        1. BACKGROUND EFFECTS (Z-Index 0)
        ================================================================
      */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Deep mesh gradient */}
        <div 
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full blur-[120px] opacity-40 mix-blend-screen"
          style={{ background: `radial-gradient(circle, ${store.accentColor} 0%, transparent 70%)` }}
        />
        <div className="absolute top-[40%] -right-[20%] w-[60%] h-[60%] rounded-full blur-[140px] bg-blue-900/50 mix-blend-screen" />
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        
        {/* Luxury Border/Frame */}
        <div className="absolute inset-6 border border-white/10 rounded-3xl" />
        <div className="absolute inset-6 border border-white/5 rounded-3xl scale-[0.98]" />
      </div>

      {/* 
        ================================================================
        2. EDITORIAL 12-COLUMN GRID (Z-Index 10)
        ================================================================
      */}
      <div className="relative z-10 w-full h-full p-12 grid grid-cols-12 grid-rows-[auto_1fr_auto] gap-6">
        
        {/* HEADER (Row 1, Cols 1-12) */}
        <div className="col-span-12 flex justify-between items-start">
          <div className="space-y-1">
            {store.showInstitute && (
              <p className="text-xs font-montserrat tracking-[0.3em] text-white/50 uppercase">{settings.institute}</p>
            )}
            {store.showDepartment && (
              <p className="text-[10px] font-montserrat tracking-widest text-white/30 uppercase">{settings.department}</p>
            )}
          </div>
          <div className="text-right">
             <div className="inline-block px-4 py-1.5 border border-white/20 rounded-full backdrop-blur-sm bg-white/5">
                <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: store.accentColor }}>
                  {settings.eventTitle}
                </span>
             </div>
          </div>
        </div>

        {/* MAIN CONTENT (Row 2) */}
        <div className="col-span-12 grid grid-cols-12 gap-8 items-center h-full">
          
          {/* LEFT: Heavy Typography & Info (Cols 1-5) */}
          <div className="col-span-5 h-full flex flex-col justify-center gap-10">
            <div className="space-y-2">
              {store.showHeadline && (
                <h3 className="text-sm font-montserrat tracking-[0.4em] uppercase text-white/70">
                  {store.headline}
                </h3>
              )}
              {store.showName && (
                <h1 className="text-6xl lg:text-7xl font-bebas tracking-normal leading-[0.85] text-white drop-shadow-2xl">
                  {store.name}
                </h1>
              )}
              {store.showSubtitle && (
                <p className="text-lg font-light text-white/60 font-poppins italic mt-4">
                  {store.subtitle}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              {store.showDate && (
                <GraphicBlock icon={<Calendar />} title="Date" theme="dark">
                  {settings.eventDate}
                </GraphicBlock>
              )}
              {store.showVenue && (
                <GraphicBlock icon={<MapPin />} title="Venue" theme="dark">
                  <span className="whitespace-pre-line">{settings.venue}</span>
                </GraphicBlock>
              )}
              {store.showFee && (
                <GraphicBlock icon={<Ticket />} title="Registration" theme="dark">
                  <span className="text-xl font-bold" style={{ color: store.accentColor }}>{settings.registrationFee}</span>
                </GraphicBlock>
              )}
              {store.showDeadline && (
                <GraphicBlock icon={<Clock />} title="Deadline" theme="dark">
                  <span className="whitespace-pre-line text-red-400">{settings.registrationDeadline}</span>
                </GraphicBlock>
              )}
            </div>
          </div>

          {/* MIDDLE: Hero Photo (Cols 6-9) */}
          <div className="col-span-4 flex justify-center items-center h-full relative">
             <div className="absolute -inset-10 bg-white/5 blur-3xl rounded-full" />
             <div className="w-full aspect-[3/4] relative z-20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] rounded-t-full rounded-b-2xl overflow-hidden border border-white/20">
               <PhotoCrop className="w-full h-full" />
               <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-t-full rounded-b-2xl pointer-events-none" />
             </div>
          </div>

          {/* RIGHT: Schedules & Timeline (Cols 10-12) */}
          <div className="col-span-3 h-full flex flex-col justify-center gap-6 pl-4 border-l border-white/10">
            {store.showCampusActivities && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                  <Sparkles className="w-4 h-4 text-white/40" />
                  <h4 className="text-[10px] font-bold tracking-widest text-white/60 uppercase">Campus Session</h4>
                </div>
                <p className="text-xs text-white/40 font-mono mb-2">{settings.campusTime}</p>
                <ul className="space-y-1.5">
                  {campusActs.map((act: string, i: number) => (
                    <li key={i} className="text-xs text-white/80 font-light flex items-start gap-2">
                      <span className="text-white/20 mt-1">•</span> {act}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {store.showMainEvent && (
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                  <Sparkles className="w-4 h-4 text-white/40" />
                  <h4 className="text-[10px] font-bold tracking-widest text-white/60 uppercase">Main Event</h4>
                </div>
                <p className="text-xs text-white/40 font-mono mb-2">{settings.mainEventTime}</p>
                <ul className="space-y-1.5">
                  {mainActs.map((act: string, i: number) => (
                    <li key={i} className="text-xs text-white/80 font-light flex items-start gap-2">
                      <span className="text-white/20 mt-1">•</span> {act}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {store.showMenu && (
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                  <Utensils className="w-4 h-4 text-white/40" />
                  <h4 className="text-[10px] font-bold tracking-widest text-white/60 uppercase">Dinner</h4>
                </div>
                <p className="text-xs text-white/60 font-medium italic">
                  {menu.join(" • ")}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* FOOTER (Row 3, Cols 1-12) */}
        <div className="col-span-12 flex justify-between items-end relative">
          <div className="w-1/3">
             <QrOverlay link={settings.qrLink} />
          </div>
          <div className="w-1/3 text-center">
             <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />
             <p className="text-[9px] font-montserrat tracking-[0.4em] text-white/30 uppercase">
               Premium Farewell Poster
             </p>
          </div>
          <div className="w-1/3 text-right">
            {/* Additional logos or text could go here */}
          </div>
        </div>
      </div>
    </div>
  )
}
