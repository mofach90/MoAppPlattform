import { ApiResponseDeleteTask } from '../types';
import { isResponseJson } from './isResponseJson';

const deleteTaskInFirestore = async (taskId: string) => {
  try {
    const request = await fetch('/api/v1/todo-app/tasks/delete-task', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        taskId: taskId,
      }),
    });

    if (!request.ok) {
      throw new Error(`HTTP error! status: ${request.status}`);
    }
    const response: unknown = await request.json();
    if (isResponseJson<ApiResponseDeleteTask>(response)) {
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

export default deleteTaskInFirestore;
