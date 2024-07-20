import { create } from 'zustand';
import { ManageTasksState } from '../../../types';

const useManageTasksStore = create<ManageTasksState>((set) => ({
  openCreateTask: false,
  openRemoveTask: false,
  handleClose: (_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    set({ openCreateTask: false });
    set({ openRemoveTask: false });
  },
  handleOnClickCreate: () => {
    set({ openCreateTask: true });
    console.log('create');
  },
  handleOnClickRemove: () => {
    set({ openRemoveTask: true });

    console.log('remove');
  },
}));

export default useManageTasksStore;
