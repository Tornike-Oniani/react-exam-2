import { useSelector } from 'react-redux';

import Product from '../product/product.component';
import Loader from '../loader/loader.component';

import './catalog.style.scss';

const Catalog = () => {
  const catalog = useSelector((state) => state.catalog);

  if (catalog.status === 'loading') {
    return <h1>Loading...</h1>;
  }

  return (
    <ul className="catalog">
      {catalog.products.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            imageUrl={product.image}
            name={product.title}
            rating={product.rating}
            description={product.description}
            price={product.price}
          />
        );
      })}
    </ul>
  );
};

export default Catalog;
