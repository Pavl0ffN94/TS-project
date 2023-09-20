import styles from './InfoItem.module.scss';
import { memo } from 'react';

export interface InfoItemProps {
  icon: React.ReactNode,
  text?: string | null,
  isLink?: boolean,
 }

 const InfoItemImpl = ({icon, text, isLink}: InfoItemProps) => {
  const currentText = text || 'Not Avalible';
  let currentHref= '';
  if(isLink) {
    currentHref = text && text.startsWith('http') ? text : `https://${text}`;
  }


  return(
  <div className={`${styles.infoItem}${text 
  ? '' 
  : ` ${styles.empty}`}`} 
  >
  {icon}
  <div>
    {isLink && text ? (
      <a 
      href={currentHref}
      target='blank'
      rel='noreferrer'
      className={styles.link}
      >
        {currentText}
      </a>
    ) : currentText}
  </div>
  </div>
);
  }
export const InfoItem= memo(InfoItemImpl)