import React from 'react';
import SlideWithHeaderInfo from '@/app/Components/SlideWithHeaderInfo/SlideWithHeaderInfo';
import Image from 'next/image';
import WebApps from '../assets/8.png';

export const Slide21 = () => {
  return (
    <SlideWithHeaderInfo title="Class 1 - Apps Types" subtitle="Web Apps">
      <div className="flex flex-1 justify-center items-center">
        <Image src={WebApps} alt="Web Apps" className="w-5/6" />
      </div>
    </SlideWithHeaderInfo>
  );
};
