import type { PropsWithChildren } from 'react';
import Link, { type LinkProps } from 'next/link';
import { Symbol } from '~/atoms';
import type { IIcon } from '~/interfaces/Icon.interface';

type MenuItemProps = PropsWithChildren & { icon?: IIcon } & LinkProps;

const MenuItem = ({ children, icon, ...rest }: MenuItemProps) => {
  return (
    <li className='menu-item'>
      <Link
        className='px-0-75 py-1 text-decoration-none flex gap-0-75 menu-link'
        {...rest}
      >
        {!!icon && <Symbol name={icon} />}
        {children}
      </Link>
    </li>
  );
};

export default MenuItem;
