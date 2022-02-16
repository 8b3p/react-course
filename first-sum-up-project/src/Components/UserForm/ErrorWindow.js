import React from 'react';
import ReactDOM from 'react-dom';

import Card from '../UI/Card'
import Button from '../UI/Button';
import styles from './ErrorWindow.module.css';

const Backdrop = props => {
  return (
    <div
      className={styles.backdrop}
      onClick={props.onConfirm} />
  );
};

const ErrorModal = props => {
  return (
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
  );
};

const ErrorWindow = props => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.body)}
      {ReactDOM.createPortal(<ErrorModal title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.body)}
    </>
  );
}

export default ErrorWindow