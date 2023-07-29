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
  Slide15,
  Slide16,
  Slide17,
  Slide18,
  Slide19,
  Slide1A,
  Slide2,
  Slide20,
  Slide21,
  Slide22,
  Slide23,
  Slide24,
  Slide25,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
} from './Slides';
import QuestionsSlide from '../../QuestionsSlide/QuestionsSlide';

const Class1 = () => {
  return (
    <>
      <Section>
        <CoverSlide title="Class 1" />
        <Slide1 />
        <Slide1A />
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
        <Slide15 />
        <Slide16 />
        <Slide17 />
        <Slide18 />
        <Slide19 />
        <Slide20 />
        <Slide21 />
        <Slide22 />
        <Slide23 />
        <Slide24 />
        <Slide25 />
        <QuestionsSlide />
      </Section>
    </>
  );
};

export default Class1;
