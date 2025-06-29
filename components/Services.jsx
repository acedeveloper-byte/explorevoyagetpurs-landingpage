import React from 'react'
import style from "@/ui/services.module.css";
import { FaArrowRight } from 'react-icons/fa';


const Services = () => {
  return (
    <div className={style.container}>
      <div className={style.headingArea}>
        <h3>Making Your Travel Seamless <strong><i>with Expert Services</i></strong></h3>
        <p>Explore our Exclusive Tour Packages, crafted to showcase the unique charm and highlights of each destination.</p>
      </div>
      <div className={style.row}>
        <div className={style.serviceCard}>
          <div className={style.serviceImage}>
            <img src="./home.jpg" alt="our service" />
          </div>
          <div className={style.serviceContent}>
            <h4>Visa Services</h4>
            <p>Simplify your travel preparations with our hassle-free visa assistance, tailored to meet your destination requirements.</p>
            <button className={style.cta}>Explore Now <FaArrowRight /></button>
          </div>
        </div>
        <div className={style.serviceCard}>
          <div className={style.serviceImage}>
            <img src="./home.jpg" alt="our service" />
          </div>
          <div className={style.serviceContent}>
            <h4>Air Ticket Booking</h4>
            <p>Enjoy convenient and cost-effective flight arrangements to your chosen destinations worldwide.</p>
            <button className={style.cta}>Explore Now <FaArrowRight /></button>
          </div>
        </div>
        <div className={style.serviceCard}>
          <div className={style.serviceImage}>
            <img src="./home.jpg" alt="our service" />
          </div>
          <div className={style.serviceContent}>
            <h4>Tour Packages</h4>
            <p>Explore our expertly curated tour packages designed to suit your preferences, from relaxing getaways to thrilling adventures.</p>
            <button className={style.cta}>Explore Now <FaArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;