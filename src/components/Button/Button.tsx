import styles from './Button.module.scss';
import { memo } from 'react';

interface ButtonProps {
  children: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
 }

 const ButtonImpl = ({ children, onClick }: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);

export const Button = memo(ButtonImpl)