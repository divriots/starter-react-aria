import React from 'react';
import { elevation, Boxes } from '~/showcasing';

export const elevation_ = () => (
  <Boxes
    cssProps={elevation}
    getStyle={(name) => ({ boxShadow: `var(${name})`, backgroundColor: '#fff' })}
  />
);
