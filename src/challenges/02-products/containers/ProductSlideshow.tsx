import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useProduct } from '~/challenges/02-products/hooks/useProduct';
import { IProduct } from '~/challenges/02-products/interfaces/Product.interface';
import ProductPicture from '~/challenges/02-products/components/ProductPicture';
import styles from '~/challenges/02-products/styles/Product.module.scss';
import clsx from 'clsx';

const ProductSlideshow = () => {
  const { id } = useParams();
  const data = useProduct(+id).data as Required<IProduct>;

  const pictures = data.pictures;
  const [selected, setSelected] = useState(0);

  const productPickClassName = (index: number) =>
    clsx(
      'cursor-pointer mb-0-5',
      styles.productPick,
      { [styles.notSelected]: index !== selected },
      `border-${index === selected ? 'neutral' : 'transparent'}`
    );

  return (
    <div className='flex gap-0-75'>
      <div>
        {pictures.map((x, index) => {
          return (
            <ProductPicture
              src={x}
              key={index}
              alt={`Product thumbnail ${index}`}
              className={productPickClassName(index)}
              onClick={() => setSelected(index)}
            />
          );
        })}
      </div>
      <ProductPicture
        src={pictures[selected]}
        alt={data.name}
        className={styles.productThumbnail}
        priority={true}
      />
    </div>
  );
};

export default ProductSlideshow;
