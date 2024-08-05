export interface colorLibrary {
  grey: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  primary: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  greenAccent: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  redAccent: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  blueAccent: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
}

export interface Task {
  id?: string;
  title: string;
  description: string;
  isChecked?: boolean;
  dueDate?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface TaskStore {
  tasks: Task[];
  selectedTask: Task | null;
  deleteTaskDialog: boolean;
  UpdateTaskDialog: boolean;
  openSnackbarTaskCreated: boolean,
  openSnackbarTaskUpdated: boolean,
  openSnackbarTaskDeleted: boolean,
  setDeleteTaskDialog: () => void;
  setUpdateTaskDialog: () => void;
  selectTask: (task: Task) => void;
  createTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (task: Task['title']) => void;
  addTasksFromFirestore: () => void;
  handleCloseNotification: (
    _event: React.SyntheticEvent | Event,
    reason?: string,
  ) => void;
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
  taskDueDate?: string | null;
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
export interface ApiResponseUpdateTask {
  message?: string;
  taskUpdated: boolean;
}
export interface ApiResponseDeleteTask {
  message: string;
  taskDeleted: boolean;
}

export interface ApiResponseGetTask {
  tasks: Task[];
}

export interface TodoSidebarProps {
  variant?: 'finished-tasks' | 'on-progress-tasks';
  title: string;
  innerColor: string;
  tasks: Task[];
}
