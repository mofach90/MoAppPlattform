import { Task, TopicType, isSelectedTask } from '../types';
import useTaskStore from './useTaskStore';

const useToDo = () => {
  const selectTask = useTaskStore((state) => state.selectTask);
  const selectTopic = useTaskStore((state) => state.selectTopic);
  const updateTask = useTaskStore((state) => state.updateTask);

  const handleTaskSelected: (task: Task) => void = (task: Task) => {
    selectTask(task);
  };
  const handleTopicSelected: (topic: TopicType) => void = (
    topic: TopicType,
  ) => {
    selectTopic(topic);
  };
  const handleIsChecked: (task: Task) => Promise<void> = async (task: Task) => {
    const updatedTask = { ...task, isChecked: !task.isChecked };
    await updateTask(updatedTask);
  };
  const checkTaskActive = (selectedTask: Task | null, task: Task) => {
    return isSelectedTask(selectedTask) && selectedTask.id === task.id;
  };
  const checkTopicActive = (selectedTopic: TopicType, topic: TopicType) => {
    return !!selectedTopic && selectedTopic === topic;
  };
  return {
    handleTaskSelected,
    handleIsChecked,
    checkTaskActive,
    handleTopicSelected,
    checkTopicActive,
  };
};

export default useToDo;
