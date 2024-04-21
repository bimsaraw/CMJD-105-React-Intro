import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Users from './Users';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Orders from './orders/Orders';
import EditOrder from './orders/EditOrder';
import { AuthProvider } from './utils/AuthContext';
import LoginPage from './Login';
import ProtectedRoute from './utils/ProtectedRoute';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() { //Root Component

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* Allowed to access only if logged in */}
          <Route element={<ProtectedRoute />}>
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders/:id/products" element={<EditOrder />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/" element={<Home />} />
          </Route>

          {/* Allowed to access only if not logged in */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </AuthProvider>

  )

}

export default App;
