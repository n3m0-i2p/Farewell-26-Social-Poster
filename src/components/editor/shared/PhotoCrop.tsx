"use client"

import { useEditorStore } from "@/store/useEditorStore"
import Cropper from "react-easy-crop"
import { useCallback } from "react"
import { User } from "lucide-react"

export function PhotoCrop({ className }: { className?: string }) {
  const store = useEditorStore()

  const onCropChange = useCallback((crop: { x: number; y: number }) => {
    store.setCrop(crop)
  }, [store])

  const onZoomChange = useCallback((zoom: number) => {
    store.setZoom(zoom)
  }, [store])

  if (!store.photoUrl) {
    return (
      <div className={`flex items-center justify-center bg-neutral-200/80 backdrop-blur-sm overflow-hidden ${className}`}>
        <User className="w-1/3 h-1/3 text-neutral-400" />
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Cropper
        image={store.photoUrl}
        crop={store.crop}
        zoom={store.zoom}
        aspect={1}
        onCropChange={onCropChange}
        onZoomChange={onZoomChange}
        showGrid={false}
        objectFit="cover"
        classes={{
          containerClassName: 'w-full h-full absolute inset-0',
          mediaClassName: 'w-full h-full',
        }}
        style={{
          cropAreaStyle: {
            border: 'none',
            boxShadow: 'none',
          }
        }}
      />
    </div>
  )
}
