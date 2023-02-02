import './package-item.style.scss';

const PackageItem = ({ name, imageUrl, price }) => {
  return (
    <div className="package-item">
      <h3 className="package-item__name">{name}</h3>
      <img src={imageUrl} alt={name} className="package-item__imageUrl" />
      <span className="package-item__price">{price}$</span>
    </div>
  );
};

export default PackageItem;
