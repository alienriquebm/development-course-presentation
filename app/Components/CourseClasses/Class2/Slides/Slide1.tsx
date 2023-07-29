import React from 'react';
import Slide from '@/app/Components/Slide/Slide';
import { BackgroundColorsEnum } from '@/app/config/enums';
import Image from 'next/image';
import Algorithm from '../assets/1-algorithm.png';
import CupOfTea from '../assets/2-cup-of-tea.png';
import EPSCupOfTea from '../assets/3-eps-cup-tea.png';
import EPSCupOfTeaZoomed from '../assets/4-eps-cup-tea-zoomed.png';
import Section from '@/app/Components/Section/Section';

export const Slide1 = () => {
  return (
    <>
      <Slide autoAnimate>
        <h2>Algoritmos</h2>
        <Image src={Algorithm} alt="Algoritmos" className="w-96" />
      </Slide>
      <Slide autoAnimate>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h2>Algoritmos</h2>
          <Image src={Algorithm} alt="Algoritmos" className="w-32" />
          <p>
            Es un conjunto de instrucciones paso a paso que se utilizan para
            resolver un problema o realizar una tarea específica. Son la base de
            cualquier programa o software.
          </p>
        </div>
      </Slide>
      <Slide autoAnimate>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h2>Algoritmos</h2>
          <p>
            En nuestra vida diaria programamos algoritmos sin darnos cuenta.
          </p>
        </div>
      </Slide>
      <Slide autoAnimate>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h2>Algoritmos</h2>
          <Image src={CupOfTea} alt="Cup of Tea" className="w-1/2" />
          <p>Una taza de té</p>
        </div>
      </Slide>
      <Slide autoAnimate>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h2>Algoritmos</h2>
          <Image src={CupOfTea} alt="Cup of Tea" className="w-32" />
          <p>
            Imaginemos que tienes que explicarle a alguien cómo hacer una taza
            de té.
          </p>
          <p>¿Qué pasos les darían?</p>
        </div>
      </Slide>
      <Slide autoAnimate>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h4>
            El proceso de hacer té se puede desglosar en pasos específicos:
          </h4>
          <ul>
            <li className="fragment">Hervir agua</li>
            <li className="fragment">Verter agua en una taza</li>
            <li className="fragment">Colocar la bolsa de té en la taza</li>
            <li className="fragment">Dejar reposar la bolsa de té</li>
            <li className="fragment">Retirar la bolsa de té</li>
            <li className="fragment">Agregar azúcar</li>
            <li className="fragment">Revolver</li>
            <li className="fragment">¡Disfrutar!</li>
          </ul>
        </div>
      </Slide>
      <Slide autoAnimate backgroundColor={BackgroundColorsEnum.WHITE}>
        <h4>A groso modo</h4>
        <div className="flex flex-1 justify-center items-center flex-col">
          <Image src={EPSCupOfTea} alt="EPS Cup of Tea" className="w-full" />
        </div>
      </Slide>
      <Slide autoAnimate backgroundColor={BackgroundColorsEnum.WHITE}>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h4>Si nos acercamos al proceso</h4>
          <Image
            src={EPSCupOfTeaZoomed}
            alt="EPS Cup of Tea Zoomed"
            className="w-full"
          />
        </div>
      </Slide>
      <Slide autoAnimate>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h2>Algoritmos</h2>
          <p>Un buen algoritmo debe ser:</p>
          <ul>
            <li className="fragment">Claro, preciso y eficiente</li>
            <li className="fragment">
              Capaz de resolver el problema de manera efectiva
            </li>
            <li className="fragment">
              Capaz de resolver el problema en un tiempo razonable
            </li>
            <li className="fragment">
              Diseñados de manera que sean comprensibles
            </li>
            <li className="fragment">
              Ser implementados en un lenguaje de programación específico
            </li>
          </ul>
        </div>
      </Slide>

      <Slide autoAnimate>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h4>Probemos otros ejemplos</h4>
          <ul>
            <li className="fragment">Hacer un sandwich</li>
            <li className="fragment">Algoritmo para contar hasta 10</li>
            <li className="fragment">
              Algoritmo para determinar si un número es par o impar
            </li>
            <li className="fragment">Algoritmo para multiplicar 2 números</li>
          </ul>
        </div>
      </Slide>
      <Slide autoAnimate>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h4>Hacer un sandwich</h4>
          <ul>
            <li className="fragment">
              Colocar dos rebanadas de pan en la superficie de trabajo.
            </li>
            <li className="fragment">
              Extender una capa de mayonesa en una rebanada de pan.
            </li>
            <li className="fragment">
              Colocar una rodaja de jamón encima de la mayonesa.
            </li>
            <li className="fragment">
              Colocar una rodaja de queso encima del jamón.
            </li>
            <li className="fragment">Opcional: agregar lechuga y tomate.</li>
            <li className="fragment">¡El sandwich está listo para comer!</li>
          </ul>
        </div>
      </Slide>
      <Slide autoAnimate>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h4>Algoritmo para contar hasta 10</h4>
          <ul>
            <li className="fragment">Iniciar en 1.</li>
            <li className="fragment">Imprimir el número actual.</li>
            <li className="fragment">Aumentar el número en 1.</li>
            <li className="fragment">
              Si el número actual es menor o igual a 10, repetir desde el paso
              b.
            </li>
            <li className="fragment">Fin del algoritmo.</li>
          </ul>
        </div>
      </Slide>
      <Slide autoAnimate>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h4>Algoritmo para determinar si un número es par o impar</h4>
          <ul>
            <li className="fragment">Ingresar un número.</li>
            <li className="fragment">Dividir el número por 2.</li>
            <li className="fragment">
              Si el residuo de la división es diferente de 0, el número es
              impar.
            </li>
            <li className="fragment">Imprimir el resultado.</li>
            <li className="fragment">Fin del algoritmo.</li>
          </ul>
        </div>
      </Slide>
      <Slide autoAnimate backgroundColor={BackgroundColorsEnum.BLUE}>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h1>🧠</h1>
          <h4>
            Actividad 1: Realizar un algoritmo de una actividad del día de cada
            uno (puede ser laboral, personal, etc.)
          </h4>
        </div>
      </Slide>
      <Slide autoAnimate backgroundColor={BackgroundColorsEnum.BLUE}>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h1>🧠</h1>
          <h4>Actividad 2: Algoritmo para multiplicar 2 números</h4>
        </div>
      </Slide>
    </>
  );
};
