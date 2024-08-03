import { ApiResponseUpdateTask, Task } from '../types';
import { isResponseJson } from './isResponseJson';

const updateTaskInFirestore = async (task: Task) => {
  try {
    const request = await fetch('/api/v1/todo-app/tasks/update-task', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        id: task.id,
        title: task.title,
        description: task.description,
        isChecked: task.isChecked,
      }),
    });

    if (!request.ok) {
      throw new Error(`HTTP error! status: ${request.status}`);
    }
    const response: unknown = await request.json();
    console.log('this is the response: ', response);
    if (isResponseJson<ApiResponseUpdateTask>(response)) {
      return response;
    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error('Error happen when sending updated task to backend: ', error);
    throw error;
  }
};

export default updateTaskInFirestore;
