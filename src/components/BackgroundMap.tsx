import React from 'react';
import { type NextPage } from 'next';
import Image from 'next/image';
import map from 'assets/svgs/map.svg';
import styles from 'assets/styles/BackgroundMap.module.scss';

const BackgroundMap: NextPage = () => (
  <div className={styles.container}>
    <Image src={map} alt='background' />
  </div>
);

export default BackgroundMap;
