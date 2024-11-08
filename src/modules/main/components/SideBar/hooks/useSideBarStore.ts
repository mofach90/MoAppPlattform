import { create } from 'zustand';

const useSideBarStore = create<{
  selected: string;
  setSelect: (select: string) => void;
}>((set) => ({
  selected: '',
  setSelect: (select: string) => set({ selected: select }),
}));

export default useSideBarStore;
