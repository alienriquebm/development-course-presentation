import React from 'react';
import { ISection } from './SectionInterfaces';

const Section = ({ children }: ISection) => {
  return (
    <section
      data-transition="slide"
      className="!flex !flex-col !justify-center !items-center gap-10"
    >
      {children}
    </section>
  );
};

export default Section;
