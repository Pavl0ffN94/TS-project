import styles from './TemplateName.module.scss';
import { memo } from 'react';

interface TemplateNameProps { }

 const TemplateNameImpl = ({ }: TemplateNameProps) => (
  <div className={styles.templateName} >
    TemplateName Component
  </div>
);

export const TemplateName= memo(TemplateNameImpl)