import React from 'react';
import SlideWithHeaderInfo from '@/app/Components/SlideWithHeaderInfo/SlideWithHeaderInfo';
import Image from 'next/image';
import { BackgroundColorsEnum, TransitionEnum } from '@/app/config/enums';
import BabyScreen from '../assets/11-baby-with-screen.png';
import Motherboard from '../assets/10-motherboard.png';
import Matrix from '../assets/9-matrix.png';
import Transistors from '../assets/12-transistors.png';
import Microchip from '../assets/13-microchips.png';
import LogicDoors from '../assets/13-door-diagrams.png';
import Layers from '../assets/14-layers.png';
import Languages from '../assets/15-languages.png';
import Assembly from '../assets/16-assembly.png';
import JavascriptFocus from '../assets/17-javascript-focus.png';

export const Slide25 = () => {
  return (
    <>
      <SlideWithHeaderInfo title="Class 1 - Apps Types" autoAnimate>
        <div className="flex flex-1 justify-center items-center gap-10">
          <Image src={Motherboard} alt="Motherboard" className="w-1/2" />
          <Image src={BabyScreen} alt="BabyScreen" className="w-1/2" />
        </div>
      </SlideWithHeaderInfo>
      <SlideWithHeaderInfo
        title="Class 1 - Apps Types"
        transition={TransitionEnum.FADE}
        autoAnimate
      >
        <div className="flex flex-1 justify-center items-center gap-10 flex-col">
          <div className="flex flex-1 justify-center items-center gap-10">
            <Image src={Motherboard} alt="Motherboard" className="w-1/2" />
            <Image src={BabyScreen} alt="BabyScreen" className="w-1/2" />
          </div>
          <h2>Machine language</h2>
        </div>
      </SlideWithHeaderInfo>
      <SlideWithHeaderInfo
        title="Class 1 - Apps Types"
        transition={TransitionEnum.FADE}
      >
        <div className="flex flex-1 justify-center items-center gap-10 flex-col">
          <h2>01001010100010101010101</h2>
          <Image src={Matrix} alt="Matrix" className="w-1/2" />
        </div>
      </SlideWithHeaderInfo>
      <SlideWithHeaderInfo
        title="Class 1 - Apps Types"
        transition={TransitionEnum.FADE}
      >
        <div className="flex flex-1 justify-center items-center gap-10 flex-col">
          <h2>Base: Binary sistem</h2>
          <h5>A numeric system that uses only two digits:</h5>
          <h5>0 and 1</h5>
        </div>
      </SlideWithHeaderInfo>
      <SlideWithHeaderInfo
        title="Class 1 - Apps Types"
        transition={TransitionEnum.FADE}
      >
        <div className="flex flex-1 justify-center items-center gap-10 flex-col">
          <h2>2 voltage levels to represent information:</h2>
          <ul>
            <li>Low level (0)</li>
            <li>High level (1)</li>
          </ul>
        </div>
      </SlideWithHeaderInfo>
      <SlideWithHeaderInfo
        title="Class 1 - Apps Types"
        transition={TransitionEnum.FADE}
      >
        <div className="flex flex-1 justify-center items-center gap-10 flex-col">
          <div className="flex flex-1 justify-center items-center gap-10">
            <Image src={Transistors} alt="Transistors" className="w-72" />
            <Image src={Microchip} alt="Microchip" className="w-72" />
          </div>
          This components can be in one of two possible states:
          <ul>
            <li>On (represented by 1)</li>
            <li>Off (represented by 0)</li>
          </ul>
        </div>
      </SlideWithHeaderInfo>
      <SlideWithHeaderInfo
        title="Class 1 - Apps Types"
        backgroundColor={BackgroundColorsEnum.WHITE}
        transition={TransitionEnum.FADE}
      >
        <div className="flex flex-1 justify-center items-center">
          <Image src={LogicDoors} alt="Logic Doors" className="w-1/2" />
        </div>
      </SlideWithHeaderInfo>
      <SlideWithHeaderInfo
        backgroundColor={BackgroundColorsEnum.WHITE}
        title="Class 1 - Apps Types"
        transition={TransitionEnum.FADE}
      >
        <div className="flex flex-1 justify-center items-center">
          <Image src={Layers} alt="Layers" className="w-1/2" />
        </div>
      </SlideWithHeaderInfo>
      <SlideWithHeaderInfo
        backgroundColor={BackgroundColorsEnum.WHITE}
        title="Class 1 - Apps Types"
        transition={TransitionEnum.FADE}
      >
        <div className="flex flex-1 justify-center items-center">
          <Image src={Languages} alt="Languages" className="w-1/2" />
        </div>
      </SlideWithHeaderInfo>
      <SlideWithHeaderInfo
        backgroundColor={BackgroundColorsEnum.WHITE}
        title="Class 1 - Apps Types"
        transition={TransitionEnum.FADE}
      >
        <div className="flex flex-1 justify-center items-center flex-col">
          <Image src={Assembly} alt="Languages" className="w-1/3" />
          <small>Original assembly language for the Motorola MC6800</small>
        </div>
      </SlideWithHeaderInfo>
      <SlideWithHeaderInfo
        backgroundColor={BackgroundColorsEnum.WHITE}
        title="Class 1 - Apps Types"
        transition={TransitionEnum.FADE}
      >
        <div className="flex flex-1 justify-center items-center">
          <Image
            src={JavascriptFocus}
            alt="Javascript Focus"
            className="w-1/4"
          />
        </div>
      </SlideWithHeaderInfo>
    </>
  );
};
