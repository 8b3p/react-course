import React, { useContext } from 'react';
import Card from '../../UI/Card/Card';
import cartContext from '../../../store/cart-context';
import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import CartTotal from './CartTotal/CartTotal';
import CartActions from './CartActoins/CartActions';

const Cart = props => {
  const cartCtx = useContext(cartContext);

  const cartItemsArray = cartCtx.items.map(item => {
    return (
      <CartItem key={item.id} item={item} />
    );
  });

  const hideCart = () => {
    props.cartState(false);
  };

  return (
    <React.Fragment>
      ReactDOM.createPortal(<div className={styles.backdrop} onClick={hideCart} />,, document.querySelector('#root'))
      ReactDOM.createPortal(
      <Card className={styles.modal}>
        <ul className={styles['list-control']}>{cartItemsArray}</ul>
        <CartTotal />
        <CartActions items={cartCtx.items} hideCart={hideCart}/>
      </Card>, document.querySelector('#root'))
    </React.Fragment>
  );
};

export default Cart;