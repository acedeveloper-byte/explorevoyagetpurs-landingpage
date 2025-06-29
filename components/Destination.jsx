import React from 'react'
import styles from "@/ui/destination.module.css"
const Destination = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingArea}>
        <h3>Discover Your Next Dream <strong><i>Destination</i></strong></h3>
        <p>Here are some of the most visited destinations by tourists in 2024.</p>
      </div>

      <div className={styles.gridWrapper}>
      <div className={styles.leftGrid}>
          <div className={styles.destinationCard}>
            <div className={styles.imageContainer}>
              <img src="./home.jpg" alt="home" className={styles.image} />
              <div className={styles.overlay} />
              <div className={styles.textWrapper}>
                {/* <span className={styles.badge}>Dubai</span> */}
                <div className={styles.textGroup}>
                  <p className={styles.title}>Dubai</p>
                  <p className={styles.label}>Deira</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.destinationCard}>
            <div className={styles.imageContainer}>
              <img src="./home.jpg" alt="home" className={styles.image} />
              <div className={styles.overlay} />
              <div className={styles.textWrapper}>
                {/* <span className={styles.badge}>Dubai</span> */}
                <div className={styles.textGroup}>
                  <p className={styles.title}>Bali – Island</p>
                  <p className={styles.label}>Indonesia</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.destinationCard}>
            <div className={styles.imageContainer}>
              <img src="./home.jpg" alt="home" className={styles.image} />
              <div className={styles.overlay} />
              <div className={styles.textWrapper}>
                {/* <span className={styles.badge}>Dubai</span> */}
                <div className={styles.textGroup}>
                  <p className={styles.title}>Perhentian Islands</p>
                  <p className={styles.label}>Malaysia</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.destinationCard}>
            <div className={styles.imageContainer}>
              <img src="./home.jpg" alt="home" className={styles.image} />
              <div className={styles.overlay} />
              <div className={styles.textWrapper}>
                {/* <span className={styles.badge}>Dubai</span> */}
                <div className={styles.textGroup}>
                  <p className={styles.title}>Marina Bay Sands</p>
                  <p className={styles.label}>Singapore</p>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className={styles.promoContainer}>
        <div className={styles.promoCard}>
          <img src="./home.jpg" alt="Promo" className={styles.image} />
          <div className={styles.overlayLight} />
          <div className={styles.promoContent}>
            <p className={styles.promoTitle}>Jeju Island</p>
            <p className={styles.promoButton}>South Korea</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Destination;