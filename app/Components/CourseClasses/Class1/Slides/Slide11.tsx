import React from 'react';
import Slide from '@/app/Components/Slide/Slide';
import Image from 'next/image';
import img4 from '../assets/4.jpeg';
import { BackgroundColorsEnum, TransitionEnum } from '@/app/config/enums';
export const Slide11 = () => {
  return (
    <Slide
      backgroundColor={BackgroundColorsEnum.AQUAMAINE}
      transition={TransitionEnum.NONE}
    >
      <Image src={img4} width={280} alt="Stop" />
    </Slide>
  );
};
