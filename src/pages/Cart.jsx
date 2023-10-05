import React from 'react';
import '../styles/Cart.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../UI/commonSection'
import { cartActions } from '../redux/slices/cartSlice';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalAmount = useSelector((state)=> state.cart.totalAmount)
  return (
    <Helmet title='Cart'>
      <CommonSection title='Shopping Cart'/>
      <section className='cart'>
        <div className="container">
          {
            cartItems.length === 0? <h2 style={{textAlign:'center',fontSize:'20px', width:'850px'}}> لا يوجد منتجات في السله </h2> :
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
                {
                  cartItems.map((item,index)=>(
                    <Tr item={item} key={index}/>
                  ))
                }
            </tbody>
          </table>
          }
          <div className="total" >
              <div className="subtotal">
                <h6>subtotal</h6>
                <span>${totalAmount}</span>
              </div>
              <p>taxes and shipping will calculator in checkout</p>
              <div>
                <Link to='/shop'><button className='buy-btn' style={{display:'block',margin:'10px 0',width:'100%'}}>continue Shopping</button></Link>
                <Link to='/checkout'><button className='buy-btn' style={{display:'block',margin:'10px 0',width:'100%'}}>checkout</button></Link>
              </div>
            </div>
          </div>
      </section>
    </Helmet>
  );
}

const Tr = ({item})=>{
  const dispatch = useDispatch()

  const deleteProduct = ()=> {
    dispatch(cartActions.deleteItem(item.id))
  }
  return (
  <tr>
    <td><img src={item.imgUrl} alt="" /></td>
    <td> {item.productName}</td>
    <td> {item.price}</td>
    <td>{item.quantity}</td>
    <td><i className='fa-solid fa-trash-can' style={{marginLeft:'10px'}} onClick={deleteProduct}></i></td>
  </tr>
)}

export default Cart;
