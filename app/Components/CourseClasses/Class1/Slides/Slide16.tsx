import React from 'react';
import SlideWithHeaderInfo from '@/app/Components/SlideWithHeaderInfo/SlideWithHeaderInfo';
import DesktopApps from '../assets/icon7.svg';
import Image from 'next/image';

export const Slide16 = () => {
  return (
    <SlideWithHeaderInfo title="Class 1 - Apps Types" subtitle="Desktop Apps">
      <div className="flex flex-1 justify-center items-center">
        <Image src={DesktopApps} alt="Desktop Apps" className="h-96" />
      </div>
    </SlideWithHeaderInfo>
  );
};
