import React from 'react';
import { ISlide } from './SlideInterfaces';
import { TransitionEnum } from '@/app/config/enums';

const Slide = ({
  children,
  className,
  backgroundColor,
  autoAnimate,
  transition,
}: ISlide) => {
  return (
    <section
      data-background-color={backgroundColor}
      data-auto-animate={autoAnimate}
      data-transition={transition ? transition : TransitionEnum.SLIDE}
      className={
        className
          ? className
          : '!flex !flex-col !justify-center !items-center !gap-10'
      }
    >
      {children}
    </section>
  );
};

export default Slide;
