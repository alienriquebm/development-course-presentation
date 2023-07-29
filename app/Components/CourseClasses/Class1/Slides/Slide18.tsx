import React from 'react';
import SlideWithHeaderInfo from '@/app/Components/SlideWithHeaderInfo/SlideWithHeaderInfo';
import Image from 'next/image';
import DesktopApps from '../assets/5.png';
import { TransitionEnum } from '@/app/config/enums';

export const Slide18 = () => {
  return (
    <SlideWithHeaderInfo
      title="Class 1 - Apps Types"
      subtitle="Desktop Apps"
      transition={TransitionEnum.FADE}
    >
      <div className="flex flex-1 justify-center items-center">
        <Image src={DesktopApps} alt="Desktop Apps" className="w-5/6" />
      </div>
    </SlideWithHeaderInfo>
  );
};
