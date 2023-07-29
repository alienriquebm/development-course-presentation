import React from 'react';
import SlideWithHeaderInfo from '@/app/Components/SlideWithHeaderInfo/SlideWithHeaderInfo';
import Image from 'next/image';
import DesktopApps from '../assets/icon9.svg';

export const Slide17 = () => {
  return (
    <SlideWithHeaderInfo title="Class 1 - Apps Types" subtitle="Desktop Apps">
      <div className="flex flex-1 justify-center items-center">
        <Image src={DesktopApps} alt="Desktop Apps" className="h-96" />
      </div>
    </SlideWithHeaderInfo>
  );
};
