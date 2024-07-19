import React from 'react';

import clsx from 'clsx';
import { Loader, Symbol } from '~/atoms';
import styles from './index.module.scss';
import type { IColorElement } from '~/interfaces';

type ComponentProps = {
  block?: boolean;
  color?: IColorElement | 'transparent';
  disabled?: boolean;
  icon?: string;
  loading?: boolean;
  outline?: boolean;
  rounded?: boolean;
  text?: boolean;
};

type PolymorphicProps<
  Element extends React.ElementType,
  ComponentProps,
> = ComponentProps &
  Omit<React.ComponentProps<Element>, 'as'> & {
    as?: Element;
  };

const defaultElement = 'button';

const Button = <Element extends React.ElementType = typeof defaultElement>(
  props: PolymorphicProps<Element, ComponentProps>
) => {
  const {
    as: Component = defaultElement,
    block = false,
    children,
    className,
    color = 'neutral',
    icon = '',
    loading = false,
    outline = false,
    rounded = true,
    text = false,
    ...rest
  } = props;

  const getColor = (color: IColorElement | 'transparent', outline: boolean) => {
    return `${outline || color === 'transparent' ? color : 'white'}`;
  };

  const getBackgroundColor = (
    color: IColorElement | 'transparent',
    outline: boolean,
    text: boolean
  ) => {
    if (outline) {
      return 'bg-white';
    }

    if (color === 'transparent' || text) {
      return 'bg-transparent';
    }

    return `bg-${color}`;
  };

  const rootClassName = clsx([
    block ? 'block' : 'inline-block',
    { 'w-full': block },
    { 'rounded-md': rounded },
    getBackgroundColor(color, outline, text),
    `text-${getColor(color, outline)}`,
    'relative inline-block py-0-75 px-1 text-sm text-600 text-uppercase lh-default bordered',
    outline ? `border-${color} ${styles.outline}` : 'border-transparent',
    `text-decoration-${text ? 'underline' : 'none'}`,
    styles.button,
    styles[`button-${color}`],
    { [styles.buttonLoading]: loading },
    className,
  ]);

  return (
    <Component className={rootClassName} {...rest}>
      {!!icon && <Symbol name={icon} className='mr-0-75' />}
      {children}
      {loading && (
        <Loader
          className={
            block
              ? `${styles.buttonBlockLoader} inline-block ml-0-75`
              : styles.buttonLoader
          }
        />
      )}
    </Component>
  );
};

export default Button;
