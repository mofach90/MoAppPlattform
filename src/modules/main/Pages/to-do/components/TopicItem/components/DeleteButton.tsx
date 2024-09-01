import { useTheme } from '@mui/material';
import ButtonWrapper from '../../../../../../global/components/ButtonWrapper';
import { tokens } from '../../../../../../global/theme/theme';
import { Theme } from '../../../../../types/mainTypes';
import useTaskStore from '../../../hooks/useTaskStore';

const DeleteButton = () => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette?.mode ?? 'dark');
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const deleteTopic = useTaskStore((state) => state.deleteTopic);
  const selectedTask = useTaskStore((state) => state.selectedTask);
  const selectedTopic = useTaskStore((state) => state.selectedTopic);
  const setDeleteTaskDialog = useTaskStore(
    (state) => state.setDeleteTaskDialog,
  );
  const setDeleteTopicDialog = useTaskStore(
    (state) => state.setDeleteTopicDialog,
  );
  return (
    <ButtonWrapper
      buttonConfig={{
        sx: {
          backgroundColor: colors.redAccent[600],
          color: 'black',
          border: '2px solid black',

          ':hover': {
            backgroundColor: colors.redAccent[500],
          },
          width: 90,
          height: 37,
          fontSize: '14px',
          borderRadius: 5,
        },
        onClick: () => {
          if (selectedTask) {
            deleteTask(selectedTask?.id ? selectedTask.id : '');
            setDeleteTaskDialog();
          } else {
            deleteTopic(selectedTopic);
            setDeleteTopicDialog();
          }

        },
      }}
    >
      Delete
    </ButtonWrapper>
  );
};

export default DeleteButton;
