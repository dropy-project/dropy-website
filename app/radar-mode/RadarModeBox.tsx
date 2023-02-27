import React from 'react';
import Image from 'next/image';
import radar from '../../assets/svgs/radar.png';

import styles from '../../styles/RadarMode.module.scss';

export const RadarModeBox = () => {
  return (
    <div className={styles.radar_box}>
    <div className={styles.box}>
      <div className={styles.inner_box}>
        <div>
          <p className={styles.radar_title}>Le Mode Radar</p>
          <div>
            <p className={styles.description}>Ne rate aucun drop même avec l’application fermée</p>
          </div>
          <div className={styles.icon_container}>
            <Image src={radar} width={52} height={52} alt='Radar' />
          </div>
        </div>
        <div className={styles.tutorial_container}>
          <div className={styles.tutorial_inner}>
            <p className={styles.tutorial_title}>Comment ça marche ?</p>
            <p className={styles.tutorial_text}>
              Nous utilisons une fonctionnalité de ton téléphone qui permet de suivre ta position en arrière plan,
              cela nous permet de t’envoyer une notification lorsque nous detectons que tu passe à côté d’un drop !
            </p>
          </div>
          <div className={styles.tutorial_inner}>
            <p className={styles.tutorial_title}>Est-ce que je vais perdre de la batterie ?</p>
            <p className={styles.tutorial_text}>
              L’application detecte automatiquement quand tu te deplace, le reste du temps elle reste inactive pour preserver un maximum la batterie.
              Tu ne devrais pas remarque de changements après avoir activé le mode radar.
            </p>
          </div>
          <div className={styles.tutorial_inner}>
            <p className={styles.tutorial_title}>Est-ce que vous me suivez à la trace ?</p>
            <p className={styles.tutorial_text}>
              Nous utilisons ta position uniquement pour calculer ta distance avec les drops autour de toi, une fois trouvés, ta position n’est pas sauvegardée.
              Il est donc impossible de te tracer avec Dropy !</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
