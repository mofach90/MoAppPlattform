import { useTranslation } from 'react-i18next';

const useTextAlignment = (): 'left' | 'right' | 'center' => {
  const { i18n } = useTranslation();
  return i18n.language === 'ar' ? 'right' : 'left';
};

export default useTextAlignment;
