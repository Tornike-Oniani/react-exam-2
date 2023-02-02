import PackageItem from '../package-item/package-item.component';
import './package.style.scss';

const Package = ({ cost, items }) => {
  return (
    <div className="package">
      <div className="package__header">
        <h3 className="package__label">
          <b>Ordered at:</b> {new Date(Date.now()).toString()}
        </h3>
        <span className="package__cost">
          <b>Package cost:</b> {cost}$
        </span>
      </div>
      <ul className="package__items">
        {items.map((item) => {
          return (
            <PackageItem
              key={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Package;
