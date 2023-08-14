import { create } from "zustand";
import { ProjectItem } from "../types";

interface State {
  project: ProjectItem | null
}
interface Actions {
  setProject: (newInfo: ProjectItem) => void
}

export const useUser = create<State & Actions>((set) => ({
  project: null,
  setProject: newInfo => set(() => ({
    project: newInfo
  }))
}))
