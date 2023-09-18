import { memo } from 'react';
import styles from './UserCard.module.scss';
import {UserStat} from 'components/UserStat';
import {LocalGithubUser} from 'types';

interface UserCardProps extends LocalGithubUser { }

const UserCardImpl = (props: UserCardProps) => (
  <div className={styles.userCard} >
    <UserStat
    repos={props.repos}
    followers={props.followers}
    following={props.following}
     />
  </div>
);

export  const UserCard = memo(UserCardImpl)