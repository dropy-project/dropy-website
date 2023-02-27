import React from 'react';
import Image from 'next/image';

import styles from '../styles/BackgroundMap.module.scss';

import map from '../static/svg/map.svg';

export const BackgroundMap: React.FC = () => (
  <div className={styles.container}>
    <Image src={map} alt='background' />
  </div>
);

