import { create } from 'zustand';
import { UserData, UserDataStore } from '../types';

const useUserDataStore = create<UserDataStore>((set) => ({
  userData: [],
  addUserData: (newUserData: UserData) => {
    console.log('userData enter');
    set((state: UserDataStore) => ({
      userData: [...state.userData, newUserData],
    }));
    console.log('userData enter userData', newUserData);
  },
  getUserData: () => {
    const storedUserCredential = localStorage.getItem('userCredential');
    if (storedUserCredential) {
      const newUserData = JSON.parse(storedUserCredential);
      set((state: UserDataStore) => ({
        userData: [...state.userData, newUserData],
      }));
      console.log('userData enter userData', newUserData);
    }
  },
}));

export default useUserDataStore;
