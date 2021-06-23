import React from 'react';
import { StyleShowcases } from '@divriots/dockit-react/style-showcases';
import './stories.css';
import '~/all/dist/all.css';

export const color = () => (
  <StyleShowcases
    prefix="--aria-color"
    styleKey="backgroundColor"
    componentProps={{ className: "box" }}
  />
);