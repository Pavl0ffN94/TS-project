import {ReactComponent as CompanuIcon } from 'assets/icon-company.svg';
import {ReactComponent as LocationIcon } from 'assets/icon-location.svg';
import {ReactComponent as TwitterIcon} from 'assets/icon-twitter.svg';
import {ReactComponent as BlogIcon } from 'assets/icon-website.svg';

import {LocalGithubUser} from 'types';
import styles from './UserInfo.module.scss';
import { memo } from 'react';
import {InfoItem, InfoItemProps} from 'components/InfoItem';

interface UserInfoProps extends Pick<LocalGithubUser, 'company' | 'blog' | 'location' | 'twitter'> { }

 const UserInfoImpl = ({ blog, company, location, twitter  }: UserInfoProps) => {
  const items : InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,

    },
    {
      icon: <CompanuIcon />,
      text: company,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true,
    }
  ]
  return(
  <div className={styles.userInfo} >
    {items.map(((item, index) => (
      <InfoItem 
      {...item}
      key={index}
      />
    ))  )}
  </div>
);
  }
export const UserInfo= memo(UserInfoImpl)