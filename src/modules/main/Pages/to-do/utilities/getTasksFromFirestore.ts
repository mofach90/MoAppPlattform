import { ApiResponseGetTask } from '../types';
import { isResponseJson } from './isResponseJson';

const getTasksFromFirestore = async () => {
  try {
    const request = await fetch('/api/v1/todo-app/tasks/get-tasks', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      credentials: 'include',
    });

    if (!request.ok) {
      throw new Error(`HTTP error! status: ${request.status}`);
    }
    const response: unknown = await request.json();
    if (isResponseJson<ApiResponseGetTask>(response)) {
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

export default getTasksFromFirestore;
