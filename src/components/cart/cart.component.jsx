import { useSelector, useDispatch } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';

import './cart.style.scss';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return !cart.items | (cart.items.length === 0) ? (
    <div className="cart">
      <h2>No items in the cart...</h2>
    </div>
  ) : (
    <div className="cart">
      <button
        className="cart__checkout btn"
        onClick={() => {
          dispatch({
            type: 'orderHistory/addedPackage',
            payload: { cost: cart.totalCost, items: cart.items },
          });
          dispatch({ type: 'cart/checkedOut' });
        }}
      >
        Checkout for {cart.totalCost.toFixed(2)}$
      </button>
      <ul className="cart-list">
        {cart.items.map((productItem) => {
          return (
            <CartItem
              key={productItem.id}
              id={productItem.id}
              name={productItem.name}
              price={productItem.price}
              imageUrl={productItem.imageUrl}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
