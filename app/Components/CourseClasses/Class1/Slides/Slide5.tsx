import Slide from '@/app/Components/Slide/Slide';
import { BackgroundColorsEnum } from '@/app/config/enums';
import React from 'react';

export const Slide5 = () => {
  return (
    <Slide backgroundColor={BackgroundColorsEnum.AQUAMAINE}>
      <small>A developer</small>
      <h3>✅ ✅ Solve problems</h3>
      <aside className="notes">
        <ul>
          <li>✅ Is not to make new problems</li>
          <li>✅ People hire us to solve problems, not to make a new ones.</li>
        </ul>
      </aside>
    </Slide>
  );
};
