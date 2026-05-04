import { CurrentUser } from '../../../data/authData';
import { useAuth } from '../../../contexts/authProvider';

const useCurrentUser = (): CurrentUser | null => useAuth().currentUser;

export default useCurrentUser;
