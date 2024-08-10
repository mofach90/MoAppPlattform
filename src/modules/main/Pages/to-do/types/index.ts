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

const tooltipHelperText = `
  Choose when you'd like to be reminded before the task's due time.
  Reminders are only available if a due time is set.
  Make sure the reminder interval is shorter than the time left until the due time. 
  For example, if the task is due in 30 minutes, a 15-minute reminder is valid, but a 1-hour reminder is not.
  After selecting a reminder interval, you can also choose how you'd like to be notified—either by email or SMS.
`;
// before time value must in min , for example 2 hr need to be 120 min
export enum Reminder { 
  default = 'none',
  before_time_1 = '15 min',
  before_time_2 = '30 min',
  before_time_3 = '60 min',
  tooltip_helper_text = tooltipHelperText,
}
export interface Task {
  id?: string;
  title: string;
  description: string;
  isChecked?: boolean;
  dueDate?: string;
  createdAt?: string;
  updatedAt?: string;
  priority: PriorityType | null;
}
export type PriorityType = 'medium' | 'high' | 'low';

export interface TaskStore {
  tasks: Task[];
  selectedTask: Task | null;
  deleteTaskDialog: boolean;
  UpdateTaskDialog: boolean;
  openSnackbarTaskCreated: boolean;
  openSnackbarTaskUpdated: boolean;
  openSnackbarTaskDeleted: boolean;
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
  taskPriority: PriorityType | null;
  taskReminder: Reminder | null;
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
  readonly tasks: Task[];
}
