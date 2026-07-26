"use client"

import { useEditorStore } from "@/store/useEditorStore"
import { QRCodeSVG } from "qrcode.react"

export function QrOverlay({ link }: { link: string }) {
  const store = useEditorStore()

  if (store.qrPosition === 'hidden' || !link) return null

  const posClass = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'center': 'bottom-6 left-1/2 -translate-x-1/2',
    'hidden': 'hidden'
  }[store.qrPosition]

  return (
    <div className={`absolute z-20 ${posClass}`}>
      <div 
        className={`bg-white overflow-hidden ${store.qrShadow ? 'shadow-xl' : ''} ${store.qrRounded ? 'rounded-2xl' : ''}`}
        style={{ padding: `${store.qrPadding * 4}px` }}
      >
        <QRCodeSVG 
          value={link} 
          size={80} 
          bgColor={store.qrBgColor} 
          fgColor={store.qrFgColor} 
        />
      </div>
    </div>
  )
}
