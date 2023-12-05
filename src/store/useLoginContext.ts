import type { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'

export const LoginContext = createContext<{
  setCurrentTab: Dispatch<SetStateAction<'login' | 'register'>>
  email: string
  setEmail: Dispatch<SetStateAction<string>>
} | null>(null)
