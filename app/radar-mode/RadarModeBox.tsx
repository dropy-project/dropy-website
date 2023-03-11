import React from 'react';
import Image from 'next/image';
import radar from '../../static/img/radar.png';

import styles from '../../styles/RadarMode.module.scss';

export const RadarModeBox = () => (
  <div id='radar-mode-box' className={styles.container}>
    <div className={styles.box}>
      <div className={styles.inner_box}>
        <div className={styles.header}>
          <p className={styles.title}>Le Mode Radar</p>
          <div className={styles.radar__description}>
            <p className={styles.description}>Ne rate aucun drop même avec l’application fermée</p>
          </div>
          <div className={styles.icon__container}>
            <Image src={radar} width={52} height={52} alt='Radar' />
          </div>
        </div>
        <div className={styles.tutorial__container}>
          <div className={styles.tutorial__inner}>
            <p className={styles.tutorial__title}>Comment ça marche ?</p>
            <p className={styles.tutorial__text}>
              Nous utilisons une fonctionnalité de ton téléphone qui permet de suivre ta position en arrière plan,
              cela nous permet de t’envoyer une notification lorsque nous detectons que tu passe à côté d’un drop !
            </p>
          </div>
          <div className={styles.tutorial__inner}>
            <p className={styles.tutorial__title}>Est-ce que je vais perdre de la batterie ?</p>
            <p className={styles.tutorial__text}>
              L’application detecte automatiquement quand tu te deplace, le reste du temps elle reste inactive pour preserver un maximum la batterie.
              Tu ne devrais pas remarque de changements après avoir activé le mode radar.
            </p>
          </div>
          <div className={styles.tutorial__inner}>
            <p className={styles.tutorial__title}>Est-ce que vous me suivez à la trace ?</p>
            <p className={styles.tutorial__text}>
              Nous utilisons ta position uniquement pour calculer ta distance avec les drops autour de toi, une fois trouvés, ta position n’est pas sauvegardée.
              Il est donc impossible de te tracer avec Dropy !</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
