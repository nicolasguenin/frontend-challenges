import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { currency } from '~/utils';

type ProductPriceProps = ComponentPropsWithoutRef<'div'> & {
  discountedPrice: number;
  price: number;
};

const ProductPrice = ({
  discountedPrice,
  price,
  ...rest
}: ProductPriceProps) => {
  return (
    <div {...rest}>
      {discountedPrice && (
        <s className='text-neutral-400'>{currency(discountedPrice)}</s>
      )}
      <span className='block text-lg text-600'>{currency(price)}</span>
    </div>
  );
};

export default ProductPrice;
