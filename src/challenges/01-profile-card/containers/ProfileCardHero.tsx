import clsx from 'clsx';
import styles from './ProfileCardHero.module.scss';
import { Avatar } from '~/atoms';
import { useGetUser } from '~/challenges/01-profile-card/hooks/useGetUser';
import Skeleton from '~/atoms/Skeleton';

const ProfileCardHero = () => {
  const rootClassName = clsx(styles.root, 'relative flex flex-justify-center');

  const { data, isLoading } = useGetUser();

  return (
    <div className={rootClassName}>
      {!isLoading && data ? (
        <Avatar
          rounded
          src={`/images/avatars/${data.avatar}`}
          className='my-1'
          size={96}
        />
      ) : (
        <Skeleton className='my-1' height='96px' width='96px' rounded='full' />
      )}
    </div>
  );
};

export default ProfileCardHero;
