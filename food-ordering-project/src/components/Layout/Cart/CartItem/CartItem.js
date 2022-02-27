import React, { useContext } from "react";

import styles from './CartItem.module.css';
import CartContext from "../../../../store/cart-context";

const CartItem = props => {
  const cartCtx = useContext(CartContext);

  const addOneHandler = () => {
    cartCtx.addOne(props.item.id)
  }

  const subtractOneHandler = () => {
    cartCtx.subtractOne(props.item.id)
  }

  return (
    <li className={styles['list']}>
      <div style={{'width': '35%'}}>
        <h2>{props.item.name} <br /></h2>
        <div className={styles['list-items']}>
          <span>${props.item.price} </span>
          <span>X {props.item.amount}</span>
        </div>
      </div>
      <div className={styles['list-buttons']}>
        <button onClick={addOneHandler}>+</button>
        <button onClick={subtractOneHandler}>-</button>
      </div>
    </li>
  );
};

export default CartItem;