import { memo } from 'react';
import { ThemeSwitcher } from 'components/ThemeSwitcher';
import styles from './TheHeader.module.scss';

 const TheHeaderImpl = () => {
 return (
  <div className={styles.header} >
    <div className={styles.logo}>
      definder
    </div>
    <ThemeSwitcher />
  </div>
);
} 

export const TheHeader= memo(TheHeaderImpl)
