
import React from 'react'
import useFetch from '../../assets/hooks/useFetch'
import { Link, useParams } from 'react-router-dom';
import Loader from '../loader/Loader';
import SingleProduct from '../singleProduct/SingleProduct';
import styles from '../products/Products.module.css'

export default function ProductsCategory() {

    const {product} = useParams();

    const {data,error,isLoading} = useFetch(`https://dummyjson.com/products/category/${product}`);

    if(isLoading)return <Loader/>
  return (
    <>
    {error? <div className='alert alert-danger'>{error}</div>:''}

    <div className="my-container">
        <h1>Products List for {product}</h1>
        <div className={styles.productGrid}>
        {
        data.products.map(product=>
          <div className={styles.productCard} key={product.id}>
            <img src={product.thumbnail} alt="" />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p className={styles.price}>{product.price}$</p>
            <Link className="btn btn-primary" to={`/products/${product.id}`}>More Details</Link>
          </div>
        )
      }
      </div>
    </div>
    </>
  )
}
