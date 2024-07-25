export interface Task {
  id?: string;
  title: string;
  description: string;
  isChecked?: boolean;
}
export interface TodoItemType {
  task: Task;
}

export interface TaskStore {
  tasks: Task[];
  selectedTask: Task | null;
  selectTask: (task: Task) => void;
  setIsChecked: (task: Task) => void;
  addTask: (task: Task) => void;
  deleteTask: (task: Task['title']) => void;
}

export interface ManageTasksState {
  openCreateTask: boolean;
  openRemoveTask: boolean;
  handleClose: (_event: React.SyntheticEvent | Event, reason?: string) => void;
  handleOnClickCreate: () => void;
  handleOnClickRemove: () => void;
}

export interface CreateTaskFormValues {
  taskTitle: string;
  taskDescription: string;
}

export function isSelectedTask(
  selectedTask: Task | null,
): selectedTask is Task {
  return selectedTask !== null;
}
export interface ApiResponseCreateTask {
  taskCreated: boolean;
  newCreatedTask: Task;
}
