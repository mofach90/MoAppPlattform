import { Mode } from '../../global/theme/theme';

export interface ItemTypes {
  title: string;
  to: string;
  icon: React.ReactNode;
}

export interface Theme {
  palette?: {
    mode: Mode;
  };
}
