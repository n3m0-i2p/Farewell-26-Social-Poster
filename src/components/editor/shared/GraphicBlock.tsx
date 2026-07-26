"use client"

import { ReactNode } from "react"

export function GraphicBlock({ 
  icon, 
  title, 
  children,
  align = "left",
  theme = "dark" 
}: { 
  icon?: ReactNode
  title: string
  children: ReactNode
  align?: "left" | "right" | "center"
  theme?: "dark" | "light"
}) {
  const textClass = theme === "dark" ? "text-white" : "text-neutral-900"
  const mutedClass = theme === "dark" ? "text-white/60" : "text-neutral-500"
  const borderClass = theme === "dark" ? "border-white/10" : "border-neutral-200"

  return (
    <div className={`flex flex-col ${align === 'right' ? 'items-end text-right' : align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
      <div className={`flex items-center gap-2 mb-2 ${align === 'right' ? 'flex-row-reverse' : ''}`}>
        {icon && <span className={`${mutedClass} w-4 h-4`}>{icon}</span>}
        <h4 className={`text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase ${textClass} opacity-80 font-montserrat`}>
          {title}
        </h4>
      </div>
      <div className={`text-sm md:text-base font-medium leading-relaxed ${textClass} font-poppins`}>
        {children}
      </div>
    </div>
  )
}
