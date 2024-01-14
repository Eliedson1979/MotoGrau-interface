import React from 'react';
import motograuLogo from '@/assets/logos/moto-grau.png';
import wallStreetLogo from '@/assets/logos/wallStreetBull.png';
import hypetechLogo from '@/assets/logos/hypetech.png'; // Assuming you have a hypetechLogo

import motograuHTP from '@/games/motograu/components/HowToPlay/how-to-play';
import wallStreetHTP from '@/games/wall-street/components/HowToPlay/how-to-play';
import hypetechHTP from '@/core/components/provably-fair/how-to-play';

const gameLogos = {
  motograu: motograuLogo,
  'wall-street': wallStreetLogo,
  default: hypetechLogo,
};

const howToPlayComponents = {
  motograu: motograuHTP,
  'wall-street': wallStreetHTP,
  default: hypetechHTP,
};

export const getGameLogo = (gameName) => {
  const logo = gameLogos[gameName] || gameLogos.default;
  const logoClassName = gameName === 'motograu' ? 'h-8 w-16' : 'h-8 w-26';
  return <img src={logo} className={logoClassName} alt="" />;
};

export const getHowToPlay = (gameName) => {
  return howToPlayComponents[gameName] || howToPlayComponents.default;
};
