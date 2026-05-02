import { apiClient } from '../../../../../lib/apiClient';
import { ApiResponseGetTask } from '../types';

const getTasksFromFirestore = (): Promise<ApiResponseGetTask> =>
  apiClient.get<ApiResponseGetTask>('/api/v1/todo-app/tasks/get-tasks');

export default getTasksFromFirestore;
