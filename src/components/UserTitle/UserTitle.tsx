import {LocalGithubUser} from 'types';
import styles from './UserTitle.module.scss';
import { memo } from 'react';

interface UserTitleProps extends Pick<LocalGithubUser, 'name' | 'login' | 'created'> { }

const localDate = Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})

 const UserTitleImpl = ({ created, login, name}: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(created))
  return(
  <div className={styles.userTitle} >
    <h2>{name}</h2>
    <h3>{login}</h3>
    <span>{joinedDate}</span>
  </div>
)};

export const UserTitle= memo(UserTitleImpl)