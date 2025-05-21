import React, { useEffect } from 'react'
import { useState } from 'react';
import useFetch from '../../assets/hooks/useFetch';
import Loader from '../loader/Loader';
import ProductsCategory from '../productsCategory/ProductsCategory';
import { Link } from 'react-router-dom';
import styles from './category.module.css'

export default function Categories() {

  const {data,error,isLoading} = useFetch('https://dummyjson.com/products/category-list');
  if(isLoading)return <Loader/>
    
  return (
    <>
    {error? <div className='alert alert-danger'>{error}</div>:''}
    <div className="my-container">
        <h1>Categories List</h1>
        <div className={styles.categoryGrid}>
            {
              data.map(category=>
                <div className={styles.categoryCard}>
                  <h2>{category}</h2>
                    <Link className='btn btn-primary' to={`/category/${category}`}>Explore</Link>
                </div>
              )
            }
        </div>
    </div>
      
    </>
  )
}
