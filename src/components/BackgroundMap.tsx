import React from 'react';
import Image from 'next/image';
import map from '../../public/img/map.svg';
import styles from '../styles/BackgroundMap.module.scss';

export default function RadarMode() {

  return (
    <div className={styles.container}>
      <Image src={map} alt="background" />
    </div>
  )
}
