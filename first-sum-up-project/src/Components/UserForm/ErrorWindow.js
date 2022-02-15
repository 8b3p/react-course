import React from 'react';

import Card from '../UI/Card'
import Button from '../UI/Button';
import styles from './ErrorWindow.module.css';

const ErrorWindow = props => {

  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm}>
      </div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          {props.message}
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorWindow