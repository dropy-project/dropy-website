import React from 'react';
import { type NextPage } from "next";
import Image from 'next/image';
import radar from '../../public/img/radar.png';
import styles from '../styles/RadarBox.module.scss';

const RadarMode: NextPage = () => {
  return (
    <div className={styles.radar_box}>
        <div className="flex flex-col w-80 h-3/5 items-center justify-center bg-white rounded-2xl shadow-2xl">
          <div className="flex flex-col w-4/5 mt-6 mb-6">
            <div>
            <p className="text-xl font-bold text-center font-space text-darkGrey">Le Mode Radar</p>
            <div>
              <p className="text-center text-xs font-space text-grey leading-3">Ne rate aucun drop même avec l’application fermée</p>
            </div>
            <div className="flex items-center justify-center mt-6">
							<Image src={radar} width={52} height={52} alt="Radar" />
						</div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-col items-center justify-center w-full h-1/2 text-justify">
              <p className="text-sm mb-2 mt-5 font-medium font-space text-center text-darkGrey">Comment ça marche ?</p>
              <p className="text-xs leading-3 font-space text-grey">Nous utilisons une fonctionnalité de ton téléphone qui permet de suivre ta position en arrière plan, cela nous permet de t’envoyer une notification lorsque nous detectons que tu passe à côté d’un drop !</p>
            </div>  
            <div className="flex flex-col items-center justify-center w-full h-1/2">
              <p className="text-darkGray body-font font-medium font-space text-sm mb-2 mt-5 text-center text-darkGrey">Est-ce que je vais perdre de la batterie ?</p>
              <p className="text-grey font-space text-xs text-justify leading-3">L’application detecte automatiquement quand tu te deplace, le reste du temps elle reste inactive pour preserver un maximum la batterie. Tu ne devrais pas remarque de changements après avoir activé le mode radar.</p>
            </div>  
            <div className="flex flex-col items-center justify-center w-full h-1/2">
              <p className="text-sm mb-2 mt-5 text-center font-medium font-space text-darkGrey">Est-ce que vous me suivez à la trace ?</p>
              <p className="text-xs text-grey text-justify leading-3 font-space">Nous utilisons ta position uniquement pour calculer ta distance avec les drops autour de toi, une fois trouvés, ta position n’est pas sauvegardée. Il est donc impossible de te tracer avec Dropy !</p>
            </div>  
          </div>
        </div>
          </div>
    </div>
  )
}

export default RadarMode;
