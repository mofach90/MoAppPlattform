import { useTheme } from '@mui/material';
import ButtonWrapper from '../../../../../../global/components/ButtonWrapper';
import { tokens } from '../../../../../../global/theme/theme';
import { Theme } from '../../../../../types/mainTypes';
import useDialogStore from '../../../hooks/useDialogStore';
import useTaskStore from '../../../hooks/useTaskStore';

const DeleteButton = () => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette?.mode ?? 'dark');
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const deleteTopic = useTaskStore((state) => state.deleteTopic);
  const selectedTask = useTaskStore((state) => state.selectedTask);
  const selectedTopic = useTaskStore((state) => state.selectedTopic);
  const close = useDialogStore((s) => s.close);
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
            deleteTask(selectedTask.id ?? '');
          } else {
            deleteTopic(selectedTopic);
          }
          close();
        },
      }}
    >
      Delete
    </ButtonWrapper>
  );
};

export default DeleteButton;
