import { IIcon } from '~/interfaces/Icon.interface';

export default [
  {
    href: '/',
    name: 'Home',
    icon: 'home',
  },
  {
    href: '/challenges/01/profile-card',
    name: '01 Profile card',
    icon: 'card-account-details',
  },
  {
    href: '/challenges/02/products',
    name: '02 Add to bag',
    icon: 'shopping',
  },
  {
    href: '/challenges/03/mobile-navigation',
    name: '03 Mobile navigation',
    icon: 'cellphone',
  },
] as { href: string; name: string; icon: IIcon }[];
