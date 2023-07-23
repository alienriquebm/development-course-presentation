import React from 'react';
import Image from 'next/image';
import Slide from '@/app/Components/Slide/Slide';

export const Slide1 = () => {
  return (
    <Slide className="!flex !flex-col !justify-center !items-center">
      <h3 className="!m-0">Ali Briceño</h3>
      <small>FullStack Developer</small>

      <small className="font-bold">Developer since 2000</small>
      <small className="font-bold mt-20 self-start">Current jobs:</small>
      <ul>
        <li>
          Fullstack developer on{' '}
          <a href="www.https://www.bandofcoders.com/">Bandofcoders</a> (trought
          Avalith inc) USA, Atlanta, Argentina
        </li>
        <li>
          Frontend developer on{' '}
          <a href="https://www.digheontech.com/">Digheontech</a>, Puerto Rico
        </li>
        <li>
          Graphic Designer{' '}
          <a href="https://www.proliancegc.com/">Proliance Inc</a>, Chicago USA
        </li>
      </ul>
    </Slide>
  );
};
