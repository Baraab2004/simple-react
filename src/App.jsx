import React from 'react'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import { Route, Routes } from 'react-router-dom'
import Categories from './components/categories/Categories'
import Products from './components/products/Products'
import ProductsCategory from './components/productsCategory/ProductsCategory'
import SingleProduct from './components/singleProduct/SingleProduct'
import Features from './components/features/Features'
import CreateProduct from './components/createProduct/CreateProduct'
export default function App() {
  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path={'/categories'} element={<Categories/>}/>
        <Route path={'/products'} element={<Products/>}/>
        <Route path={'/category/:product'} element={<ProductsCategory/>}/>
        <Route path={'/products/:id'} element={<SingleProduct/>}/>
        <Route path={'/createProduct'} element={<CreateProduct/>}/>
      </Routes>

      <About/>
      <Features/>
      <Footer/>
    </div>
  )
}
