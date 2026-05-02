import { create } from 'zustand';
import {
  ApiResponseCreateTask,
  ApiResponseGetTask,
  ApiResponseUpdateTask,
  Task,
  TaskNotification,
  TaskStore,
  TopicType,
} from '../types';
import createTaskInFirestore from '../utilities/createTaskInFirestore';
import deleteTaskInFirestore from '../utilities/deleteTaskInFirestore';
import deleteTopicInFirestore from '../utilities/deleteTopicInFirestore';
import getTasksFromFirestore from '../utilities/getTasksFromFirestore';
import updateTaskInFirestore from '../utilities/updateTaskInFirestore';

const notify = (
  severity: TaskNotification['severity'],
  message: string,
): TaskNotification => ({ open: true, severity, message });

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
  notification: null,

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
    set((state) => ({ UpdateTaskDialog: !state.UpdateTaskDialog })),

  selectTask: (task: Task) => set({ selectedTask: task }),
  selectTopic: (topic: TopicType) => set({ selectedTopic: topic }),

  createTask: async (task: Task) => {
    try {
      const response: ApiResponseCreateTask = await createTaskInFirestore(task);
      if (response.taskCreated) {
        set((state: TaskStore) => ({
          tasks: [...state.tasks, response.newCreatedTask],
          notification: notify('success', 'Task successfully created'),
        }));
      } else {
        set({ notification: notify('error', response.message ?? 'Failed to create task') });
      }
    } catch (error) {
      console.error('Error creating task:', error);
    }
  },

  updateTask: async (task: Task) => {
    try {
      const response: ApiResponseUpdateTask = await updateTaskInFirestore(task);
      if (response.taskUpdated) {
        set((state: TaskStore) => {
          const wasChecked = state.tasks.find((t) => t.id === task.id)?.isChecked;
          return {
            tasks: state.tasks.map((t) => (t.id === task.id ? { ...t, ...task } : t)),
            notification:
              wasChecked === task.isChecked
                ? notify('success', 'Task successfully updated')
                : null,
          };
        });
      } else {
        set({ notification: notify('error', response.message ?? 'Failed to update task') });
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  },

  addTasksFromFirestore: async () => {
    try {
      const Tasks: ApiResponseGetTask = await getTasksFromFirestore();
      set({ tasks: [...Tasks.tasks] });
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
          notification: notify('success', 'Task successfully deleted'),
        }));
      } else {
        set({ notification: notify('error', response.message) });
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  },

  deleteTopic: async (topic: TopicType) => {
    try {
      const response = await deleteTopicInFirestore(topic);
      if (response.topicDeleted) {
        set((state: TaskStore) => ({
          tasks: state.tasks.filter((task) => task.topic !== topic),
          selectedTopic: null,
          notification: notify('success', 'Topic successfully deleted'),
        }));
      } else {
        set({ notification: notify('error', response.message) });
      }
    } catch (error) {
      console.error('Error deleting topic:', error);
    }
  },

  handleCloseNotification: (
    _event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') return;
    set({ notification: null });
  },
}));

export default useTaskStore;
