import React,{useState,useRef ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../UI/commonSection';
import products from '../assets/data/products';
import "../styles/product-details.css" ;
import ProductsList from '../UI/ProductList' ;
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';

const ProductDetails = () => {
const {id} = useParams()
const product = products.find(item => item.id === id)
const {imgUrl,productName,price,avgRating, reviews ,description , shortDesc, category} = product
const [tab,setTab] = useState('desc')
const {rating , setRating} = useState(null);
const dispatch = useDispatch();
const relatedProduct =products.filter((item)=>item.category === category )
const reviewUser = useRef('');
const reviewMsg = useRef('')
const submitHandler = (e)=> {
  e.preventDefaul()
  const reviewUserName =reviewUser.current.value;
  const reviewUserMsg =reviewMsg.current.value;
  const ratingObj = {
    userName:reviewUserName,
    text:reviewUserMsg,
    rating,
  };
  toast.success('Review submitted')
}
const addToCart = ()=> {
  dispatch(cartActions.addItem({
    id,
    image:imgUrl,
    productName,
    price,
  }))
  toast.success('product added to the cart')
}
useEffect(()=>{
  window.scrollTo(0,0);
},[product])
  return (
    <Helmet title={productName}>
      <CommonSection title={productName}/>
      <section className='product-page'>
        <div className="container" style={{marginLeft:'50px'}}>
          <img src={imgUrl} alt="img" />
          <div className="product-details">
            <h2>{productName}</h2>
            <div className="product-rating">
              <span><i className='fa-solid fa-star'></i></span>
              <span><i className='fa-solid fa-star'></i></span>
              <span><i className='fa-solid fa-star'></i></span>
              <span><i className='fa-solid fa-star'></i></span>
              <span><i className='fa-solid fa-star-half-stroke'></i></span>
              <p>(<span>{avgRating}</span> rating)</p>
            </div>
            <div style={{display:'flex',alignItems:'center', gap:'10px',marginBottom:'10px'}}>
            <span className='price'> (جنية مصري){price}</span>
            <span>category: {category.toUpperCase()}</span>
            </div>
            <p className='short-desc'>{shortDesc}</p>
            <button className="buy-btn" onClick={addToCart}> اضافة للسله </button>
          </div>
        </div>
      </section>
      <section className='product-wrapper'>
        <div className="container">
          <div className="tab-wrapper">
            <h6 className={`${tab ==='desc'? 'active-tab' :''}`} onClick={()=>setTab('desc')}> وصف المتج </h6>
            <h6 className={`${tab ==='rev'? 'active-tab' :''}`} onClick={()=>setTab('rev')}> المراجعات ({reviews.length})</h6>
          </div>
          {
            tab === 'desc' ?<div className="tab-content">
            <p>{description}</p>
          </div> : <div className="product-review">
            <div className="review-wrapper">
              <ul>
                {
                  reviews?.map((item,index) => (
                    <li key={index}><span>{item.rating} (rating)</span>
                    <p>{item.text}</p>
                    </li>
                  ))
                }
              </ul>
                <div className="review-form">
                  <h4>Leave your experience</h4>
                  <form action="" onSubmit={submitHandler}>
                    <div className="form-contant">
                      <input type="text" placeholder='Enter your name' ref={reviewUser}  required/>
                    </div>
                    <div className="form-contant">
                      <span onClick={()=> setRating(1)}>1<i className='fa-solid fa-star'></i></span>
                      <span onClick={() => setRating(2)}>2<i className='fa-solid fa-star'></i></span>
                      <span onClick={() => setRating(3)}>3<i className='fa-solid fa-star'></i></span>
                      <span onClick={() => setRating(4)}>4<i className='fa-solid fa-star'></i></span>
                      <span onClick={() => setRating(5)}>5<i className='fa-solid fa-star'></i></span>
                    </div>
                    <div className="form-contant">
                      <textarea rows={4} type="text" placeholder='Enter your review....' ref={reviewMsg} required/>
                    </div>
                    <button type='submit' className='buy-btn'>Submit</button>
                  </form>
                </div>
            </div>
          </div>
          }
        </div>
        <div className="container-conatent">
          <h2 className='title'> منتجات ذات صلة </h2>
          <ProductsList data={relatedProduct}/>
        </div>
      </section>
    </Helmet>
  );
}

export default ProductDetails;
