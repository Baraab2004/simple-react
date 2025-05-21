import React from 'react'
import styles from './about.module.css'
import myPic from '../../assets/images/myPic.jpg'

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.introSection}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.description}>
          Welcome to our project! Our mission is to provide high-quality
          products with a seamless shopping experience. We are passionate about
          innovation, design, and meeting the needs of our customers.
        </p>
      </div>
      <div className={styles.goalsSection}>
        <h2>Our Goals</h2>
        <ul className={styles.goalsList}>
          <li>Deliver exceptional customer service.</li>
          <li>Offer premium products at affordable prices.</li>
          <li>Promote sustainable and eco-friendly practices.</li>
        </ul>
      </div>

      <div className={styles.teamSection}>
        <h2>Meet the Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <img src={myPic} className={styles.teamImage}/>
            <h3>Ahmed Baker</h3>
            <p>Lead Developer</p>
          </div>

          <div className={styles.teamMember}>
            <img src={myPic} className={styles.teamImage} />
            <h3>Tareq Ibrahim</h3>
            <p>UI/UX Designer</p>
          </div>

          <div className={styles.teamMember}>
            <img src={myPic} className={styles.teamImage} />
            <h3>Omar Hasan</h3>
            <p>Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  )
}
