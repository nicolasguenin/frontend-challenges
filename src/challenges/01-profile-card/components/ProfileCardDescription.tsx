import { useGetUser } from '~/challenges/01-profile-card/hooks/useGetUser';
import Skeleton from '~/atoms/Skeleton';

const ProfileCardDescription = () => {
  const { data, isLoading } = useGetUser();

  if (data && !isLoading) {
    return (
      <p className='text-center mx-1 text-sm text-600'>{data.description}</p>
    );
  }

  return (
    <>
      <Skeleton height='16px' width='70%' className='mb-0-25 mx-auto' />
      <Skeleton height='16px' width='70%' className='mb-0-25 mx-auto' />
      <Skeleton height='16px' width='70%' className='mb-0-25 mx-auto' />
    </>
  );
};

export default ProfileCardDescription;
