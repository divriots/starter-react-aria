import React from 'react';
import { Select, Item } from '../index';
import '~/theme/src/theme.scss';


export const select = () => (
  <Select label="Favorite Color">
    <Item>Red</Item>
    <Item>Orange</Item>
    <Item>Yellow</Item>
    <Item>Green</Item>
    <Item>Blue</Item>
    <Item>Purple</Item>
  </Select>
);
