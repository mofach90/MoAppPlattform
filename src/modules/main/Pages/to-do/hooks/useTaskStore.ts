import { create } from 'zustand';

interface Tasks {
    title:string;
    description:string;
}

const useTaskStore = create((set) => ({
  tasks: [
    { title: 'Go for Shopping', description: 'Buy groceries and essentials' },
  ],
  selectedTask: null,
  selectTask: (task:Tasks) => set({ selectedTask: task }),
  addTask: (task:Tasks) => set((state:{tasks:Tasks[]}) => ({ tasks: [...state.tasks, task] })),
}));

export default useTaskStore;