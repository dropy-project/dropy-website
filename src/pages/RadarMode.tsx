import React from 'react'

export default function RadarMode() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="flex flex-col w-4/5 h-3/5 items-center justify-center bg-white rounded-2xl">
          <div className="flex flex-col w-4/5">
            <div>
            <p className="text-4xl font-bold text-center font-space text-xl">Le Mode Radar</p>
            <div>
              <p className="text-center text-sm">Ne rate aucun drop même avec l’application fermée</p>
            </div>
            <div className="icon">icon</div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-col items-center justify-center w-full h-1/2 text-justify">
              <p className="text-sm mb-2 mt-5 text-center">Comment ça marche ?</p>
              <p className="text-xs leading-3">Nous utilisons une fonctionnalité de ton téléphone qui permet de suivre ta position en arrière plan, cela nous permet de t’envoyer une notification lorsque nous detectons que tu passe à côté d’un drop !</p>
            </div>  
            <div className="flex flex-col items-center justify-center w-full h-1/2">
              <p className="text-gray-600 body-font font-space-300 text-sm mb-2 mt-5 text-center">Est-ce que je vais perdre de la batterie ?</p>
              <p className="text-gray-600 body-font font-space-300 text-xs text-justify leading-3">L’application detecte automatiquement quand tu te deplace, le reste du temps elle reste inactive pour preserver un maximum la batterie. Tu ne devrais pas remarque de changements après avoir activé le mode radar.</p>
            </div>  
            <div className="flex flex-col items-center justify-center w-full h-1/2">
              <p className="text-sm mb-2 mt-5 text-center">Est-ce que vous me suivez à la trace ?</p>
              <p className="text-xs text-justify leading-3">Nous utilisons ta position uniquement pour calculer ta distance avec les drops autour de toi, une fois trouvés, ta position n’est pas sauvegardée. Il est donc impossible de te tracer avec Dropy !</p>
            </div>  
          </div>
        </div>
          </div>
    </div>
  )
}
