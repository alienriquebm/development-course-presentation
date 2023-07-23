import React from 'react';
import Slide from '@/app/Components/Slide/Slide';
import Image from 'next/image';
import ContinuousLearningImg from '../assets/icon5.svg';
import SelfLearning from '../assets/icon4.svg';

export const Slide9 = () => {
  return (
    <Slide autoAnimate>
      <h3>There is no exist the most complete programming course.</h3>
      <div className="flex">
        <div className="flex flex-col">
          <Image
            src={ContinuousLearningImg}
            alt="Continuous learning"
            className="h-24"
          />
          <p>Continuous learning</p>
        </div>
        <div className="flex flex-col">
          <Image
            src={SelfLearning}
            alt="Continuous learning"
            className="h-24"
          />
          <p>Self learning</p>
        </div>
      </div>
    </Slide>
  );
};
