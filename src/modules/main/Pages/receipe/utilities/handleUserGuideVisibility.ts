import useUserGuideStore from '../store/UserGuideStore';

export const handleUserGuideVisibility = () => {
  const hasVisited = localStorage.getItem('hasVisited');
  if (!hasVisited) {
    useUserGuideStore.setState({ showUserGuide: true });
  }
};
