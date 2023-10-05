import React from 'react';
import "../styles/Product-card.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';

const ProductCard = ({item}) => { 

  const dispatch = useDispatch()

  const addToCart = ()=>{
  dispatch(cartActions.addItem({
    id: item.id,
    productName: item.productName,
    price: item.price,
    imgUrl: item.imgUrl
  }));
  toast.success('product added to the cart');
  }
  return (
    <>
      <div className="container-product">
        <div className="box">
            <Link to={`/shop/${item.id}`}><img src={item.imgUrl} alt=""/></Link>
            <div className="text">
              <Link to={`/shop/${item.id}`}><p className="title">{item.productName} </p></Link>
              <Link to={`/shop/${item.id}`}><p className="price" style={{color:'#082f49'}}> <span >جنيه مصري</span> ({item.price}) </p></Link>
              <button className="btn" onClick={addToCart}>add to cart</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
