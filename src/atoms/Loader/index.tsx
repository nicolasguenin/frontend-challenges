import clsx from 'clsx';
import React from 'react';
import styles from '~/atoms/Loader/index.module.scss';
import Symbol from '~/atoms/Symbol';

const Loader = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'svg'>) => {
  const loaderClassName = clsx(
    'block mx-auto my-0 fill-none stroke-neutral-400 stroke-1',
    styles.loader
  );

  return (
    <div className={className}>
      <Symbol className={loaderClassName} name='spinner' {...rest} />
    </div>
  );
};

export default Loader;
