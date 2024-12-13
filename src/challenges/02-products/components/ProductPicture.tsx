import Image, { ImageProps } from 'next/image';
import clsx from 'clsx';

const ProductPicture = ({ className, src, alt, ...rest }: ImageProps) => {
  const rootClassName = clsx('relative', className);

  return (
    <figure className={rootClassName}>
      <Image src={src} alt={alt} className='img-cover' fill {...rest} />
    </figure>
  );
};

export default ProductPicture;
