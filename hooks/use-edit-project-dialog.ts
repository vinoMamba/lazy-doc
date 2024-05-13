import { create } from "zustand";

type State = {
  isOpen: boolean;
  projectId: string
};

type Action = {
  onOpen: (projectId: string) => void;
  onClose: () => void;
}

export const useEditProjectDialog = create<State & Action>((set) => ({
  projectId: "",
  isOpen: false,
  onOpen: (projectId) => set({ isOpen: true, projectId }),
  onClose: () => set({ isOpen: false, projectId: "" })
}));
