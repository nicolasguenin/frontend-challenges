import { useGetUser } from '~/challenges/01-profile-card/hooks/useGetUser';
import { Button, Symbol } from '~/atoms';
import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import Skeleton from '~/atoms/Skeleton';

const ProfileCardSocial = ({ className }: ComponentPropsWithoutRef<'div'>) => {
  const { data, isLoading } = useGetUser();

  const rootClassName = clsx('flex flex-justify-center gap-1', className);

  if (!data || isLoading) {
    return (
      <div className={rootClassName}>
        <Skeleton height='24px' width='24px' />
        <Skeleton height='24px' width='24px' />
        <Skeleton height='24px' width='24px' />
        <Skeleton height='24px' width='24px' />
      </div>
    );
  }

  return (
    <div className={rootClassName}>
      {data.social.map((element) => {
        return (
          <Link key={element.name} href={element.url}>
            <Symbol name={element.name} size={24} />
          </Link>
        );
      })}
    </div>
  );
};

export default ProfileCardSocial;
