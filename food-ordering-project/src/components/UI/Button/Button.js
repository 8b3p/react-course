import React from 'react';

import styles from './Button.module.css'

const Button = props => {
  const classes = `${styles.button} ${styles.bump} ${props.className && props.className}`

  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={classes}
    >
      {props.children}
    </button>
  );
};

export default Button;