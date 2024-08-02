import { create } from 'zustand';
import {
  ApiResponseCreateTask,
  ApiResponseGetTask,
  Task,
  TaskStore,
} from '../types';
import createTaskInFirestore from '../utilities/createTaskInFirestore';
import deleteTaskInFirestore from '../utilities/deleteTaskInFirestore';
import getTasksFromFirestore from '../utilities/getTasksFromFirestore';

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
  deleteTaskDialog: false,
  setDeleteTaskDialog: () =>
    set((state) => ({
      deleteTaskDialog: !state.deleteTaskDialog,
    })),
  selectTask: (task: Task) => set({ selectedTask: task }),
  setIsChecked: (task: Task) => {
    set((state: TaskStore) => ({
      tasks: state.tasks.map((t) =>
        t.id === task.id ? { ...t, isChecked: !t.isChecked } : t,
      ),
    }));
  },
  createTask: async (task: Task) => {
    try {
      const response: ApiResponseCreateTask = await createTaskInFirestore(task);
      set((state: TaskStore) => ({
        tasks: [...state.tasks, response.newCreatedTask],
      }));
    } catch (error) {
      console.error('Error happen creating a nwe Task in Firestore: ', error);
    }
  },
  addTasksFromFirestore: async () => {
    try {
      const Tasks: ApiResponseGetTask = await getTasksFromFirestore();
      set(() => ({
        tasks: [...Tasks.tasks],
      }));
    } catch (error) {
      console.error(error);
    }
  },
  deleteTask: async (taskId: string) => {
    try {
      const response = await deleteTaskInFirestore(taskId);
      if (response.taskDeleted) {
        set((state: TaskStore) => ({
          tasks: state.tasks.filter((task) => task.id !== taskId),
        }));
      } else {
        console.log("Error: ",response.message)
      }
    } catch (error) {}
  },
}));

export default useTaskStore;
