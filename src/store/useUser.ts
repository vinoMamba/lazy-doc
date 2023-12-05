import { create } from 'zustand'

export interface UserInfo {
  username: string
  email: string
  avatar: string
  token: string
}

interface State {
  userInfo: UserInfo | null
}

interface Action {
  setUserInfo: (userInfo: UserInfo) => void
}

export const useUser = create<State & Action>(set => ({
  userInfo: null,
  setUserInfo: (u: UserInfo) => {
    set({ userInfo: u })
    window.localStorage.setItem('userInfo', JSON.stringify(u))
    window.localStorage.setItem('token', u.token)
  },
}))
