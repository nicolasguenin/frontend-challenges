import { type ComponentPropsWithoutRef } from 'react';
import { useGetUser } from '~/challenges/01-profile-card/hooks/useGetUser';
import Skeleton from '~/atoms/Skeleton';

const ProfileCardName = ({ ...rest }: ComponentPropsWithoutRef<'div'>) => {
  const { data, isLoading } = useGetUser();

  return (
    <div {...rest}>
      {!isLoading && data ? (
        <>
          <p className='mb-0-25 text-lg text-center text-600'>{data.name}</p>
          <p className='mt-0-25 mb-0 text-center text-sm text-neutral-500'>
            @{data.username}
          </p>
        </>
      ) : (
        <>
          <Skeleton
            className='mt-0-75 mb-0-5 mx-auto'
            height='18px'
            width='80%'
          />
          <Skeleton
            className='mt-0-5 mb-0-75 mx-auto'
            height='12px'
            width='40%'
          />
        </>
      )}
    </div>
  );
};

export default ProfileCardName;
