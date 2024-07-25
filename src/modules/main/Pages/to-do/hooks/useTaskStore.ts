import { create } from 'zustand';
import { ApiResponseCreateTask, Task, TaskStore } from '../types';
import createTaskInFirestore from '../utilities/createTaskInFirestore';

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [
    {
      id: 'xxxxxx',
      title: 'Go for Shopping',
      description: 'Buy groceries and essentials',
      isChecked: false,
    },
  ],
  selectedTask: null,
  selectTask: (task: Task) => set({ selectedTask: task }),
  setIsChecked: (task: Task) => {
    set((state: TaskStore) => ({
      tasks: state.tasks.map((t) =>
        t.title === task.title ? { ...t, isChecked: !t.isChecked } : t,
      ),
    }));
  },
  addTask: async (task: Task) => {
    try {
      const response: ApiResponseCreateTask = await createTaskInFirestore(task);
      set((state: TaskStore) => ({
        tasks: [...state.tasks, response.newCreatedTask],
      }));
    } catch (error) {
      console.error('Error happen creating a nwe Task in Firestore: ', error);
    }
  },
  deleteTask: (title: string) =>
    set((state: TaskStore) => ({
      tasks: state.tasks.filter((task) => task.title !== title),
    })),
}));

export default useTaskStore;
