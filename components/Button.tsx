import React from 'react';

import styles from '../styles/Button.module.scss';

interface ButtonProps {
  action: () => void;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ action, text }) => (
  <button
    onClick={action}
    type='button'
    className={styles.button}
  >
    {text}
  </button>
);
