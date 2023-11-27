import { createContext, useContext } from 'react'

export interface NotifyContextProps {
  duration?: number
}

export const NotifyContext = createContext<{
  success: (message: string, opt?: NotifyContextProps) => void
  error: (message: string, opt?: NotifyContextProps) => void
} | null>(null)

export function useNotify() {
  const context = useContext(NotifyContext)
  if (!context) {
    throw new Error('useNotify must be used within a NotifyContext')
  }
  return context
}
