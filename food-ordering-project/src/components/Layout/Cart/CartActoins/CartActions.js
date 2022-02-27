import React from 'react';
import Button from '../../../UI/Button/Button';
import styles from './CartActions.module.css';

const CartActions = props => {
  const orderHandler = event => {
    if (props.items.length > 0) {
      console.log('ordering...')
    } else {
      console.log('please select some meals to order')
    }
  }

  return (
    <div className={styles['cart-actions']}>
      <Button onClick={props.hideCart}>
        Cancel
      </Button>
      <Button onClick={orderHandler}>
        Order
      </Button>
    </div>
  )
}

export default CartActions;