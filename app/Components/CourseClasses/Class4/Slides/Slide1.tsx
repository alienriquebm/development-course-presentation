import React from 'react';
import Slide from '@/app/Components/Slide/Slide';
import Image from 'next/image';
import Array1 from '../assets/Array1.png';
import Array2 from '../assets/Array2.png';
import Array3 from '../assets/Array3.png';
import Array4 from '../assets/Array4.png';
import Array5 from '../assets/Array5.png';
import { BackgroundColorsEnum } from '@/app/config/enums';

export const Slide1 = () => {
  return (
    <>
      <Slide autoAnimate>
        <h5>Algoritmos</h5>
        <h2>Listas (Vectores)</h2>
      </Slide>
      <Slide autoAnimate>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h2>Algoritmos - Listas (Vectores)</h2>
          <p>
            Una lista o vector es una estructura de datos que permite almacenar
            y organizar un conjunto de elementos de manera secuencial. Cada
            elemento de la lista tiene una posición única, llamada índice, que
            indica su ubicación dentro de la lista.
          </p>
          <small>
            Las listas son útiles cuando necesitamos trabajar con múltiples
            valores del mismo tipo o cuando queremos mantener un orden
            específico en los elementos.
          </small>
        </div>
      </Slide>
      <Slide autoAnimate backgroundColor={BackgroundColorsEnum.WHITE}>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h4>Algoritmos - Listas (Vectores)</h4>
          <h6>Lista de números</h6>
          <Image src={Array1} alt="Array1" className="w-1/2" />
        </div>
      </Slide>
      <Slide autoAnimate backgroundColor={BackgroundColorsEnum.WHITE}>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h4>Algoritmos - Listas (Vectores)</h4>
          <h6>Lista de números</h6>
          <Image src={Array2} alt="Array2" className="w-1/2" />
        </div>
      </Slide>
      <Slide autoAnimate backgroundColor={BackgroundColorsEnum.WHITE}>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h4>Algoritmos - Listas (Vectores)</h4>
          <h6>Lista de números</h6>
          <Image src={Array3} alt="Array3" className="w-1/2" />
        </div>
      </Slide>
      <Slide autoAnimate backgroundColor={BackgroundColorsEnum.WHITE}>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h4>Algoritmos - Listas (Vectores)</h4>
          <h6>Lista de nombres</h6>
          <Image src={Array4} alt="Array4" className="w-1/2" />
        </div>
      </Slide>
      <Slide autoAnimate backgroundColor={BackgroundColorsEnum.WHITE}>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h4>Algoritmos - Listas (Vectores)</h4>
          <h6>Lista de colores</h6>
          <Image src={Array5} alt="Array5" className="w-1/2" />
        </div>
      </Slide>
    </>
  );
};
