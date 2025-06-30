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
            <img src="./cruise.jpg" alt="cruise booking services" />
          </div>
          <div className={style.serviceContent}>
            <h4>Cruise Booking</h4>
            <p>Set sail with ease through our seamless cruise booking service, designed to match your travel preferences and deliver unforgettable ocean adventures.</p>
            <button className={style.cta}>Explore Now <FaArrowRight /></button>
          </div>
        </div>
        <div className={style.serviceCard}>
          <div className={style.serviceImage}>
            <img src="./plane-landing.jpg" alt="flight booking service" />
          </div>
          <div className={style.serviceContent}>
            <h4>Air Ticket Booking</h4>
            <p>Enjoy convenient and cost-effective flight arrangements to your chosen destinations worldwide.</p>
            <button className={style.cta}>Explore Now <FaArrowRight /></button>
          </div>
        </div>
        <div className={style.serviceCard}>
          <div className={style.serviceImage}>
            <img src="./statue-of-liberty.jpg" alt="statue of liberty image" />
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