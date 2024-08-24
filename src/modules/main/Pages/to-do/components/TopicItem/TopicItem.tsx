import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { MenuItem } from 'react-pro-sidebar';
import useTaskStore from '../../hooks/useTaskStore';
import { Task, TopicType } from '../../types';
import CheckBox from './components/Checkbox';
import DeleteIcon from './components/DeleteIcon';
import TaskPriority from './components/TaskPriority';
import TaskTitle from './components/TaskTitle';
import useToDo from './hooks/useToDo';
import TopicItemIcon from './components/TopicItemIcon';

const TopicItem = ({ topic }: { readonly topic: TopicType }) => {
  const selectedTopic = useTaskStore((state) => state.selectedTopic);
  const itemTopic = topic;
  const { handleTopicSelected, checkTopicActive } = useToDo();

  useEffect(() => {
    console.log(
      'selectedTopic : ',
      selectedTopic,
    );
    console.log(
      'itemTopic : ',
      itemTopic,
    );
    console.log(
      'checkTopicActive(selectedTopic, itemTopic) : ',
      checkTopicActive(selectedTopic, itemTopic),
    );
  }, [selectedTopic, itemTopic]);

  return (
    <MenuItem
      active={checkTopicActive(selectedTopic, itemTopic)}
      onClick={() => handleTopicSelected(itemTopic)}
    >
      <Box display={'flex'} justifyContent={'space-between'}>
        {/* <CheckBox task={topic} /> */}
        
        <Box display={'flex'} width="100%" justifyContent={'space-between'}>
          <TopicItemIcon topic={itemTopic} />
          <Box
            display={'flex'}
            justifyContent={'start'}
            width={'100%'}
            maxWidth={100}
          >
            <Typography>{itemTopic}</Typography>
          </Box>
        </Box>
        <DeleteIcon />
      </Box>
    </MenuItem>
  );
};
export default TopicItem;
