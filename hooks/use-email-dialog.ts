import { create } from "zustand"

type State = {
  isOpen: boolean
  email: string
}

type Action = {
  onOpen: (email?: string | null) => void
  onClose: () => void
}

export const useEmailDialog = create<State & Action>((set) => ({
  isOpen: false,
  email: "",
  onOpen: (e) => {
    const email = e ?? ""
    set({ isOpen: true, email })
  }
  ,
  onClose: () => set({ isOpen: false }),
}))
