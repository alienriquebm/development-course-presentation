import React from 'react';
import SlideWithHeaderInfo from '@/app/Components/SlideWithHeaderInfo/SlideWithHeaderInfo';
import Image from 'next/image';
import WebApps from '../assets/icon6.svg';

export const Slide20 = () => {
  return (
    <SlideWithHeaderInfo title="Class 1 - Apps Types" subtitle="Web Apps">
      <div className="flex flex-1 justify-center items-center">
        <Image src={WebApps} alt="Web Apps" className="h-96" />
      </div>
    </SlideWithHeaderInfo>
  );
};
