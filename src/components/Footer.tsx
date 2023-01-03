import React from 'react';
import { type NextPage } from 'next';
import styles from '../assets/styles/Footer.module.scss';

const Footer: NextPage = () => 
    <div className={styles.footer}>
      <p>Dropy | @2022 |</p>
      <a href="mailto:contact@dropy-app.com">contact@dropy-app.com |</a>
    <a href="/privacy-policy">privacy policy |</a>
    <a href="/terms-conditions">terms & conditions |</a>
    </div>

export default Footer;
