import { useDispatch } from 'react-redux';

import './cart-item.style.scss';

const CartItem = ({ id, name, price, imageUrl }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div className="cart-item__header">
        <h3 className="cart-item__name">{name}</h3>
        <button
          className="cart-item__remove"
          onClick={() =>
            dispatch({ type: 'cart/productRemoved', payload: { id, price } })
          }
        ></button>
      </div>
      <span className="cart-item__price">{price}$</span>
      <img src={imageUrl} alt={name} className="cart-item__image" />
    </div>
  );
};

export default CartItem;
