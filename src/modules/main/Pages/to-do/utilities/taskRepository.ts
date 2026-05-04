import { apiClient } from '../../../../../lib/apiClient';
import {
  ApiResponseCreateTask,
  ApiResponseDeleteTask,
  ApiResponseDeleteTopic,
  ApiResponseGetTask,
  ApiResponseUpdateTask,
  Task,
  TopicType,
} from '../types';

export const taskRepository = {
  create(task: Task, userEmail: string): Promise<ApiResponseCreateTask> {
    return apiClient.post<ApiResponseCreateTask>(
      '/api/v1/todo-app/tasks/create-task',
      {
        title: task.title,
        description: task.description,
        isChecked: task.isChecked,
        dueDate: task.dueDate,
        priority: task.priority ?? 'medium',
        reminder: task.reminder,
        topic: task.topic,
        userEmail,
      },
    );
  },

  update(task: Task): Promise<ApiResponseUpdateTask> {
    return apiClient.post<ApiResponseUpdateTask>(
      '/api/v1/todo-app/tasks/update-task',
      {
        id: task.id,
        title: task.title,
        description: task.description,
        isChecked: task.isChecked,
        dueDate: task.dueDate,
        priority: task.priority,
        reminder: task.reminder,
        topic: task.topic,
      },
    );
  },

  delete(taskId: string): Promise<ApiResponseDeleteTask> {
    return apiClient.post<ApiResponseDeleteTask>(
      '/api/v1/todo-app/tasks/delete-task',
      { taskId },
    );
  },

  deleteTopic(topic: TopicType): Promise<ApiResponseDeleteTopic> {
    return apiClient.post<ApiResponseDeleteTopic>(
      '/api/v1/todo-app/tasks/delete-topic',
      { topic },
    );
  },

  getAll(): Promise<ApiResponseGetTask> {
    return apiClient.get<ApiResponseGetTask>(
      '/api/v1/todo-app/tasks/get-tasks',
    );
  },
};
