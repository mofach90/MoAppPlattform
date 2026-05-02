
export interface UserGuideStoreType {
    showUserGuide: boolean;
    currentStep: number;
    totalSteps: number;
    handleCancel: () => void;
    handleNextStep: () => void;
  }