import { create } from "zustand";
import { UserInfo } from "../types";

interface State {
  userInfo: UserInfo | null
}
interface Actions {
  setUserInfo: (newInfo: UserInfo) => void
}

export const useUser = create<State & Actions>((set) => ({
  userInfo: null,
  setUserInfo: newInfo => set(() => ({
    userInfo: newInfo
  }))
}))
