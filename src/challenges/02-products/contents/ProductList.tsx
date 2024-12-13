import { ComponentPropsWithoutRef, lazy } from 'react';
import clsx from 'clsx';
import { useProducts } from '~/challenges/02-products/hooks/useProducts';
import { Loader } from '~/atoms';

const ProductListItem = lazy(
  () => import('~/challenges/02-products/containers/ProductListItem')
);

const ProductList = ({ className }: ComponentPropsWithoutRef<'div'>) => {
  const { data, isLoading } = useProducts();

  if (isLoading) {
    return (
      <div className={clsx('flex flex-justify-center my-5', className)}>
        <Loader className='text-3xl' />
      </div>
    );
  }

  if (data) {
    return (
      <div>
        {data.map((product) => {
          return (
            <ProductListItem
              key={product.id}
              className={clsx('m-3', className)}
              product={product}
            />
          );
        })}
      </div>
    );
  }
  return <div className={className}>No result&hellip;</div>;
};

export default ProductList;
