import { ComponentPropsWithoutRef, useState } from 'react';
import clsx from 'clsx';
import { useGetUser } from '~/challenges/01-profile-card/hooks/useGetUser';
import { Button } from '~/atoms';
import Skeleton from '~/atoms/Skeleton';
import { useMutateUser } from '~/challenges/01-profile-card/hooks/useMutateUser';
import ErrorMessage from '~/components/errors/ErrorMessage';
import ModalMessage from '~/challenges/01-profile-card/components/ModalMessage';

const ProfileCardFooter = ({ className }: ComponentPropsWithoutRef<'div'>) => {
  const { data, isLoading } = useGetUser();
  const [showModal, setShowModal] = useState(false);

  const rootClassName = clsx(
    'mx-1 flex flex-justify-space-evenly gap-1',
    className
  );

  const { mutate, isError, error } = useMutateUser();

  const follow = () => {
    mutate({ followed: true });
  };

  if (!data || isLoading) {
    return (
      <div className={rootClassName}>
        <Skeleton height='40px' width='120px' />
        <Skeleton height='40px' width='120px' />
      </div>
    );
  }
  return (
    <>
      <div className={rootClassName}>
        <Button
          disabled={data.followed}
          color='primary'
          lowercase
          roundedFull
          minWidth
          icon={data.followed ? 'heart' : undefined}
          onClick={follow}
        >
          {data.followed ? 'Followed' : 'Follow'}
        </Button>
        <Button
          outline
          lowercase
          roundedFull
          minWidth
          onClick={() => setShowModal(true)}
        >
          Message
        </Button>
      </div>

      {showModal && <ModalMessage close={() => setShowModal(false)} />}

      {isError && <ErrorMessage error={error} />}
    </>
  );
};

export default ProfileCardFooter;
