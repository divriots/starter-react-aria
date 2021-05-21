import React from 'react';
import { fontFamilies, fontSizes, fontWeights, letterSpacing, lineHeights, Texts } from '~/showcasing';

export const font_family = () => (
  <Texts
    cssProps={fontFamilies}
    getStyle={(name) => ({ fontFamily: `var(${name})` })}
  />
);

export const font_size = () => (
  <Texts
    cssProps={fontSizes}
    getStyle={(name) => ({ fontSize: `var(${name})` })}
  />
);

export const font_weight = () => (
  <Texts
    cssProps={fontWeights}
    getStyle={(name) => ({ fontWeight: `var(${name})` })}
  />
);

export const letter_spacing = () => (
  <Texts
    cssProps={letterSpacing}
    getStyle={(name) => ({ letterSpacing: `var(${name})` })}
  />
);

export const line_height = () => (
  <Texts
    cssProps={lineHeights}
    getStyle={(name) => ({ lineHeight: `var(${name})` })}
    longText
  />
);