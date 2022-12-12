import React from 'react';
import Image from 'next/image';
import map from '../../public/img/map.svg';

export default function RadarMode() {

  return (
    <div className="z-0 fixed w-screen h-screen">
      <Image src={map} alt="background" layout="fill" objectFit='cover' />
    </div>
  )
}
