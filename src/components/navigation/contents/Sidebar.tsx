'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Burger from '~/components/navigation/components/Burger';
import Menu from '~/components/navigation/containers/Menu';
import { useSidebar } from '~/components/navigation/context/SidebarProvider';
import Transition from '~/components/transition/Transition';

const Sidebar = () => {
  const { displayed, setDisplayed } = useSidebar();
  const pathname = usePathname();

  useEffect(() => {
    setDisplayed(false);
  }, [pathname, setDisplayed]);

  return (
    <div className='fixed bg-white border-right sidebar'>
      <Burger />
      <Transition name='menu-animation' visible={displayed}>
        <Menu />
      </Transition>
    </div>
  );
};

export default Sidebar;
