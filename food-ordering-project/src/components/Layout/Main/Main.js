import React from 'react';

import styles from './Main.module.css';
import HeaderText from './HeadingText/HeadingText';
import ItemsList from './ItemsList/ItemsList';

const Main = props => {
  return (
    <div className={styles.main}>
      <HeaderText />
      <ItemsList />
    </div>
  );
};

export default Main;