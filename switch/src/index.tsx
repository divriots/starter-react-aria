import React, { useRef } from 'react';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useToggleState } from '@react-stately/toggle';
import { useFocusRing } from '@react-aria/focus';
import { useSwitch, AriaSwitchProps, SwitchAria } from '@react-aria/switch';
import styles from './switch.module.scss';

export const Switch = (props: AriaSwitchProps): SwitchAria => {
  const state = useToggleState(props);
  const ref = useRef();
  const { inputProps } = useSwitch(props, state, ref);
  const { focusProps } = useFocusRing();

  const dataChecked = state.isSelected ? { 'data-checked': true } : {};

  return (
    <label style={{ display: 'flex', alignItems: 'center' }}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <span class={styles.switch} {...dataChecked} >
        <span class={styles.switch_thumb} {...dataChecked} />
      </span>
      {props.children}
    </label>
  );
}