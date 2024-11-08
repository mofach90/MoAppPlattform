import { useCallback } from 'react';
import useTaskStore from '../../../Pages/to-do/hooks/useTaskStore';

const useHandleSpecForApp = () => {
  const addTasksFromFirestore = useTaskStore(
    (state) => state.addTasksFromFirestore,
  );
  const handleSpecforApp = useCallback(
    async (title: string) => {
      if (title === 'To do') {
        console.log('Entered handleSpecforApp');
        await addTasksFromFirestore();
      }
    },
    [addTasksFromFirestore],
  );

  return handleSpecforApp;
};

export default useHandleSpecForApp;
