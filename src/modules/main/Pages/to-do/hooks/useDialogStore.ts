import { create } from 'zustand';

export type DialogName =
  | 'createTask'
  | 'removeTask'
  | 'updateTask'
  | 'deleteTask'
  | 'deleteTopic';

interface DialogStore {
  activeDialog: DialogName | null;
  open: (name: DialogName) => void;
  close: () => void;
}

const useDialogStore = create<DialogStore>((set) => ({
  activeDialog: null,
  open: (name) => set({ activeDialog: name }),
  close: () => set({ activeDialog: null }),
}));

export default useDialogStore;
