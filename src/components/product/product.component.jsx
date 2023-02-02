import { useDispatch } from 'react-redux';

import { ReactComponent as StarFull } from '../../assets/star-full.svg';
import { ReactComponent as StarHalf } from '../../assets/star-half.svg';
import { ReactComponent as StarEmpty } from '../../assets/star-empty.svg';

import './product.style.scss';

const renderStars = (rating) => {
  let result = [];
  let stars = Math.floor(rating.rate);
  for (let i = 0; i < stars; i++) {
    result.push(<StarFull key={i + 1} />);
  }

  if (rating.rate % 1 !== 0) {
    result.push(<StarHalf key={stars + 1} />);
    stars++;
  }

  for (let i = 0; i < 5 - stars; i++) {
    result.push(<StarEmpty key={5 - i} />);
  }

  return result;
};

const Product = ({ id, imageUrl, name, rating, description, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <img src={imageUrl} alt={name} className="product__image" />
      <div className="product__content">
        <h3 className="product__name">{name}</h3>
        <div className="product__rating">
          <div className="product__stars">{renderStars(rating)}</div>
          <div className="product__votes">({rating.count})</div>
        </div>
        <p className="product__description">{description}</p>
      </div>
      <div className="product__actions">
        <span className="product__price">{price}$</span>
        <button
          className="product__add btn"
          onClick={() => {
            dispatch({
              type: 'cart/productAdded',
              payload: { id, imageUrl, name, price },
            });
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
