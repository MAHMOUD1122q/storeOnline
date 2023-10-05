import React, {useState} from 'react';
import CommonSection from '../UI/commonSection';
import Helmet from '../components/Helmet/Helmet';
import '../styles/shop.css'
import products from "../assets/data/products"
import ProductList from '../UI/ProductList'

const Shop = () => {

const [productsData,setProductsData] = useState(products)

const handleFilter= (e) => {
  const filterValue = e.target.value;
  if (filterValue ==="clothes") {
    const filterproducts = products.filter((item)=> item.category === "clothes");
    setProductsData(filterproducts) ;
  }
  if (filterValue ==="beauty") {
    const filterproducts =products.filter((item)=> item.category === "beauty");
    setProductsData(filterproducts) ;
  }
  if (filterValue ==="electronics") {
    const filterproducts =products.filter((item)=> item.category === "electronics");
    setProductsData(filterproducts) ;
  }
  if (filterValue ==="beauty") {
    const filterproducts =products.filter((item)=> item.category === "beauty");
    setProductsData(filterproducts) ;
  }
  if (filterValue ==="house") {
    const filterproducts =products.filter((item)=> item.category === "house");
    setProductsData(filterproducts) ;
  }
}
const handleSearch = (e) => {
  const searchTerm = e.target.value;
  const searchedProduct = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
  setProductsData(searchedProduct);
}
  return (
    <Helmet title="Shop">
      <CommonSection title="كل المنتجات"/>

      <section className='product'>
        <div className="conatiner">
          <div className="col">
            <div className="filter">
              <select name="" id="" onChange={handleFilter}>
                <option> فئات </option>
                <option value="clothes"> ملابس </option>
                <option value="electronics"> الكترونيات </option>
                <option value="beauty"> الجمال </option>
                <option value="house"> مستلزمات المنزل </option>
              </select>
            </div>
          </div>
          {/* <div className="col">
            <div className="filter">
              <select name="" id="">
                <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </div> */}
          <div className="col">
            <div className="search-bar">
              <input type="text" placeholder=' ابحث عن الذي تريده.....' onChange={handleSearch}/>
              <span>
                <i className='fa-solid fa-search'></i>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className='data'>
        <div className="container" style={{marginLeft:'50px'}}>
          {
            productsData.length === 0 ?(<h1 className='heading-no-product'> ليس هناك منتجات ! </h1>): (<ProductList data={productsData}/>) 
          }
        </div>
      </section>
    </Helmet>
  );
}

export default Shop;
