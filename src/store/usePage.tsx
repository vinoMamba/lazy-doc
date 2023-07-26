import { create } from "zustand";

interface State {
  pageContent: string
}
interface Actions {
  setPageContent: (content: string) => void
}

export const usePage = create<State & Actions>((set) => ({
  pageContent: '',
  setPageContent: content => set(() => ({
    pageContent: content
  }))
}))
