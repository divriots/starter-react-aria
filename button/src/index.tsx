import React, { useRef, ElementType, HTMLAttributes } from 'react';
import { AriaButtonProps } from '@react-types/button';
import { useButton, ButtonAria } from '@react-aria/button'

export const Button = (props: AriaButtonProps<ElementType>): ButtonAria<HTMLAttributes<any>> => {
  const ref = useRef();
  const { buttonProps } = useButton(props, ref);
  const { children } = props;

  return (
    <button {...buttonProps} ref={ref}>
      {children}
    </button>
  );
};
