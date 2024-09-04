import { create } from 'zustand';
import {
  ApiResponseCreateTask,
  ApiResponseGetTask,
  ApiResponseUpdateTask,
  Task,
  TaskStore,
  TopicType,
} from '../types';
import createTaskInFirestore from '../utilities/createTaskInFirestore';
import deleteTaskInFirestore from '../utilities/deleteTaskInFirestore';
import deleteTopicInFirestore from '../utilities/deleteTopicInFirestore';
import getTasksFromFirestore from '../utilities/getTasksFromFirestore';
import updateTaskInFirestore from '../utilities/updateTaskInFirestore';

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [
    {
      id: 'xxxxxx',
      title: 'Go for Shopping',
      description: 'Buy groceries and essentials',
      isChecked: false,
      priority: 'high',
    },
  ],
  selectedTask: null,
  selectedTopic: null,
  deleteTaskDialog: false,
  deleteTopicDialog: false,
  UpdateTaskDialog: false,
  openSnackbarTaskCreated: false,
  openSnackbarTaskUpdated: false,
  openSnackbarTaskDeleted: false,
  openSnackbarTopicDeleted: false,
  openSnackbarTaskDeletedError: false,
  openSnackbarTaskUpdatedError: false,
  openSnackbarTaskCreatedError: false,
  openSnackbarTopicDeletedError: false,
  taskDeletedErrorMessage: "",
  topicDeletedErrorMessage: "",
  taskCreatedErrorMessage: "",
  taskUpdatedErrorMessage: "",

  setDeleteTaskDialog: () =>
    set((state) => ({
      deleteTaskDialog: !state.deleteTaskDialog,
      deleteTopicDialog: false,
    })),

  setDeleteTopicDialog: () =>
    set((state) => ({
      deleteTopicDialog: !state.deleteTopicDialog,
      deleteTaskDialog: false,
    })),
  setUpdateTaskDialog: () =>
    set((state) => ({
      UpdateTaskDialog: !state.UpdateTaskDialog,
    })),
  selectTask: (task: Task) => set({ selectedTask: task }),
  selectTopic: (topic: TopicType) => set({ selectedTopic: topic }),
  createTask: async (task: Task) => {
    try {
      const response: ApiResponseCreateTask = await createTaskInFirestore(task);
      if (response.taskCreated) {
        
        set((state: TaskStore) => ({
          tasks: [...state.tasks, response.newCreatedTask],
          openSnackbarTaskCreated: true,
        }));
      } else {
        set(() => ({
          openSnackbarTaskCreatedError: true,
          taskCreatedErrorMessage: response.message,
        }));
        
      }
    } catch (error) {
      console.error('Error happen creating a nwe Task in Firestore: ', error);
    }
  },
  updateTask: async (task: Task) => {
    try {
      const response: ApiResponseUpdateTask = await updateTaskInFirestore(task);
      // const response = { message: 'only for test', taskUpdated: true };
      // const response = {message: "this is only a test error", taskUpdated:false};
      if (response.taskUpdated) {
        set((state: TaskStore) => ({
          tasks: state.tasks.map((t) => {
            if (t.id === task.id) {
              if (t.isChecked === task.isChecked) {
                state.openSnackbarTaskUpdated = true;
              }
              t.title = task.title;
              t.description = task.description;
              t.isChecked = task.isChecked;
              t.dueDate = task.dueDate;
              t.createdAt = task.createdAt;
              t.updatedAt = task.updatedAt;
              t.priority = task.priority;
              t.reminder = task.reminder;
              t.topic = task.topic;

              return t;
            } else {
              return t;
            }
          }),
        }));
      } else {
        console.log('Error while Updating the Task: ', response.message);
        set(() => ({
          openSnackbarTaskUpdatedError: true,
          taskUpdatedErrorMessage: response.message,
        }));
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
      // const response = {message: "this is only a test error", taskDeleted:false};
      if (response.taskDeleted) {
        set((state: TaskStore) => ({
          tasks: state.tasks.filter((task) => task.id !== taskId),
          selectedTask: null,
          openSnackbarTaskDeleted: true,
        }));
      } else {
        console.log('Error: ', response.message);
        set(() => ({
          openSnackbarTaskDeletedError: true,
          taskDeletedErrorMessage: response.message,
        }));
      }
    } catch (error) {}
  },
  deleteTopic: async (topic: TopicType) => {
    try {
      const response = await deleteTopicInFirestore(topic);
      // const response = { message: 'only for test', topicDeleted: true };
      // const response = {message: "this is only a test error", topicDeleted:false};

      if (response.topicDeleted) {
        set((state: TaskStore) => ({
          tasks: state.tasks.filter((task) => task.topic !== topic),
          selectedTopic: null,
          openSnackbarTopicDeleted: true,
        }));
      } else {
        console.log('Error: ', response.message);
        set(() => ({
          openSnackbarTopicDeletedError: true,
          topicDeletedErrorMessage: response.message,
        }));
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
      openSnackbarTopicDeleted: false,
      openSnackbarTaskDeletedError: false,
      openSnackbarTaskUpdatedError: false,
      openSnackbarTaskCreatedError: false,
      openSnackbarTopicDeletedError: false,

    });
  },
}));

export default useTaskStore;
