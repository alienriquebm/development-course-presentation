import React from 'react';
import SlideWithHeaderInfo from '@/app/Components/SlideWithHeaderInfo/SlideWithHeaderInfo';
import Image from 'next/image';
import MobileApps from '../assets/icon8.svg';
import MobileApps1 from '../assets/icon11.svg';
import { TransitionEnum } from '@/app/config/enums';

export const Slide24 = () => {
  return (
    <>
      <SlideWithHeaderInfo title="Class 1 - Apps Types" subtitle="Mobile Apps">
        <div className="flex flex-1 justify-center items-center">
          <Image src={MobileApps} alt="Mobile Apps" className="w-96" />
        </div>
      </SlideWithHeaderInfo>
      <SlideWithHeaderInfo
        title="Class 1 - Apps Types"
        subtitle="Mobile Apps"
        transition={TransitionEnum.FADE}
      >
        <div className="flex flex-1 justify-center items-center">
          <Image src={MobileApps1} alt="Mobile Apps" className="w-1/2" />
        </div>
      </SlideWithHeaderInfo>
    </>
  );
};
