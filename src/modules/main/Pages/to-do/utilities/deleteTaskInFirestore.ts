import { apiClient } from '../../../../../lib/apiClient';
import { ApiResponseDeleteTask } from '../types';

const deleteTaskInFirestore = (
  taskId: string,
): Promise<ApiResponseDeleteTask> =>
  apiClient.post<ApiResponseDeleteTask>('/api/v1/todo-app/tasks/delete-task', {
    taskId,
  });

export default deleteTaskInFirestore;
