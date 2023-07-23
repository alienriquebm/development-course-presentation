import React from 'react';
import Slide from '@/app/Components/Slide/Slide';
import Image from 'next/image';
import img4 from '../assets/4.jpeg';
import { TransitionEnum } from '@/app/config/enums';
export const Slide10 = () => {
  return (
    <Slide backgroundColor="aquamarine" transition={TransitionEnum.NONE}>
      <h3>So... ready to start?</h3>
    </Slide>
  );
};
