import { apiClient } from '../../../../../lib/apiClient';
import { ApiResponseDeleteTopic, TopicType } from '../types';

const deleteTopicInFirestore = (
  topic: TopicType,
): Promise<ApiResponseDeleteTopic> =>
  apiClient.post<ApiResponseDeleteTopic>(
    '/api/v1/todo-app/tasks/delete-topic',
    { topic },
  );

export default deleteTopicInFirestore;
