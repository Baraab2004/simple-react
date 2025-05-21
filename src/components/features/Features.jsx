import React from 'react'
import styles from './Features.module.css'
import highQualityProduct from '../../assets/images/favorites.png'
import affordablePrices from '../../assets/images/affordable.png'
import fastDelivery from '../../assets/images/fast-delivery.png'
import support from '../../assets/images/24-hours-support.png'



export default function Features() {
  return (
    <div className={styles.featuresContainer}>
    <h1 className={styles.title}>Why Choose Us?</h1>
    <div className={styles.featuresGrid}>
      <div className={styles.feature}>
        <img src={highQualityProduct} className={styles.featureIcon}/>
        <h3 className={styles.featureTitle}>High Quality Products</h3>
        <p className={styles.featureDescription}>
          We offer products that are carefully selected and tested for the
          best quality.
        </p>
      </div>

      <div className={styles.feature}>
        <img src={affordablePrices} className={styles.featureIcon}
        />
        <h3 className={styles.featureTitle}>Affordable Prices</h3>
        <p className={styles.featureDescription}>
          Get the best value for your money with our competitively priced
          products.
        </p>
      </div>

      <div className={styles.feature}>
        <img src={fastDelivery} className={styles.featureIcon} />
        <h3 className={styles.featureTitle}>Fast Delivery</h3>
        <p className={styles.featureDescription}>
          Enjoy quick and reliable shipping, ensuring your order arrives on
          time.
        </p>
      </div>

      <div className={styles.feature}>
        <img src={support} className={styles.featureIcon}
        />
        <h3 className={styles.featureTitle}>24/7 Customer Support</h3>
        <p className={styles.featureDescription}>
          Our dedicated team is here to assist you with any questions or
          concerns.
        </p>
      </div>
    </div>
  </div>
  )
}
