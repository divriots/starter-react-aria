import React from 'react';
import { spacing, Space } from '~/showcasing';

export const spacing_ = () => (
  <Space
    cssProps={spacing}
    getStyle={(name) => ({ width: `var(${name})` })}
  />
);
