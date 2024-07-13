import React from 'react';

interface SymbolProps extends React.ComponentPropsWithoutRef<'svg'> {
  name: string;
}

const Symbol = ({ className, name, ...rest }: SymbolProps) => {
  const href = `/images/symbol-defs.svg#${name}`;
  return (
    <svg viewBox='0 0 24 24' className={className} {...rest}>
      <use href={href}></use>
    </svg>
  );
};

export default Symbol;
