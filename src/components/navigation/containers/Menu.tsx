import links from '~/components/navigation/constants/links';
import MenuItem from '~/components/navigation/components/MenuItem';
import { List } from '~/atoms';

const Menu = () => {
  return (
    <nav className='absolute bg-white border-right menu'>
      <List className='mt-0-25'>
        {links.map((link) => {
          return (
            <MenuItem key={link.name} href={link.href} icon={link.icon}>
              {link.name}
            </MenuItem>
          );
        })}
      </List>
    </nav>
  );
};

export default Menu;
