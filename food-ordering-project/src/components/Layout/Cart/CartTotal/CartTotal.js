import React, { useContext } from 'react';
import CartContext from '../../../../store/cart-context';
import styles from './CartTotal.module.css';

const CartTotal = props => {
  const cartCtx = useContext(CartContext);

  let Total = 0;
  cartCtx.items.forEach(item => {
    Total += (item.amount * item.price);
  });

  return (
    <div className={styles['cart-total']}>
      <span>
        Total Amount
      </span>
      <span>
        ${Total.toFixed(2)}
      </span>
    </div>
  )
}

export default CartTotal