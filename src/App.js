import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Users from './Users';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Orders from './orders/Orders';
import EditOrder from './orders/EditOrder';


function App() { //Root Component

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders/:id/products" element={<EditOrder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    
  )

}

export default App;
