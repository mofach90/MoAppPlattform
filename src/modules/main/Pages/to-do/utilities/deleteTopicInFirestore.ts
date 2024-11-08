import { ApiResponseDeleteTopic, TopicType } from '../types';
import { isResponseJson } from './isResponseJson';

const deleteTopicInFirestore = async (topic: TopicType) => {
  try {
    const request = await fetch('/api/v1/todo-app/tasks/delete-topic', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        topic: topic,
      }),
    });

    if (!request.ok) {
      throw new Error(`HTTP error! status: ${request.status}`);
    }
    const response: unknown = await request.json();
    if (isResponseJson<ApiResponseDeleteTopic>(response)) {
      return response;
    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error(
      'Error happen when sending deleted topic to backend: ',
      error,
    );
    throw error;
  }
};

export default deleteTopicInFirestore;
