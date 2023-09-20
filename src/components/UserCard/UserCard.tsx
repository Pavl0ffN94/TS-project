import { memo } from 'react';
import styles from './UserCard.module.scss';
import {UserStat} from 'components/UserStat';
import {LocalGithubUser} from 'types';
import {UserTitle} from 'components/UserTitle';
import {UserInfo} from 'components/UserInfo';

interface UserCardProps extends LocalGithubUser { }

const UserCardImpl = (props: UserCardProps) => (
  <div className={styles.userCard} >
    <img 
    src={props.avatar} 
    alt={props.login} 
    className={styles.avatar}
    />
    <UserTitle 
    created={props.created}
    name={props.name}
    login={props.login}
    />
    <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}` }`}>
      {props.bio || 'This profile has no bio'}
    </p>
    <UserStat
    repos={props.repos}
    followers={props.followers}
    following={props.following}
     />
     <UserInfo 
     blog={props.blog}
     company={props.blog}
     location={props.location}
     twitter={props.twitter}
     />
  </div>
);

export  const UserCard = memo(UserCardImpl)