import { create } from 'zustand';
import {
  ApiResponseCreateTask,
  ApiResponseGetTask,
  ApiResponseUpdateTask,
  Task,
  TaskStore,
} from '../types';
import createTaskInFirestore from '../utilities/createTaskInFirestore';
import deleteTaskInFirestore from '../utilities/deleteTaskInFirestore';
import getTasksFromFirestore from '../utilities/getTasksFromFirestore';
import updateTaskInFirestore from '../utilities/updateTaskInFirestore';

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
  UpdateTaskDialog: false,
  openSnackbarTaskCreated: false,
  openSnackbarTaskUpdated: false,
  openSnackbarTaskDeleted: false,

  setDeleteTaskDialog: () =>
    set((state) => ({
      deleteTaskDialog: !state.deleteTaskDialog,
    })),
  setUpdateTaskDialog: () =>
    set((state) => ({
      UpdateTaskDialog: !state.UpdateTaskDialog,
    })),
  selectTask: (task: Task) => set({ selectedTask: task }),
  createTask: async (task: Task) => {
    try {
      const response: ApiResponseCreateTask = await createTaskInFirestore(task);
      set((state: TaskStore) => ({
        tasks: [...state.tasks, response.newCreatedTask],
        openSnackbarTaskCreated: true,
      }));
    } catch (error) {
      console.error('Error happen creating a nwe Task in Firestore: ', error);
    }
  },
  updateTask: async (task: Task) => {
    try {
      const response: ApiResponseUpdateTask = await updateTaskInFirestore(task);
      console.log('Task inside the UpdateTask un store: ', task);
      if (response.taskUpdated) {
        set((state: TaskStore) => (
          {
            tasks: state.tasks.map((t) => {
            if (t.id === task.id) {
              if (t.isChecked === task.isChecked) {
                state.openSnackbarTaskUpdated= true;
              }
              t.title = task.title;
              t.description = task.description;
              t.isChecked = task.isChecked;
              t.dueDate = task.dueDate;
              t.createdAt = task.createdAt;
              t.updatedAt = task.updatedAt;

              return t;
            } else {
              return t;
            }
          }),
        }));
      } else {
        console.log('Error while Updating the Task: ', response.message);
      }
      console.log('the response: ', response);
    } catch (error) {
      console.error('Error happen creating a nwe Task in Firestore: ', error);
    }
  },
  addTasksFromFirestore: async () => {
    try {
      const Tasks: ApiResponseGetTask = await getTasksFromFirestore();
      console.log({ Tasks });
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
          selectedTask: null,
          openSnackbarTaskDeleted: true,
        }));
      } else {
        console.log('Error: ', response.message);
      }
    } catch (error) {}
  },
  handleCloseNotification: (
    _event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    set({
      openSnackbarTaskCreated: false,
      openSnackbarTaskUpdated: false,
      openSnackbarTaskDeleted: false,
    });
  },
}));

export default useTaskStore;
