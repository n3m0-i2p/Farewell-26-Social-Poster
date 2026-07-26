import { create } from 'zustand'

interface EditorState {
  // Ultra-simplified state
  name: string
  headline: string
  
  // Photo State
  photoUrl: string | null
  crop: { x: number; y: number }
  zoom: number

  // Actions
  setName: (name: string) => void
  setHeadline: (headline: string) => void
  setPhoto: (url: string | null) => void
  setCrop: (crop: { x: number; y: number }) => void
  setZoom: (zoom: number) => void
}

export const useEditorStore = create<EditorState>((set) => ({
  name: 'Your Name',
  headline: 'SUCCESSFULLY REGISTERED',
  
  photoUrl: null,
  crop: { x: 0, y: 0 },
  zoom: 1,

  setName: (name) => set({ name }),
  setHeadline: (headline) => set({ headline }),
  setPhoto: (photoUrl) => set({ photoUrl }),
  setCrop: (crop) => set({ crop }),
  setZoom: (zoom) => set({ zoom }),
}))
