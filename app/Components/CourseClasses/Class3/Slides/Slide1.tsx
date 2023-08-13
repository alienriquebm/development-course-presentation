import React from 'react';
import Slide from '@/app/Components/Slide/Slide';
import Image from 'next/image';
import CupOfTea from '../assets/2-cup-of-tea.png';

export const Slide1 = () => {
  return (
    <>
      <Slide autoAnimate>
        <h5>Algoritmos</h5>
        <h2>Compilador</h2>
      </Slide>
      <Slide autoAnimate>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h2>Algoritmos - Compilador</h2>
          <p>
            Un compilador es una herramienta que traduce el código escrito en un
            lenguaje de programación a un lenguaje que la computadora pueda
            entender y ejecutar. De manera similar, nuestro cerebro puede actuar
            como un compilador cuando seguimos un algoritmo paso a paso para
            resolver un problema.
          </p>
        </div>
      </Slide>
      <Slide autoAnimate>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h2>Algoritmos - Compilador</h2>
          <Image src={CupOfTea} alt="Cup of Tea" className="w-32" />
          <p>
            Usando el ejemplo de la taza de té, el algoritmo consta de una serie
            de pasos específicos, como calentar agua, agregar una bolsita de té,
            esperar unos minutos y luego disfrutar de tu taza de té. Nuestro
            cerebro funciona como un compilador que sigue estos pasos uno por
            uno para lograr el resultado deseado.
          </p>
        </div>
      </Slide>
      <Slide autoAnimate>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h2>Algoritmos - Compilador</h2>
          <p>
            Cuando leemos el algoritmo, nuestra mente interpreta cada paso y lo
            traduce en acciones concretas que podemos realizar. Por ejemplo,
            cuando leemos el paso de calentar agua, nuestro cerebro sabe que
            necesita encender la cocina, llenar una olla con agua y esperar a
            que hierva. Luego, cuando leemos el paso de agregar una bolsita de
            té, nuestro cerebro sabe que debe buscar una bolsita de té y
            colocarla en la taza. Y así sucesivamente, siguiendo cada paso del
            algoritmo.
          </p>
        </div>
      </Slide>
      <Slide autoAnimate>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h2>Algoritmos - Compilador</h2>
          <p>
            Al seguir estos pasos paso a paso, nuestro cerebro actúa como un
            compilador que traduce el algoritmo en acciones concretas y nos
            ayuda a resolver el problema de hacer una taza de té. De manera
            similar, cuando escribimos código en un lenguaje de programación, el
            compilador traduce ese código en instrucciones que la computadora
            puede entender y ejecutar.
          </p>
        </div>
      </Slide>
    </>
  );
};
