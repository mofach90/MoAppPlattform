import { ApiResponseCreateTask, Task } from '../types';
import { isResponseJson } from './isResponseJson';

const createTaskInFirestore = async (task: Task) => {
  try {
    const request = await fetch('/api/v1/todo-app/tasks/create-task', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        title: task.title,
        description: task.description,
        isChecked: task.isChecked,
      }),
    });

    if (!request.ok) {
      throw new Error(`HTTP error! status: ${request.status}`);
    }
    const response: unknown = await request.json();
    if (isResponseJson<ApiResponseCreateTask>(response)) {
      return response;
    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error(
      'Error happen when sending new created task to backend: ',
      error,
    );
    throw error;
  }
};

export default createTaskInFirestore;
