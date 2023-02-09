import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchProducts } from '../../features/catalog/catalogSlice';
import Catalog from '../../components/catalog/catalog.component';
import Cart from '../../components/cart/cart.component';

import './homepage.style.scss';

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts);
  }, []);

  return (
    <div className="homepage">
      <Catalog />
      <Cart />
    </div>
  );
};

export default Homepage;
