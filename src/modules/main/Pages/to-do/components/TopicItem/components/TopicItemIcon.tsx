import EngineeringIcon from '@mui/icons-material/Engineering';
import FlightIcon from '@mui/icons-material/Flight';
import HouseIcon from '@mui/icons-material/House';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SchoolIcon from '@mui/icons-material/School';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ReactElement } from 'react';
import { TopicType } from '../../../types';

const iconMapping: { [key in Exclude<TopicType, null>]: ReactElement } = {
  Travel: <FlightIcon />,
  Personal: <SensorOccupiedIcon />,
  Education: <SchoolIcon />,
  'Home_Family': <HouseIcon />,
  Others: <MoreHorizIcon />,
  Shopping: <ShoppingCartIcon />,
  Work: <EngineeringIcon />,
};

const TopicItemIcon = ({topic}: { topic: TopicType }) => {
  return topic? iconMapping[topic] : null;
};

export default TopicItemIcon;
