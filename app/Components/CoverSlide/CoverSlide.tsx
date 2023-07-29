import React from 'react';
import { ICoverSlide } from './CoverSlideInterfaces';
import Image from 'next/image';
import Logo from './assets/logo.png';

const CoverSlide = ({ title, subtitle }: ICoverSlide) => {
  return (
    <section
      data-transition="slide"
      className="!flex !flex-col !justify-center !items-center gap-6"
    >
      <Image src={Logo} alt="alienriquebm logo" className="w-72" />
      <h3>Development Course</h3>
      {title && <h4 className="!m-0">{title}</h4>}
      {subtitle && <h6 className="!m-0">{subtitle}</h6>}
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
