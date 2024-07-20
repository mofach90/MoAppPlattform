import { create } from 'zustand';
import { Task, TaskStore } from '../types';

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [
    { title: 'Go for Shopping', description: 'Buy groceries and essentials' },
  ],
  selectedTask: null,
  selectTask: (task: Task) => set({ selectedTask: task }),
  addTask: (task: Task) =>
    set((state: { tasks: Task[] }) => ({ tasks: [...state.tasks, task] })),
  deleteTask: (title: string) =>
    set((state: { tasks: Task[] }) => ({
      tasks: state.tasks.filter((task) => task.title !== title),
    })),
}));

export default useTaskStore;
