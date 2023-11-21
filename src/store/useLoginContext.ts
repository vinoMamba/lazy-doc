import type { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'

export const LoginContext = createContext<{ setCurrentTab: Dispatch<SetStateAction<'login' | 'register'>> } | null>(null)
