import { ComponentPropsWithoutRef } from 'react';
import { notFound, useParams } from 'next/navigation';
import clsx from 'clsx';
import { useProduct } from '~/challenges/02-products/hooks/useProduct';
import { Loader } from '~/atoms';
import ProductSlideshow from '~/challenges/02-products/containers/ProductSlideshow';
import ProductPrice from '~/challenges/02-products/components/ProductPrice';

const Product = ({ className }: ComponentPropsWithoutRef<'div'>) => {
  const { id } = useParams();
  const { data: product, isLoading } = useProduct(+id);

  if (isLoading) {
    return (
      <div className={clsx('flex flex-justify-center my-5', className)}>
        <Loader className='text-3xl' />
      </div>
    );
  }

  const rootClassName = clsx('flex gap-1', className);

  if (product) {
    return (
      <>
        <div className={rootClassName}>
          <ProductSlideshow />
          <div>
            <p className='mb-0 text-tn text-600 text-primary text-uppercase'>
              {product.brand}
            </p>
            <h1 className='my-0-25 text-xl'>{product.name}</h1>
            <p className='text-sm'>{product.description}</p>
            <ProductPrice
              className='my-2'
              discountedPrice={product.discountedPrice}
              price={product.price}
            />
          </div>
        </div>
      </>
    );
  }

  return notFound();
};

export default Product;
