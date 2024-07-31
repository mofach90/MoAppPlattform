import { Mode } from '../../global/theme/theme';

export interface ItemTypes {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  handleItemClick: any;
}

export interface Theme {
  palette?: {
    mode: Mode;
  };
}
