import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import Rating from '~/atoms/Rating';
import { pluralize } from '~/utils';

type ProductRatingProps = ComponentPropsWithoutRef<'div'> & {
  rating: number;
  reviewers: number;
};

const ProductRating = ({
  className,
  rating,
  reviewers,
}: ProductRatingProps) => {
  const rootClassName = clsx(
    'flex flex-wrap flex-align-center gap-0-5',
    className
  );

  return (
    <div className={rootClassName}>
      <div className='flex flex-align-center gap-0-25'>
        <p className='text-sm text-600 my-0 lh-default'>{rating}</p>
        <Rating value={rating} color='primary' />
      </div>
      <p className='text-sm text-primary my-0 lh-default'>
        {reviewers} {pluralize('review', reviewers)}
      </p>
    </div>
  );
};

export default ProductRating;
