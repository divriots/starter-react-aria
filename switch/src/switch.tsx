import React from 'react';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useToggleState } from '@react-stately/toggle';
import { useFocusRing } from '@react-aria/focus';
import { useSwitch } from '@react-aria/switch';
import type { AriaSwitchProps } from '@react-types/switch';
import styles from './switch.module.scss';

export type SwitchProps = AriaSwitchProps & {
  /**
  Use the size prop to change the size of the switch. You can set the value to 'small', 'medium' or 'large'.
   */
  size: 'small' | 'medium' | 'large';
};

/**
  The Switch component is used as an alternative for the checkbox component. You can switch between enabled or disabled states.
*/
export const Switch = ({ size = 'medium', ...rest }: SwitchProps) => {
  const state = useToggleState(rest);
  const ref = React.useRef();
  const { inputProps } = useSwitch(rest, state, ref);
  const { focusProps } = useFocusRing();

  const dataChecked = state.isSelected ? { 'data-checked': true } : {};

  return (
    <label style={{ display: 'flex', alignItems: 'center' }}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <span
        className={`${styles.switch} ${styles[size]} ${
          rest.isDisabled ? styles.disabled : ''
        }`}
        {...dataChecked}
      >
        <span
          className={`${styles.switch_thumb} ${styles[`thumb_${size}`]}`}
          {...dataChecked}
        />
      </span>
      {rest.children}
    </label>
  );
};
