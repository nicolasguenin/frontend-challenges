import { useEffect, useRef, useState } from 'react';
import MenuItem from '~/components/navigation/components/MenuItem';
import { List } from '~/atoms';

const Menu = () => {
  const nav = useRef<null | HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (nav?.current) {
      if (!visible) {
        timeout = setTimeout(() => {
          (nav.current as HTMLElement).style.opacity = '1';
          setVisible(true);
        }, 0);
      } else {
        timeout = setTimeout(() => {
          (nav.current as HTMLElement).style.opacity = '0';
          setVisible(false);
        }, 0);
      }
      return () => {
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <nav ref={nav} className='absolute bg-white border-right menu'>
      <List>
        <MenuItem href='/challenges/1'>Element</MenuItem>
      </List>
    </nav>
  );
};

export default Menu;
