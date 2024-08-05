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
    set((state: ManageTasksState) => {
      console.log('openCreateTask', !state.openCreateTask);
      return { openCreateTask: !state.openCreateTask };
    });
    console.log('task created');
  },
  handleOnClickRemove: () => {
    set((state: ManageTasksState) => {
      console.log('openRemoveTask', !state.openRemoveTask);
      return { openRemoveTask: !state.openRemoveTask };
    });
    console.log('task deleted');
  },
}));

export default useManageTasksStore;
