import React from 'react'
import styles from './CreateProduct.module.css'

export default function CreateProduct() {
  return (
    <div>
      <div className={styles.formContainer}>
      <h2 className={styles.title}>Create New Product</h2>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="title">Product Title</label>
        <input type="text" id="title" name="title" placeholder="Enter product title" className={styles.input} required/>

        <label className={styles.label} htmlFor="description">Description</label>
        <textarea id="description" name="description" placeholder="Enter product description"
         className={styles.textarea} required
        ></textarea>

        <label className={styles.label} htmlFor="category">Category</label>
        <input type="text" id="category" name="category" placeholder="Enter product category" className={styles.input} required/>

        <label className={styles.label} htmlFor="price">Price ($)</label>
        <input type="number" id="price" name="price" placeholder="Enter product price" className={styles.input} required/>

        <label className={styles.label} htmlFor="stock">Stock</label>
        <input type="number" id="stock" name="stock" placeholder="Enter stock quantity" className={styles.input} required/>

        <label className={styles.label} htmlFor="thumbnail">Thumbnail URL</label>
        <input type="text" id="thumbnail" name="thumbnail" placeholder="Enter thumbnail URL" className={styles.input}/>

        <button type="submit" className="btn btn-primary"> Create Product </button>
      </form>
    </div>
    </div>
  )
}
