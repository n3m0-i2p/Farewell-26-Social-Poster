"use client"

import { useEditorStore } from "@/store/useEditorStore"
import { PhotoCrop } from "../shared/PhotoCrop"
import { QRCodeSVG } from "qrcode.react"
import { Calendar, MapPin, Clock, Camera, Edit3, Heart, CheckCircle2, Tv, Video, Sparkles } from "lucide-react"

export function MasterpiecePoster({ settings }: { settings: any }) {
  const store = useEditorStore()

  return (
    <div className="w-[1080px] h-[1350px] bg-[#05010a] relative overflow-hidden font-outfit text-white selection:bg-transparent flex flex-col justify-between pb-0">
      
      {/* =========================================
          BACKGROUND EFFECTS
          ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,_#d946ef_0%,_transparent_60%)] opacity-30 mix-blend-screen" />
        <div className="absolute top-[30%] -left-[20%] w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_#d946ef_0%,_transparent_70%)] opacity-20 mix-blend-screen" />
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        
        <div className="absolute top-[20%] left-[20%] w-1.5 h-1.5 bg-fuchsia-300 rounded-full shadow-[0_0_10px_2px_#d946ef]" />
        <div className="absolute top-[35%] right-[25%] w-1 h-1 bg-fuchsia-300 rounded-full shadow-[0_0_8px_2px_#d946ef]" />
        <div className="absolute top-[45%] left-[30%] w-1 h-1 bg-fuchsia-300 rounded-full shadow-[0_0_8px_2px_#d946ef]" />
        <div className="absolute top-[50%] right-[30%] w-1.5 h-1.5 bg-fuchsia-300 rounded-full shadow-[0_0_10px_2px_#d946ef]" />
      </div>

      {/* =========================================
          TOP: LOGO BLOCK & HEADLINE
          ========================================= */}
      <div className="relative z-10 w-full flex flex-col items-center pt-8">
        
        <div className="relative flex flex-col items-center mb-3">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-white" />
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-white" />
          <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-white" />
          <div className="absolute top-1/2 -left-[60px] w-[60px] h-[2px] bg-white/50" />
          <div className="absolute top-1/2 -right-[60px] w-[60px] h-[2px] bg-white/50" />
          
          <div className="px-10 py-2 flex flex-col items-center">
             <h2 className="text-[38px] font-aquatico tracking-[0.1em] leading-none text-white uppercase">
               FAREWELL 2026
             </h2>
             <p className="text-[12px] font-montserrat font-medium tracking-[0.25em] uppercase text-white mt-1">
               Barishal Polytechnic Institute
             </p>
          </div>
        </div>

        <p className="text-[14px] font-montserrat font-bold tracking-[0.5em] uppercase text-white/90 mt-1">
          Registration Complete
        </p>

        <h3 className="text-[46px] font-aquire tracking-[0.05em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF3CC] to-[#D4AF37] mt-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
          {store.headline || "SUCCESSFULLY REGISTERED"}
        </h3>
        
        <p className="text-[15px] font-montserrat font-medium tracking-[0.4em] uppercase text-white/80 mt-1">
          I'm ready for Farewell 2026
        </p>
      </div>

      {/* =========================================
          CENTER: PORTRAIT & NAME
          ========================================= */}
      <div className="relative z-10 flex flex-col items-center mt-4">
        
        <div className="relative w-[380px] h-[380px] mb-4">
           <div className="absolute -inset-2 bg-gradient-to-b from-[#d946ef] to-[#c026d3] rounded-full blur-[4px]" />
           <div className="absolute -inset-[6px] bg-[#d946ef] rounded-full opacity-50 blur-[20px]" />
           
           <div className="absolute inset-0 rounded-full overflow-hidden bg-[#0A0514] border-[4px] border-[#0A0514]">
             <PhotoCrop className="w-full h-full object-cover scale-105 transform origin-center" />
             <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] pointer-events-none" />
           </div>
        </div>

        <h1 className="text-[64px] font-clash font-bold tracking-wide uppercase leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#fdf4ff] via-[#e879f9] to-[#c026d3] drop-shadow-[0_4px_15px_rgba(192,38,211,0.5)]">
          {store.name || "YOUR NAME"}
        </h1>
        
        <div className="flex flex-col items-center mt-2 gap-2">
          <p className="text-[22px] font-montserrat font-bold tracking-[0.1em] uppercase text-white">
            {settings.institute}
          </p>
          <div className="flex items-center gap-4">
             <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d946ef]/60" />
             <p className="text-[16px] font-montserrat font-medium tracking-[0.05em] text-[#f0abfc]">
               {settings.department}
             </p>
             <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#d946ef]/60" />
          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM-MIDDLE: INFO GRIDS
          ========================================= */}
      <div className="relative z-10 w-full px-12 flex flex-col gap-3 mt-4 mb-2">
        
        <div className="w-full border-t border-b border-white/10 py-5 flex items-center justify-between">
          
          <div className="flex items-center gap-4 flex-1 justify-center border-r border-white/10">
            <div className="w-12 h-12 shrink-0 rounded-full border-[2px] border-[#EC4899] flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[#EC4899]" />
            </div>
            <div className="flex flex-col">
              <p className="text-[12px] font-montserrat font-semibold tracking-[0.15em] uppercase text-white/60 mb-1">Date</p>
              <p className="text-[18px] font-montserrat font-bold text-white">{settings.eventDate}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-[1.2] justify-center border-r border-white/10 px-2">
            <div className="w-12 h-12 shrink-0 rounded-full border-[2px] border-[#A855F7] flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#A855F7]" />
            </div>
            <div className="flex flex-col">
              <p className="text-[12px] font-montserrat font-semibold tracking-[0.15em] uppercase text-white/60 mb-1">Venue</p>
              <p className="text-[18px] font-montserrat font-bold text-white leading-tight">{settings.venue.split('\n')[0]}</p>
              <p className="text-[14px] font-montserrat font-medium text-white/50 truncate w-[220px]">{settings.venue.split('\n')[1]}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-1 justify-center">
            <div className="w-12 h-12 shrink-0 rounded-full border-[2px] border-[#F59E0B] flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <div className="flex flex-col">
              <p className="text-[12px] font-montserrat font-semibold tracking-[0.15em] uppercase text-white/60 mb-1">Main Event</p>
              <p className="text-[18px] font-montserrat font-bold text-white">07:00 PM – 11:00 PM</p>
            </div>
          </div>

        </div>

        <div className="w-full border border-[#d946ef]/30 rounded-2xl bg-white/[0.02] flex items-stretch overflow-hidden">
           <div className="flex flex-col justify-center px-8 py-4 border-r border-[#d946ef]/20 bg-white/[0.01]">
             <p className="text-[13px] font-montserrat font-bold tracking-[0.15em] uppercase text-[#d946ef] mb-1">Campus Session</p>
             <p className="text-[18px] font-montserrat font-bold text-white">09:00 AM – 01:00 PM</p>
           </div>
           
           <div className="flex-1 flex flex-col justify-center px-8 py-4">
             <p className="text-[13px] font-montserrat font-bold tracking-[0.15em] uppercase text-[#d946ef] mb-2 text-center">Activities</p>
             <div className="flex items-center justify-center gap-5 text-[13px] font-montserrat font-medium text-white/90">
                <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4" /> Color Festival</span>
                <span className="flex items-center gap-1.5"><Edit3 className="w-4 h-4" /> T-Shirt Signature</span>
                <span className="flex items-center gap-1.5"><Camera className="w-4 h-4" /> Photography</span>
                <span className="flex items-center gap-1.5"><Video className="w-4 h-4" /> Videography</span>
             </div>
           </div>
        </div>

        <div className="w-[60%] mx-auto border border-[#F59E0B]/50 rounded-2xl bg-[#F59E0B]/[0.05] p-4 flex items-center justify-center gap-6 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
           <Calendar className="w-10 h-10 text-[#F59E0B]" />
           <div className="flex flex-col">
              <p className="text-[12px] font-montserrat font-semibold tracking-[0.15em] uppercase text-white/70 mb-1">Registration Closed</p>
              <p className="text-[24px] font-montserrat font-bold text-white leading-none">27 July, 2026</p>
              <p className="text-[14px] font-space font-medium tracking-[0.3em] text-[#F59E0B] mt-1.5">11:59 PM</p>
           </div>
        </div>

      </div>

      {/* =========================================
          FOOTER: SPLIT BLOCKS
          ========================================= */}
      <div className="relative z-20 w-full flex flex-col mt-auto">
        <div className="w-full h-[120px] flex items-stretch">
          
          <div className="w-[300px] shrink-0 bg-[#9d1775] relative flex flex-col justify-center pl-8 overflow-hidden"
               style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}>
            <h4 className="text-[16px] font-montserrat font-bold tracking-wider uppercase text-white/90">Registration</h4>
            <h3 className="text-[26px] font-montserrat font-black tracking-wide uppercase text-white leading-none mt-1">Complete</h3>
            <p className="text-[10px] font-montserrat font-medium tracking-widest text-white/70 uppercase mt-3">
              See you at Farewell 2026
            </p>
            <CheckCircle2 className="absolute -right-2 -bottom-2 w-28 h-28 text-white/10" />
          </div>

          <div className="flex-1 shrink-0 bg-black flex flex-col items-center justify-center -ml-[50px] pl-[50px]">
            <h3 className="text-[26px] font-aquatico tracking-[0.2em] uppercase text-white">
              Join The Celebration
            </h3>
            <p className="text-[14px] font-montserrat font-semibold tracking-[0.3em] text-[#d946ef] uppercase mt-1 mb-3">
              Together Forever
            </p>
          </div>

          <div className="w-[190px] shrink-0 bg-black relative flex flex-col items-center justify-center z-30">
            {/* QR Code Container (Minimal white padding for scanning) */}
            <div className="relative z-10 bg-white p-2 rounded-xl mb-1 mt-1 shadow-[0_0_20px_rgba(217,70,239,0.2)]">
              <QRCodeSVG 
                value="https://docs.google.com/forms/d/e/1FAIpQLSe7tyZhXqD2aznxvcc8se5VnayFvE0p4oW4LsmcQxmjgrVfpg/viewform?usp=header" 
                size={95} 
                level="M"
                includeMargin={false}
                fgColor="#000000"
              />
            </div>
            
            {/* Text */}
            <p className="relative z-10 text-[10px] font-montserrat font-bold tracking-[0.2em] uppercase text-white/80 text-center leading-tight mt-1.5">
              Scan To<br/><span className="text-[#d946ef]">Register</span>
            </p>
          </div>

        </div>

        <div className="w-full h-[40px] bg-[#05010a] border-t border-white/10 flex items-center justify-center gap-4">
           <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-white/30" />
           <p className="text-[12px] font-montserrat font-medium tracking-[0.5em] text-white/60 uppercase flex items-center gap-2">
             Memories Last Forever <Heart className="w-3.5 h-3.5 text-[#d946ef] fill-[#d946ef]" />
           </p>
           <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-white/30" />
        </div>
      </div>

    </div>
  )
}
