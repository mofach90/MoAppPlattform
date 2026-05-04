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
import { taskRepository } from '../utilities/taskRepository';

const notify = (
  severity: TaskNotification['severity'],
  message: string,
): TaskNotification => ({ open: true, severity, message });

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  selectedTask: null,
  selectedTopic: null,
  notification: null,

  selectTask: (task: Task) => set({ selectedTask: task }),
  selectTopic: (topic: TopicType) => set({ selectedTopic: topic }),

  createTask: async (task: Task, userEmail: string) => {
    try {
      const response: ApiResponseCreateTask = await taskRepository.create(
        task,
        userEmail,
      );
      if (response.taskCreated) {
        set((state: TaskStore) => ({
          tasks: [...state.tasks, response.newCreatedTask],
          notification: notify('success', 'Task successfully created'),
        }));
      } else {
        set({
          notification: notify(
            'error',
            response.message ?? 'Failed to create task',
          ),
        });
      }
    } catch {
      set({ notification: notify('error', 'Failed to create task') });
    }
  },

  updateTask: async (task: Task) => {
    try {
      const response: ApiResponseUpdateTask = await taskRepository.update(task);
      if (response.taskUpdated) {
        set((state: TaskStore) => {
          const wasChecked = state.tasks.find(
            (t) => t.id === task.id,
          )?.isChecked;
          return {
            tasks: state.tasks.map((t) =>
              t.id === task.id ? { ...t, ...task } : t,
            ),
            notification:
              wasChecked === task.isChecked
                ? notify('success', 'Task successfully updated')
                : null,
          };
        });
      } else {
        set({
          notification: notify(
            'error',
            response.message ?? 'Failed to update task',
          ),
        });
      }
    } catch {
      set({ notification: notify('error', 'Failed to update task') });
    }
  },

  addTasksFromFirestore: async () => {
    try {
      const Tasks: ApiResponseGetTask = await taskRepository.getAll();
      set({ tasks: [...Tasks.tasks] });
    } catch {
      set({ notification: notify('error', 'Failed to load tasks') });
    }
  },

  deleteTask: async (taskId: string) => {
    try {
      const response = await taskRepository.delete(taskId);
      if (response.taskDeleted) {
        set((state: TaskStore) => ({
          tasks: state.tasks.filter((task) => task.id !== taskId),
          selectedTask: null,
          notification: notify('success', 'Task successfully deleted'),
        }));
      } else {
        set({ notification: notify('error', response.message) });
      }
    } catch {
      set({ notification: notify('error', 'Failed to delete task') });
    }
  },

  deleteTopic: async (topic: TopicType) => {
    try {
      const response = await taskRepository.deleteTopic(topic);
      if (response.topicDeleted) {
        set((state: TaskStore) => ({
          tasks: state.tasks.filter((task) => task.topic !== topic),
          selectedTopic: null,
          notification: notify('success', 'Topic successfully deleted'),
        }));
      } else {
        set({ notification: notify('error', response.message) });
      }
    } catch {
      set({ notification: notify('error', 'Failed to delete topic') });
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
