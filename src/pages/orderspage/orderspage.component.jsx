import { useSelector } from 'react-redux';

import Package from '../../components/package/package.component';

import './orderspage.style.scss';

const OrdersPage = () => {
  const orders = useSelector((state) => state.orderHistory);

  return (
    <div className="orderspage">
      <div className="orders">
        <div className="orders__header">
          <h2 className="orders__title">Orders</h2>
          <span className="orders__spent">
            Total spent: {orders.totalSpent}$
          </span>
        </div>
        <ul className="orders__packages">
          {orders.packages.map((item) => {
            return <Package cost={item.cost} items={item.items} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default OrdersPage;
