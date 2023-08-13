import React from 'react';
import CoverSlide from '../../CoverSlide/CoverSlide';
import Section from '../../Section/Section';
import { Slide1 } from './Slides';
import QuestionsSlide from '../../QuestionsSlide/QuestionsSlide';

const Class4 = () => {
  return (
    <>
      <Section>
        <CoverSlide title="Clase 4" subtitle="Algoritmos - Continuación" />
        <Slide1 />
        <QuestionsSlide />
      </Section>
    </>
  );
};

export default Class4;
