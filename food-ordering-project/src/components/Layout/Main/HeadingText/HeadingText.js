import React from 'react';

import styles from './HeadingText.module.css';
import Card from '../../../UI/Card/Card';


const HeadingText = props => {
  return (
    <Card className={styles.heading}>
      <h1>Delicious Food Delivered To You!</h1>
      <h3>Choose your favorite meal out broad selection of available meals and enjoy a delicious lunch or dinner at home</h3>
      <h3>All our meals are cooked with high-quality ingredients, just in-time and of course by experienced chefs!</h3>
    </Card>
  );
}

export default HeadingText;