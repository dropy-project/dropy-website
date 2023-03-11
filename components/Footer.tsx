import React from 'react';
import styles from '../styles/Footer.module.scss';

export const Footer: React.FC = () => (
  <div className={styles.footer}>
    <p>Dropy | ©2023 |</p>
    <a href='mailto:contact@dropy-app.com'>contact@dropy-app.com |</a>
    <a href='/privacy-policy'>privacy policy |</a>
    <a href='/terms-conditions'>terms & conditions</a>
  </div>
);

