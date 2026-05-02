import { apiClient } from '../../../../../lib/apiClient';
import { ApiResponseCreateTask, Task } from '../types';

const createTaskInFirestore = (task: Task): Promise<ApiResponseCreateTask> => {
  const user = JSON.parse(localStorage.getItem('userCredential') ?? '[]');
  return apiClient.post<ApiResponseCreateTask>('/api/v1/todo-app/tasks/create-task', {
    title: task.title,
    description: task.description,
    isChecked: task.isChecked,
    dueDate: task.dueDate,
    priority: task.priority ?? 'medium',
    reminder: task.reminder,
    topic: task.topic,
    userEmail: user[0]?.email,
  });
};

export default createTaskInFirestore;
