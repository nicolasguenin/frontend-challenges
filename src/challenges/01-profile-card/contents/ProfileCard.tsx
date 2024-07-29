import clsx from 'clsx';
import styles from './ProfileCard.module.scss';
import ProfileCardHero from '~/challenges/01-profile-card/containers/ProfileCardHero';
import ProfileCardName from '~/challenges/01-profile-card/components/ProfileCardName';
import ProfileCardSocial from '~/challenges/01-profile-card/components/ProfileCardSocial';
import ProfileCardDescription from '~/challenges/01-profile-card/components/ProfileCardDescription';
import ProfileCardFooter from '~/challenges/01-profile-card/containers/ProfileCardFooter';

const ProfileCard = () => {
  const rootClassName = clsx(styles.root, 'w-full overflow-hidden');

  return (
    <div className={rootClassName}>
      <ProfileCardHero />
      <ProfileCardName className='py-0-25 mx-1' />
      <ProfileCardSocial className='my-1-5' />
      <ProfileCardDescription />
      <ProfileCardFooter className='my-2' />
    </div>
  );
};

export default ProfileCard;
