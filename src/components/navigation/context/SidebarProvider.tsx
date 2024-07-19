'use client';

import {
  type FC,
  type ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
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

  const setDisplayedState = useCallback(
    (value: boolean) => setDisplayed(value),
    []
  );

  return (
    <SidebarContext.Provider
      value={{ displayed, setDisplayed: setDisplayedState }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
