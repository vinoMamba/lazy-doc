import { create } from "zustand"

type State = {
  isOpen: boolean
  projectId?: string
}

type Action = {
  onOpen: (projectId?: string) => void
  onClose: () => void
}

export const useProjectDialog = create<State & Action>((set) => ({
  isOpen: false,
  projectId: undefined,
  onOpen: (projectId) => set({ isOpen: true, projectId }),
  onClose: () => set({ isOpen: false }),
}))
