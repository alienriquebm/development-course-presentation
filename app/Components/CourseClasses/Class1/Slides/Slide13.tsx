import React from 'react';
import Image from 'next/image';
import Slide from '@/app/Components/Slide/Slide';
import Learning from '../assets/icon1.svg';
import DevelopmentTechnologies from '../assets/icon2.svg';
import DevCommunity from '../assets/icon3.svg';

export const Slide13 = () => {
  return (
    <Slide>
      <small>We need know basic english because...</small>
      <div className="flex">
        <div className="flex flex-col fragment">
          <Image src={Learning} alt="Learning" className="h-32" />
          <small>Learning</small>
        </div>
        <div className="flex flex-col fragment">
          <Image
            src={DevelopmentTechnologies}
            alt="Development technologies"
            className="h-32"
          />
          <small>Development technologies</small>
        </div>
        <div className="flex flex-col fragment">
          <Image src={DevCommunity} alt="Dev community" className="h-32" />
          <small>Dev community</small>
        </div>
      </div>
    </Slide>
  );
};
