import React from 'react'
import useFetch from '../../assets/hooks/useFetch'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader';
import styles from './SingleProduct.module.css'

export default function SingleProduct() {

    const {id} = useParams();
    const {data,error,isLoading} = useFetch(`https://dummyjson.com/products/${id}`);

    if(isLoading)return <Loader/>
  return (
    <>
    {error? <div className='alert alert-danger'>{error}</div>:''}
    <div className={styles.productContainer}>
        <div className={styles.productImages}>
            <img id="main-image" src={data.thumbnail} />
            <div className={styles.thumbnailImages}>
            {data.images.map((image, index) => (
                <img key={index} src={image} onClick={() => (document.getElementById("main-image").src = image)}/>
            ))}
            </div>
        </div>

        <div className={styles.productDetails}>
            <h1 className={styles.productTitle}>{data.title}</h1>
            <p id={styles.productDescription}>{data.description}</p>
            <p className={styles.productCategory}>
            <strong>Category:</strong> {data.category}
            </p>
            <p className={styles.productPrice}>
            <strong>Price:</strong> ${data.price}
            </p>
            <p className={styles.productDiscount}>
            <strong>Discount:</strong> {data.discountPercentage}% Off
            </p>
            <p className={styles.productRating}>
            <strong>Rating:</strong> {data.rating} ⭐
            </p>
            <p className={styles.productStock}>
            <strong>Stock:</strong> {data.stock}
            </p>
            <p className={styles.productTags}>
            <strong>Tags:</strong> {data.tags.join(", ")}
            </p>
            <p className={styles.productWarranty}>
            <strong>Warranty:</strong> {data.warrantyInformation}
            </p>
            <p className={styles.productShipping}>
            <strong>Shipping:</strong> {data.shippingInformation}
            </p>
            <div className={styles.productActions}>
            <button id="add-to-cart" className='btn btn-primary p-2 me-2'>Add to Cart</button>
            <button id="buy-now" className='btn btn-primary p-2'>Buy Now</button>
            </div>
        </div>

        <div className={styles.productReviews}>
            <h2>Customer Reviews</h2>
            {data.reviews.length > 0 ? (
            data.reviews.map((review, index) => (
                <div key={index} className={styles.review}>
                <p><strong>{review.reviewerName}</strong> ({review.rating} ⭐)</p>
                <p>"{review.comment}"</p>
                <small>Reviewed on: {new Date(review.date).toLocaleDateString()}</small>
                </div>
            ))
            ) : (
            <p>No reviews yet!</p>
            )}
        </div>
    </div>

    </>
  )
}
