import create from 'zustand';

interface LoadingState {
  isLoading: boolean;
  response: any | null;
  error: string | null;
  setLoading: (loading: boolean) => void;
  setResponse: (response: any | null) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  response: null,
  error: null,
  setLoading: (loading) => set({ isLoading: loading }),
  setResponse: (response) => set({ response, error: null }), // Reset error on success
  setError: (error) => set({ error, response: null }), // Reset response on error
  reset: () => set({ isLoading: false, response: null, error: null }), // Reset all states
}));
