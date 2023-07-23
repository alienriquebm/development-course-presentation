import React from 'react';
import Section from '../../Section/Section';
import CoverSlide from '../../CoverSlide/CoverSlide';
import {
  Slide1,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
} from './Slides';

const Class1 = () => {
  return (
    <>
      <Section>
        <CoverSlide title="Class 1" />
        <Slide1 />
      </Section>
      <Section>
        <Slide2 />
        <Slide3 />
        <Slide4 />
        <Slide5 />
        <Slide6 />
        <Slide7 />
        <Slide8 />
        <Slide9 />
        <Slide10 />
        <Slide11 />
        <Slide12 />
        <Slide13 />
      </Section>
      <Section>
        <Slide14 />
      </Section>
    </>
  );
};

export default Class1;
