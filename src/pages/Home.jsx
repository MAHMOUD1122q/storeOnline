import React,{useState,useEffect} from 'react';
import Helmet from '../components/Helmet/Helmet';
import Sliderimg from "../assets/images/slider 3.jpg"
import {Link} from "react-router-dom"
import "../styles/Home.css"
import ProductList from '../UI/ProductList';
import products from '../assets/data/products';
// import Services from '../Services/Services';

const Home = () => {

  const [trendingProduct,setTrendingProduct] = useState([])
  const [bestProducts,setbestProducts] = useState([])
  const [mobileProducts,setmobileProducts] = useState([])
  const [wirelessProducts,setwirelessProducts] = useState([])

  useEffect(()=>{
    const filteredTrendingProducts = products.filter(item =>item.category === 'electronics');
    const filteredBestProducts = products.filter(item =>item.category === 'clothes');
    const filteredmobileProducts = products.filter(item =>item.category === 'beauty');
    const filteredwirelessProducts = products.filter(item =>item.category === 'house');
    setTrendingProduct(filteredTrendingProducts)
    setbestProducts(filteredBestProducts)
    setmobileProducts(filteredmobileProducts)
    setwirelessProducts(filteredwirelessProducts)
  },[]);
  return (
    <Helmet title="Home">
      <section className='landing'>
        <div className="container" style={{width:'100%'}}>
            {/* <button><Link to="/shop">SHOP NOW</Link></button> */}
          <img src={Sliderimg} className='image' alt="img" style={{width:'calc(100% , 200px)'}}/>
        </div>
      </section>
      <section className='trend-product'>
        <h2 className='heading-title'> المنتجات الشائعة</h2>
        <ProductList data={trendingProduct}/>
      </section>
      <section className='best'>
        <h2 className='heading-title'> الاكثر مبيعا </h2>
        <ProductList data={bestProducts}/>
      </section>
      <section className='new-arrival'>
      <h2 className='heading-title'> مضاف حديثا </h2>
      <ProductList data={mobileProducts}/>
      <ProductList data={wirelessProducts}/>
      </section>
    </Helmet>
  );
}

export default Home;
