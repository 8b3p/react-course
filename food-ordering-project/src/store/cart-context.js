import React, { useState } from 'react';

const CartContext = React.createContext({
  items: [{}],
  addItem: (item) => { },
  deleteItem: (itemID) => { },
  subtractOne: (itemID) => { },
  addOne: (itemID) => { }
});

export const CartContextProvider = props => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    setCartItems(prevState => {
      for (let prevItem of prevState) {
        if (prevItem.id === item.id) {
          item.amount += prevItem.amount;
          let newArray = [];
          prevState.forEach(filterItem => {
            if (filterItem.id === item.id) {
              newArray.push(item);
            } else {
              newArray.push(filterItem);
            }
          });
          return newArray
        }
      }
      return [...prevState, item];
    });
  };
  const deleteItem = (itemID) => {
    setCartItems((prevState) => {
      return prevState.filter(item => (item.id !== itemID));
    });
  };

  const addOne = (itemID) => {
    setCartItems(prevState => {
      for (let prevItem of prevState) {
        if (prevItem.id === itemID) {
          prevItem.amount++;
          let newArray = [];
          prevState.forEach(filterItem => {
            if (filterItem.id === itemID) {
              newArray.push(prevItem);
            } else {
              newArray.push(filterItem);
            };
          });
          return newArray
        };
      };
    });
  };

  const subtractOne = (itemID) => {
    setCartItems(prevState => {
      for (let prevItem of prevState) {
        if (prevItem.id === itemID) {
          prevItem.amount--;
          if (prevItem.amount > 0) {
            let newArray = [];
            prevState.forEach(filterItem => {
              if (filterItem.id === itemID) {
                newArray.push(prevItem);
              } else {
                newArray.push(filterItem);
              };
            });
            return newArray
          } else {
            return prevState.filter(item => (item.id !== itemID));
          }
        };
      };
    });
  };


  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addItem: addItem,
        deleteItem: deleteItem,
        subtractOne: subtractOne,
        addOne: addOne
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;