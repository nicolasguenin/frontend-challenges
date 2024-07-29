import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useGetUser } from '~/challenges/01-profile-card/hooks/useGetUser';
import { Symbol } from '~/atoms';
import Skeleton from '~/atoms/Skeleton';
import { IIcon } from '~/interfaces/Icon.interface';

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
            <Symbol name={element.name as IIcon} size={24} />
          </Link>
        );
      })}
    </div>
  );
};

export default ProfileCardSocial;
