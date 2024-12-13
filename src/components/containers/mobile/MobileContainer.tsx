import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

type MobileContainerProps = ComponentPropsWithoutRef<'div'> & {
  innerClass?: string;
};

const MobileContainer = ({
  children,
  className,
  innerClass,
  ...rest
}: MobileContainerProps) => {
  const rootClass = clsx('centered-absolute mobile-container', className);
  const contentClass = clsx('centered-absolute mobile-content', innerClass);

  return (
    <div {...rest} className={rootClass}>
      <div className={contentClass}>{children}</div>
    </div>
  );
};

export default MobileContainer;
