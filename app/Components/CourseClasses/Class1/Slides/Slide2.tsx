import React from 'react';
import Image from 'next/image';
import img1 from '../assets/1.jpeg';
import Slide from '@/app/Components/Slide/Slide';

export const Slide2 = () => {
  return (
    <Slide>
      <Image src={img1} alt="do you want to be a developer?" className="w-72" />
      <h3>So... do you want to be a developer?</h3>
    </Slide>
  );
};
