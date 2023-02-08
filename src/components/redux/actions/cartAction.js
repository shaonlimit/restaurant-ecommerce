export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SAVE_SHIPPING_ADDRESS = 'SAVE_SHIPPING_ADDRESS';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    playload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    playload: product,
  };
};

export const saveShippingAddress = (data) => {
  return {
    type: SAVE_SHIPPING_ADDRESS,
    playload: data,
  };
};
