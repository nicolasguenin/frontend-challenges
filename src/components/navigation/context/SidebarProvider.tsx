'use client';

import {
  type FC,
  type ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

type ISidebar = {
  displayed: boolean;
  setDisplayed: (value: boolean) => void;
};

export const SidebarContext = createContext<ISidebar>({
  displayed: false,
  setDisplayed: () => {},
});

export const useSidebar = (): ISidebar => useContext(SidebarContext);

export const SidebarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [displayed, setDisplayed] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ displayed, setDisplayed }}>
      {children}
    </SidebarContext.Provider>
  );
};
