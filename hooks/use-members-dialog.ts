import { create } from "zustand";

type State = {
  isOpen: boolean;
  checkedList: string[]
};

type Action = {
  onOpen: (checkedList: string[]) => void;
  onClose: () => void;
}

export const useMembersDialog = create<State & Action>((set) => ({
  isOpen: false,
  checkedList: [],
  onOpen: (checkedList) => set({ isOpen: true, checkedList }),
  onClose: () => set({ isOpen: false, checkedList: [] })
}));
