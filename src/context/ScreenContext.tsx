import React, { createContext, useEffect, useState } from 'react';

import { ScreenSizes } from '../consts/vars';

export type ScreenContextType = {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
};

type Props = {
  children: React.ReactNode;
};

const getIsDesktop = () => window.innerWidth > ScreenSizes.TABLET;
const getIsTablet = () =>
  window.innerWidth > ScreenSizes.MOBILE && window.innerWidth <= ScreenSizes.TABLET;
const getIsMobile = () => window.innerWidth <= ScreenSizes.MOBILE;

export const ScreenContext = createContext<ScreenContextType>({
  isDesktop: getIsDesktop(),
  isTablet: getIsTablet(),
  isMobile: getIsMobile(),
});

const ScreenContextProvider = ({ children }: Props): JSX.Element => {
  const [isDesktop, setIsDesktop] = useState<boolean>(getIsDesktop());
  const [isTablet, setIsTablet] = useState<boolean>(getIsTablet());
  const [isMobile, setIsMobile] = useState<boolean>(getIsMobile());

  useEffect(() => {
    window.addEventListener('resize', () => {
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
  }, [isDesktop, isTablet, isMobile]);

  const defaultValue: ScreenContextType = {
    isDesktop: isDesktop,
    isTablet: isTablet,
    isMobile: isMobile,
  };

  return <ScreenContext.Provider value={defaultValue}>{children}</ScreenContext.Provider>;
};

export default ScreenContextProvider;
