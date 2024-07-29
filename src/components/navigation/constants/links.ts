import { IIcon } from '~/interfaces/Icon.interface';

export default [
  {
    href: '/',
    name: 'Home',
    icon: 'home',
  },
  {
    href: '/challenges/01-profile-card',
    name: '01-Profile-card',
    icon: 'card-account-details',
  },
] as { href: string; name: string; icon: IIcon }[];
