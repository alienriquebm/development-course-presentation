import React from 'react';

import CoverSlide from '../../CoverSlide/CoverSlide';
import Section from '../../Section/Section';
import { Slide1, Slide2 } from './Slides';
import QuestionsSlide from '../../QuestionsSlide/QuestionsSlide';

const Class2 = () => {
  return (
    <>
      <Section>
        <CoverSlide title="Clase 2" subtitle="Algoritmos" />
        <Slide1 />
        <Slide2 />
        <QuestionsSlide />
      </Section>
    </>
  );
};

export default Class2;
