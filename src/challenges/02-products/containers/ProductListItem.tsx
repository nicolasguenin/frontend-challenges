import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { IProductListItem } from '~/challenges/02-products/interfaces/Product.interface';
import ProductPicture from '~/challenges/02-products/components/ProductPicture';
import styles from '~/challenges/02-products/styles/Product.module.scss';
import ProductRating from '~/challenges/02-products/containers/ProductRating';
import { excerpt } from '~/utils';
import ProductPrice from '~/challenges/02-products/components/ProductPrice';

type IProductListItemProps = ComponentPropsWithoutRef<'div'> & {
  product: IProductListItem;
};

const ProductListItem = ({
  className,
  product,
  ...rest
}: IProductListItemProps) => {
  const thumbnail = product.pictures[0];

  const rootClassName = clsx('flex gap-1 cursor-pointer', className);

  const router = useRouter();
  const navigateToProduct = () => {
    router.push(`/challenges/02/products/${product.id}`);
  };

  return (
    <div onClick={navigateToProduct} className={rootClassName} {...rest}>
      <ProductPicture
        src={thumbnail}
        alt={product.name}
        className={styles.productListItemThumbnail}
        priority={true}
      />

      <div className='py-1 flex flex-grow flex-align-center flex-justify-space-between gap-4'>
        <div>
          <h2 className='my-0'>{product.name}</h2>
          <p className='text-sm'>{product.sku}</p>
          <ProductRating
            className='my-0-75'
            rating={product.rating}
            reviewers={product.reviewers}
          />
          <p className='mb-0'>{excerpt(product.description)}</p>
        </div>
        <ProductPrice
          discountedPrice={product.discountedPrice}
          price={product.price}
        />
      </div>
    </div>
  );
};

export default ProductListItem;
