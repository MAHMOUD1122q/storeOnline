import React,{useState,useEffect} from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../UI/commonSection';
import products from "../assets/data/products"
import ProductList from '../UI/ProductList'

const Clothes = () => {

  const [productsData,setProductsData] = useState(products)
  useEffect(()=>{
    const ClothesProducts = products.filter(item =>item.category === 'clothes');
    setProductsData(ClothesProducts)
  },[]);
  return (
    <Helmet title=' ملابس '>
      <CommonSection title=' ملابس'/>
      <section style={{paddingTop:'50px' , paddingBottom:'50px'}}>
        <ProductList data={productsData}/>
      </section>
    </Helmet>
  );
}

export default Clothes;
