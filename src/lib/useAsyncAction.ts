import { useState } from 'react';

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useAsyncAction<TArgs extends unknown[], T>(
  fn: (...args: TArgs) => Promise<T>,
) {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = async (...args: TArgs): Promise<void> => {
    setState({ data: null, loading: true, error: null });
    try {
      const data = await fn(...args);
      setState({ data, loading: false, error: null });
    } catch (error: any) {
      setState({ data: null, loading: false, error: error.message ?? 'Unknown error' });
    }
  };

  const reset = () => setState({ data: null, loading: false, error: null });

  return { ...state, execute, reset };
}
