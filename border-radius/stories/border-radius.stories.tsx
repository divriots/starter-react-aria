import React from 'react';
import { radii, Boxes } from '~/showcasing';

export const border_radius = () => (
  <Boxes
    cssProps={radii}
    getStyle={(name) => ({ borderRadius: `var(${name})` })}
  />
);
