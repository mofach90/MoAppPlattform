import { apiClient } from '../../../../../lib/apiClient';
import { ApiResponseUpdateTask, Task } from '../types';

const updateTaskInFirestore = (task: Task): Promise<ApiResponseUpdateTask> =>
  apiClient.post<ApiResponseUpdateTask>('/api/v1/todo-app/tasks/update-task', {
    id: task.id,
    title: task.title,
    description: task.description,
    isChecked: task.isChecked,
    dueDate: task.dueDate,
    priority: task.priority,
    reminder: task.reminder,
    topic: task.topic,
  });

export default updateTaskInFirestore;
