import type { PropsWithChildren } from 'react';
import Link, { type LinkProps } from 'next/link';

type MenuItemProps = PropsWithChildren & LinkProps;

const MenuItem = ({ children, ...rest }: MenuItemProps) => {
  return (
    <li className='menu-item'>
      <Link
        className='block px-2 py-1 text-decoration-none menu-link'
        {...rest}
      >
        {children}
      </Link>
    </li>
  );
};

export default MenuItem;
