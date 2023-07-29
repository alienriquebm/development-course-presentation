import React from 'react';
import SlideWithHeaderInfo from '@/app/Components/SlideWithHeaderInfo/SlideWithHeaderInfo';
import { BackgroundColorsEnum } from '@/app/config/enums';

export const Slide23 = () => {
  return (
    <>
      <SlideWithHeaderInfo
        title="Class 1 - Apps Types"
        subtitle="Web Apps"
        backgroundColor={BackgroundColorsEnum.YELLOW}
        autoAnimate
      >
        <div className="flex flex-1 justify-center items-center flex-col">
          <h1>⚠️</h1>
          <h4>What is the difference between a Webpage and WebApp?</h4>
        </div>
      </SlideWithHeaderInfo>
      <SlideWithHeaderInfo
        title="Class 1 - Apps Types"
        subtitle="Web Apps"
        backgroundColor={BackgroundColorsEnum.YELLOW}
        autoAnimate
      >
        <div className="flex flex-1 justify-center items-center flex-col">
          <h1>⚠️</h1>
          <h4>What is the difference between a Webpage and WebApp?</h4>
          <div className="flex gap-6 w-full">
            <div className="flex flex-col w-1/2">
              <h6>A Webpage</h6>
              <small>
                Webpages usually contain static information such as text,
                images, and links to other websites. Their main purpose is to
                provide information and content to users.
              </small>
            </div>
            <div className="flex flex-col w-1/2">
              <h6>A WebApp</h6>
              <small>
                A web app (web application) is an interactive application that
                runs in a web browser. Unlike static webpages, a web app offers
                more advanced functionality and allows users to interact and
                perform actions within the application.
              </small>
            </div>
          </div>
        </div>
      </SlideWithHeaderInfo>
    </>
  );
};
