import { create } from "zustand";

type State = {
  isOpen: boolean;
  checkedList: string[]
  projectId: string
};

type Action = {
  onOpen: (projectId: string, checkedList: string[]) => void;
  onClose: () => void;
}

export const useMembersDialog = create<State & Action>((set) => ({
  isOpen: false,
  projectId: '',
  checkedList: [],
  onOpen: (projectId, checkedList) => set({ isOpen: true, checkedList, projectId }),
  onClose: () => set({ isOpen: false, checkedList: [], projectId: '' })
}));
