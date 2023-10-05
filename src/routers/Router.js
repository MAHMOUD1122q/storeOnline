import {Routes,Route} from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import CheckOut from '../pages/CheckOut';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ProductedRoute from './productedRoute';
import Clothes from '../pages/clothes';
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/shop/:id" element={<ProductDetails />}/>
      <Route path="/checkout" element={<ProductedRoute>
        <CheckOut/>
      </ProductedRoute>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path='clothes' element={<Clothes />}/>
    </Routes>
  );
}

export default Router;
