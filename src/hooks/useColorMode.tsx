import { useContext, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import { AppDataContext } from '../providers/AppDataProvider';

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage('color-theme', 'light');
  const { appData, updateAppData } = useContext(AppDataContext);

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    colorMode === 'dark'
      ? bodyClass.add(className)
      : bodyClass.remove(className);
    
    updateAppData({
      ...appData,
      darkMode: colorMode === 'dark',
    })
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
