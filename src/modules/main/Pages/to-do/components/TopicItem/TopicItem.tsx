import { Box, Typography } from '@mui/material';
import { MenuItem } from 'react-pro-sidebar';
import useToDo from '../../hooks/useToDo';
import { TopicType } from '../../types';
import DeleteIcon from './components/DeleteIcon';
import TopicItemIcon from './components/TopicItemIcon';

const TopicItem = ({
  topic,
  selectedTopic,
}: {
  readonly topic: TopicType;
  selectedTopic: TopicType;
}) => {
  const { handleTopicSelected, checkTopicActive } = useToDo();

  return (
    <MenuItem
      active={checkTopicActive(selectedTopic, topic)}
      onClick={() => handleTopicSelected(topic)}
    >
      <Box display={'flex'} justifyContent={'space-between'}>
        <Box display={'flex'} width="100%" justifyContent={'space-between'}>
          <TopicItemIcon topic={topic} />
          <Box
            display={'flex'}
            justifyContent={'start'}
            width={'100%'}
            maxWidth={100}
          >
            <Typography>{topic}</Typography>
          </Box>
        </Box>
        <DeleteIcon variant='topic' />
      </Box>
    </MenuItem>
  );
};
export default TopicItem;
