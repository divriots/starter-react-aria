import React from 'react';
import { colors, Boxes } from '~/showcasing';

export const border_radius = () => (
  <Boxes
    cssProps={colors}
    getStyle={(name) => ({ backgroundColor: `var(${name})` })}
  />
);
