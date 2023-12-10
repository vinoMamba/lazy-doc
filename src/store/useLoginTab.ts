import { create } from 'zustand'

type Tab = 'login' | 'register'

interface State {
  email: string
  currentTab: Tab
}

interface Action {
  setTab: (tab: Tab) => void
  setLoginEmail: (email: string) => void
}

export const useLoginTab = create<State & Action>(set => ({
  email: '',
  currentTab: 'login',
  setTab: (t) => {
    set({
      currentTab: t,
    })
  },
  setLoginEmail: (e) => {
    set({
      email: e,
    })
  },
}))
