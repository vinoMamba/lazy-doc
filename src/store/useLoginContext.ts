import type { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'

export const LoginContext = createContext<{
  setCurrentTab: Dispatch<SetStateAction<'login' | 'register'>>
  username: string
  setUsername: Dispatch<SetStateAction<string>>
} | null>(null)
