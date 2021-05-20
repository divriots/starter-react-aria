import React from 'react';
import { Button } from '../index';

export default {
  parameters: {
    layout: "centered",
  },
};

export const button = () => <Button onPress={() => alert('Button pressed!')}>Test</Button>;
