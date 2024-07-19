'use client';

import React from 'react';
import Burger from '~/components/navigation/components/Burger';
import Menu from '~/components/navigation/containers/Menu';
import { useSidebar } from '~/components/navigation/context/SidebarProvider';
import Transition from '~/components/transition/Transition';

const Sidebar = () => {
  const { displayed } = useSidebar();

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
