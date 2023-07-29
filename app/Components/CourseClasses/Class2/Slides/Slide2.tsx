import React from 'react';
import Slide from '@/app/Components/Slide/Slide';
import Image from 'next/image';
import FlowDiagram from '../assets/5-flow-diagram.png';
import FlowDiagramSymbols from '../assets/6-flow-diagram-symbols.png';
import TeaFlowDiagram from '../assets/7-tea-flow-diagram.png';
import SandwichFlowDiagram from '../assets/8-sandwich-flow-diagram.png';
import { BackgroundColorsEnum } from '@/app/config/enums';

export const Slide2 = () => {
  return (
    <>
      <Slide>
        <p>
          Se necesita una herramienta para representar gráficamente que ilustre
          la secuencia de pasos o acciones de un algoritmo o proceso
        </p>
      </Slide>
      <Slide autoAnimate>
        <h3>Diagramas de flujo</h3>
        <Image src={FlowDiagram} alt="Flow Diagram" className="w-32" />
      </Slide>
      <Slide autoAnimate>
        <h3>Diagramas de flujo</h3>
        <Image src={FlowDiagram} alt="Flow Diagram" className="w-32" />
        <p>
          También conocido como diagrama de procesos o mapa de procesos, es una
          representación gráfica que ilustra la secuencia de pasos o acciones en
          un proceso o algoritmo. Utiliza diversos símbolos y flechas para
          representar el flujo de control dentro del sistema.
        </p>
      </Slide>
      <Slide autoAnimate backgroundColor={BackgroundColorsEnum.WHITE}>
        <h3>Diagramas de flujo</h3>
        <Image
          src={FlowDiagramSymbols}
          alt="Flow Diagram Symbols"
          className="w-1/2"
        />
      </Slide>
      <Slide autoAnimate>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h4>Vamos a repasar el proceso de hacer té.</h4>
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
        <div className="flex flex-1 justify-center items-center flex-col">
          <h4>En diagrama de flujo</h4>
          <Image
            src={TeaFlowDiagram}
            alt="Tea Flow Diagram"
            className="w-1/2"
          />
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
      <Slide autoAnimate backgroundColor={BackgroundColorsEnum.WHITE}>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h4>En diagrama de flujo</h4>
          <Image
            src={SandwichFlowDiagram}
            alt="Sandwich Flow Diagram"
            className="w-1/2"
          />
        </div>
      </Slide>
      <Slide autoAnimate>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h4>¿Qué herramientas tenemos para hacer diagramas de flujo?</h4>
          <ul>
            <li className="fragment">Dibujar a mano</li>
            <li className="fragment">Paint</li>
            <li className="fragment">Word o Powerpoint</li>
            <li className="fragment">https://app.diagrams.net/</li>
          </ul>
        </div>
      </Slide>
      <Slide autoAnimate>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h4>Pasar algoritmo para contar hasta 10 a diagrama de flujo:</h4>
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
          <h4>Tareas</h4>
          <ul>
            <li className="fragment">
              Algoritmo para calcular el área de un triángulo
            </li>
            <li className="fragment">
              Algoritmo para determinar si un número es primo
            </li>
            <li className="fragment">
              Algoritmo para encontrar el máximo y mínimo de una lista de
              números
            </li>
            <li className="fragment">
              Algoritmo para convertir grados Celsius a Fahrenheit
            </li>
          </ul>
        </div>
      </Slide>
      <Slide autoAnimate>
        <div className="flex flex-1 justify-center items-center flex-col">
          <h4>Tareas</h4>
          <ul>
            <li className="fragment">
              Algoritmo para determinar si una palabra es un palíndromo
            </li>
            <li className="fragment">
              Algoritmo para ordenar una lista de números de forma ascendente
            </li>
            <li className="fragment">
              Algoritmo para calcular el número de Fibonacci
            </li>
            <li className="fragment">
              Algoritmo para encontrar el máximo común divisor (MCD) de dos
              números
            </li>
          </ul>
        </div>
      </Slide>
    </>
  );
};
