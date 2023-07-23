'use client';
import React, { useEffect } from 'react';
import '../../../node_modules/reveal.js/dist/reveal.css';
import '../../../node_modules/reveal.js/dist/theme/black.css';
import { IPresentation } from './PresentationInterfaces';

const SlideBase = ({ children }: IPresentation) => {
  useEffect(() => {
    // This will be executed in the browser (client-side).
    const clientSideInitialization = async () => {
      // load modules in browser
      const Reveal = await (await import('reveal.js')).default;
      const Zoom = await (await import('reveal.js/plugin/zoom/zoom')).default;
      const Notes = await (
        await import('reveal.js/plugin/notes/notes')
      ).default;
      const deck = new Reveal({
        plugins: [Zoom, Notes],
      });
      deck.initialize();
    };
    clientSideInitialization();
  });

  return (
    <div className="reveal !h-screen">
      <div className="slides" data-transition="slide">
        {children}
      </div>
    </div>
  );
};

export default SlideBase;
