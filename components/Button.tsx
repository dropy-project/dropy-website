'use client';

import React from 'react';

import styles from '../styles/Button.module.scss';

interface ButtonProps {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text }) => (
  <button
    type='button'
    className={styles.button}
  >
    {text}
  </button>
);
