import React, { useContext, useRef } from 'react';
import CartContext from '../../../../../store/cart-context';

import Button from '../../../../UI/Button/Button';
import styles from './MealItem.module.css';

const MealItem = props => {
  const inputRef = useRef();
  const cartCtx = useContext(CartContext);

  const submitHandler = event => {
    event.preventDefault();

    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: +inputRef.current.value
    }
    cartCtx.addItem(item);
  }

  return (
    <li className={styles.meal}>
      <div>
        <p>{props.name}<br /></p>
        <p>{props.description}<br /></p>
        <p>${props.price}<br /></p>
      </div>
      <form className={styles['amount-form-control']} onSubmit={submitHandler}>
        <div>
          <label htmlFor={`${props.id}-mealNumber`}>Amount</label>
          <input id={`${props.id}-mealNumber`} ref={inputRef} type="number" max='5' min='1' step='1' defaultValue='1' />
        </div>
        <Button type='submit'>Add</Button>
      </form>
    </li>
  );
};

export default MealItem;