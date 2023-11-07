import { create } from 'zustand'

interface State {
  isDarkMode: boolean
}

interface Action {
  setIsDarkMode: (isDarkMode: boolean) => void
}

const initialIsDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

export const useDarkMode = create<State & Action>(set => ({
  isDarkMode: initialIsDarkMode,
  setIsDarkMode: (isDarkMode: boolean) => {
    set({ isDarkMode })
  },
}))
