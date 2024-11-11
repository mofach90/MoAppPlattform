import { create } from 'zustand';
import { UserGuideStoreType } from '../types/UserGuideStoreType';

const useUserGuideStore = create<UserGuideStoreType>((set) => ({
  showUserGuide: false,
  currentStep: 0,
  totalSteps: 3,

  handleCancel: () => set({ showUserGuide: false }),

  handleNextStep: () =>
    set((state) => {
      if (state.currentStep < state.totalSteps - 1) {
        return { currentStep: state.currentStep + 1 };
      } else {
        return { showUserGuide: false };
      }
    }),
}));

export default useUserGuideStore;
