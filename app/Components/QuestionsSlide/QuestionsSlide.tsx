import React from 'react';
import Slide from '../Slide/Slide';
import { BackgroundColorsEnum } from '@/app/config/enums';

const QuestionsSlide = () => {
  return (
    <Slide backgroundColor={BackgroundColorsEnum.BLUE}>
      <h5>✅ Fin de la clase ✅</h5>
      <h2>¿Preguntas? ¿Opiniones?</h2>
    </Slide>
  );
};

export default QuestionsSlide;
