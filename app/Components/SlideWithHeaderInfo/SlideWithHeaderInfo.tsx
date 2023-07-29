import React from 'react';
import Slide from '../Slide/Slide';
import { ISlideWithHeaderInfo } from './SlideWithHeaderInfoInterfaces';
import { ISlide } from '../Slide/SlideInterfaces';

type SlideWithHeaderInfoProps = ISlideWithHeaderInfo & ISlide;

const SlideWithHeaderInfo = ({
  title,
  subtitle,
  children,
  ...props
}: SlideWithHeaderInfoProps) => {
  return (
    <Slide className="w-full h-full gap-0 !flex !flex-col" {...props}>
      <div
        className={`flex mt-10 ${
          subtitle ? 'justify-between' : 'justify-center'
        }`}
      >
        <small className="font-bold">{title}</small>
        {subtitle && <small>{subtitle}</small>}
      </div>
      <div className="flex flex-1">{children}</div>
    </Slide>
  );
};

export default SlideWithHeaderInfo;
