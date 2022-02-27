import React, { useState, useContext } from 'react';
import styles from './Header.module.css';
import Button from '../../UI/Button/Button';
import CartIcon from './cart-icon';
import Cart from '../Cart/Cart';
import image from './meals.jpg';
import CartContext from '../../../store/cart-context';

const Header = props => {
  const cartCtx = useContext(CartContext)
  const [showCart, setShowCart] = useState(false);

  const cartButtonHandler = () => {
    setShowCart(true);
  };

  let cartItemNumber = 0;
  cartCtx.items.forEach(item => {
    cartItemNumber += item.amount;  
  })

  return (
    <React.Fragment>
      {showCart && <Cart cartState={setShowCart} />}
      <div className={styles.navbar}>
        <a href='/'>Meal's</a>
        <Button className={styles.button} onClick={cartButtonHandler} type='button'>
          <CartIcon className={styles.icon} />
            Your Cart
          <p className={styles['button-numbers']}>{cartItemNumber}</p>
        </Button>
      </div>
      <div className={styles['main-image']}>
        <img src={image} alt='massive fiest' />
      </div>
    </React.Fragment>
  );
};

export default Header;