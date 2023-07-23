import React from 'react';
import { ICoverSlide } from './CoverSlideInterfaces';
import Image from 'next/image';
import Logo from './assets/logo.png';

const CoverSlide = ({ title }: ICoverSlide) => {
  return (
    <section
      data-transition="slide"
      className="!flex !flex-col !justify-center !items-center gap-10"
    >
      <Image src={Logo} alt="alienriquebm logo" className="w-72" />
      <h3>Development Course</h3>
      {title && <h4>{title}</h4>}
      <p>
        <small>
          Created by{' '}
          <a href="mailto:alienriquebm@icloud.com">Ali Enrique Briceño</a>
        </small>
      </p>
    </section>
  );
};

export default CoverSlide;
