import { Route, Routes } from 'react-router-dom';

import Navigation from './components/navigation/navigation.component';
import Homepage from './pages/homepage/homepage.component';
import OrdersPage from './pages/orderspage/orderspage.component';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/orders" element={<OrdersPage />} />
      </Routes>
    </div>
  );
}

export default App;
