import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Rating from '../components/Rating';
import Carousel from '../components/Carousel';
import { listProducts } from '../actions/productActions';


function Home (props) {


  const productList = useSelector(state => state.productList);
  const { error, loading, products } = productList ;
  const dispatch = useDispatch();


  useEffect(() => {
   dispatch(listProducts());

  return () => {
     console.log(products);
  };
  }, [])

    return  loading ? <div>Loading...</div> :
    error? <div> {error} </div> :
    <div className="homescreen">
    <div className="mastercarousel">
    <Carousel />
    </div>
    <div className="productlistscreen">
    <ul className="products">
    {
      products.map( (product) => 
        <li key={product._id}>
        <div className="product">
        <Link to = {'/products/' + product._id}> <img className="product-image" src= {product.image} alt="product" /> </Link>
          <div className="product-name">
            <Link to = {'/products/' + product._id}>{product.name}</Link>
          </div>
       <div className="product-brand">{product.brand}</div>
       <div className="product-price">Rs. {product.price}</div>
          <div className="product-rating">
          <Rating
          rating={product.rating}
          numReviews={product.numReviews}
          ></Rating>
          </div>
         </div>
        </li> )
    }  
  </ul>
  </div>
  </div>
}

export default Home;