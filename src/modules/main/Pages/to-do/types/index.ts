import { MouseEventHandler } from 'react';

export interface Task {
  title: string;
  description: string;
}
export interface TodoItemType {
  title: string;
  icon: React.ReactNode;
  selected: string;
  onClick: MouseEventHandler<HTMLLIElement> | undefined;
}

export interface TaskStore {
  tasks: Task[];
  selectedTask: Task | null;
  selectTask: (task: Task) => void;
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
