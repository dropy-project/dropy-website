import React from 'react';
import RadarBox from 'components/RadarBox';
import BackgroundMap from '../components/BackgroundMap';
import Footer from '../components/Footer';

export default function RadarMode() {
  return (
    <>
      <BackgroundMap />
      <RadarBox />
      <Footer />
    </>

  );
}
