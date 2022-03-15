import React from 'react';
import { Switch } from '../index';
import classes from './stories.module.css';

export const switch_ = () => (
  <div className={classes.container}>
    <Switch size="small">Small</Switch>
    <Switch size="medium">Medium</Switch>
    <Switch size="large">Large</Switch>
  </div>
);

export const switch_disabled = () => (
  <div className={classes.container}>
    <Switch isDisabled size="small">
      Small
    </Switch>
    <Switch isDisabled size="medium">
      Medium
    </Switch>
    <Switch isDisabled size="large">
      Large
    </Switch>
  </div>
);
