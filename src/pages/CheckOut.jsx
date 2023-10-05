import React from 'react';
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../UI/commonSection'
import '../styles/checkout.css'
import { useSelector } from 'react-redux';

const CheckOut = () => {
const totalQty = useSelector(state => state.cart.totalQuantity);
const totalAmount = useSelector(state => state.cart.totalAmount);

  return (
    <Helmet title='checkout'>
      <CommonSection title='Checkout'/>
      <section className='Check'>
        <div className="conatiner" dir='rtl'>
          <form action="" >
            <h6>ادخل بيانات الاوردر</h6>
            <label htmlFor="name"> الاسم كامل </label>
            <input type="text"  id='name' name='name'/>
            <label htmlFor="email"> الايميل </label>
            <input type="email" id='email' name='email'/>
            <label htmlFor="phone"> رقم التليفون </label>
            <input type="number" id='phone' name='phone'/>
            <label htmlFor="address"> العنوان </label>
            <input type="text" id='address' name='address' />
          </form>
          <div className="checkout-content">
            <h4 className='total'>Total Qty:<span>{totalQty} items</span></h4>
            <h4 className='total'> subtotal:<span>{totalAmount}</span></h4>
            <h4 className='total'> shipping:<span>0</span></h4>
            <h4 className='total'> Free Shipping:</h4>
            <h4 className='total-cost'> total Cost:<span>{totalAmount}</span></h4>
          <button className='buy-btn auth-btn'>Place On Order</button>
          </div>
        </div>
      </section>
    </Helmet>
  );
}

export default CheckOut;
