import { FileItemSchema } from "@/schema/file";
import { Stat } from "he-tree-react";
import { z } from "zod";
import { create } from "zustand";

export type FileItem = z.infer<typeof FileItemSchema>

type State = {
  currentItem: FileItem | null;
  parentList: string[]
};

type Action = {
  setCurrentItem: (stat: Stat<FileItem> | null) => void;
  updateCurrentItemName: (name: string) => void
}

export const useFileItem = create<State & Action>((set, get) => ({
  currentItem: null,
  parentList: [],
  setCurrentItem: (stat) => {
    if (stat === null) {
      set({ currentItem: null, parentList: [] })
    } else {
      const parentList = getParentList(stat?.parentStat)
      set({ currentItem: stat?.node, parentList })
    }
  },
  updateCurrentItemName: (name) => {
    const { currentItem } = get()
    if (currentItem) {
      currentItem.name = name
    }
    set({ currentItem })
  }
}));

function getParentList(stat: Stat<FileItem> | null, parentList: string[] = []) {
  if (stat === null) return parentList
  parentList.push(stat.node.name)
  return getParentList(stat.parentStat, parentList)
}
