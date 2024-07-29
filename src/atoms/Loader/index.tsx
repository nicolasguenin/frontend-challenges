import clsx from 'clsx';
import { type ComponentPropsWithoutRef } from 'react';
import styles from '~/atoms/Loader/index.module.scss';
import Symbol from '~/atoms/Symbol';

const Loader = ({ className }: ComponentPropsWithoutRef<'svg'>) => {
  const loaderClassName = clsx(
    'block mx-auto my-0 fill-none stroke-neutral-400 stroke-1',
    styles.loader
  );

  return (
    <div className={className}>
      <Symbol className={loaderClassName} name='spinner' />
    </div>
  );
};

export default Loader;
