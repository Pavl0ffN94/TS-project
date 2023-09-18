
import {ReactNode, memo} from 'react';
import styles from './Container.module.scss';

interface ContainerProps { 
  children: ReactNode,
}

 const ContainerImpl = ({ children }: ContainerProps) => (
  <div className={styles.container}>
   {children}
  </div>
);

export const Container = memo(ContainerImpl)