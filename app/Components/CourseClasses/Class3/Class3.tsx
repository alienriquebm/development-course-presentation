import React from 'react';
import CoverSlide from '../../CoverSlide/CoverSlide';
import Section from '../../Section/Section';
import { Slide1 } from './Slides';
import QuestionsSlide from '../../QuestionsSlide/QuestionsSlide';

const Class3 = () => {
  return (
    <>
      <Section>
        <CoverSlide title="Clase 3" subtitle="Algoritmos - Continuación" />
        <Slide1 />
        <QuestionsSlide />
      </Section>
    </>
  );
};

export default Class3;
