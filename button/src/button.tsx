import * as React from 'react';
const { useRef } = React;
import type { ElementType, HTMLAttributes } from 'react';
import type { AriaButtonProps } from '@react-types/button';
import { useButton } from '@react-aria/button';
import styles from './button.module.scss';

export type ButtonProps = AriaButtonProps<ElementType> & {
  /**
  Use the size prop to change the size of the button. You can set the value to 'small', 'medium' or 'large'.
   */
  size?: 'small' | 'medium' | 'large';
  /**
  Boolean flag indicating if should render as 'primary' variation.
   */
  primary?: boolean;
  /**
  Boolean flag indicating if should render as 'secondary' variation.
   */
  secondary?: boolean;
};

/**
  The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
*/
export const Button = ({
  size = 'medium',
  primary = true,
  secondary = false,
  ...rest
}: ButtonProps) => {
  const ref = useRef();
  const { buttonProps } = useButton(rest, ref);
  const { children } = rest;

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={`
      ${styles.button} ${styles[size]}
      ${secondary ? styles.secondary : ''}
      ${rest.isDisabled ? styles.disabled : ''}
      `}
    >
      {children}
    </button>
  );
};
