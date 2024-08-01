import { Typography } from "@mui/material"
import { Task } from "../../../types"

const TaskTitle = ({task}:{task:Task}) => {
  return (
    <Typography
    variant="h5"
    sx={{
      textDecoration: task.isChecked ? 'line-through' : 'none',
    }}
  >
    {task.title}
  </Typography>  )
}

export default TaskTitle