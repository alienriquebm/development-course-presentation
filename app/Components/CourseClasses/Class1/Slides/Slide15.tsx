import React from 'react';
import Slide from '@/app/Components/Slide/Slide';
import Image from 'next/image';
import DesktopApps from '../assets/icon7.svg';
import WebApps from '../assets/icon6.svg';
import MobileApps from '../assets/icon8.svg';

export const Slide15 = () => {
  return (
    <Slide className="gap-0">
      <h2 className="!m-0">Apps types</h2>
      <h6>(Applications, executables, binaries)</h6>
      <div className="flex mt-20">
        <div className="flex flex-col fragment">
          <Image src={DesktopApps} alt="Desktop Apps" className="h-32" />
          <small>Desktop Apps</small>
        </div>
        <div className="flex flex-col fragment">
          <Image src={WebApps} alt="Web Apps" className="h-32" />
          <small>Web Apps</small>
        </div>
        <div className="flex flex-col fragment">
          <Image src={MobileApps} alt="Mobile Apps" className="h-32" />
          <small>Mobile Apps</small>
        </div>
      </div>
    </Slide>
  );
};
