import { create } from 'zustand';
import { Task, TaskStore } from '../types';

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [
    {
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
  addTask: (task: Task) =>
    set((state: TaskStore) => ({ tasks: [...state.tasks, task] })),
  deleteTask: (title: string) =>
    set((state: TaskStore) => ({
      tasks: state.tasks.filter((task) => task.title !== title),
    })),
}));

export default useTaskStore;
