import React, { createContext, useEffect, useState } from 'react';

import { ScreenSizes } from '../consts/vars';

export type ScreenContextType = {
  isWideScreen: boolean;
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
};

type Props = {
  children: React.ReactNode;
};

const getIsWideScreen = () => window.innerWidth > ScreenSizes.DESKTOP;
const getIsDesktop = () => window.innerWidth > ScreenSizes.TABLET;
const getIsTablet = () =>
  window.innerWidth > ScreenSizes.MOBILE && window.innerWidth <= ScreenSizes.TABLET;
const getIsMobile = () => window.innerWidth <= ScreenSizes.MOBILE;

export const ScreenContext = createContext<ScreenContextType>({
  isWideScreen: getIsWideScreen(),
  isDesktop: getIsDesktop(),
  isTablet: getIsTablet(),
  isMobile: getIsMobile(),
});

const ScreenContextProvider = ({ children }: Props): JSX.Element => {
  const [isWideScreen, setIsWideScreen] = useState<boolean>(getIsWideScreen());
  const [isDesktop, setIsDesktop] = useState<boolean>(getIsDesktop());
  const [isTablet, setIsTablet] = useState<boolean>(getIsTablet());
  const [isMobile, setIsMobile] = useState<boolean>(getIsMobile());

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (getIsWideScreen() !== isWideScreen) {
        setIsWideScreen(getIsWideScreen());
      }
      if (getIsDesktop() !== isDesktop) {
        setIsDesktop(getIsDesktop());
      }
      if (getIsTablet() !== isTablet) {
        setIsTablet(getIsTablet());
      }
      if (getIsMobile() !== isMobile) {
        setIsMobile(getIsMobile());
      }
    });
  }, [isDesktop, isTablet, isMobile, isWideScreen]);

  const defaultValue: ScreenContextType = {
    isWideScreen: isWideScreen,
    isDesktop: isDesktop,
    isTablet: isTablet,
    isMobile: isMobile,
  };

  return <ScreenContext.Provider value={defaultValue}>{children}</ScreenContext.Provider>;
};

export default ScreenContextProvider;
