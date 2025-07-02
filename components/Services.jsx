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
            <img src="./cruise.webp" alt="cruise booking services" />
          </div>
          <div className={style.serviceContent}>
            <h4>Sail In Sea</h4>
            <p>Set sail with ease through our seamless cruise booking service, designed to match your travel preferences and deliver unforgettable ocean adventures.</p>
            <button className={style.cta}>Explore Now <FaArrowRight /></button>
          </div>
        </div>
        <div className={style.serviceCard}>
          <div className={style.serviceImage}>
            <img src="./plane-landing.webp" alt="flight booking service" />
          </div>
          <div className={style.serviceContent}>
            <h4>Fly In Air</h4>
            <p>Access reliable and affordable flight solutions tailored to your travel needs worldwide.</p>
            <button className={style.cta}>Explore Now <FaArrowRight /></button>
          </div>
        </div>
        <div className={style.serviceCard}>
          <div className={style.serviceImage}>
            <img src="./statue-of-liberty.webp" alt="statue of liberty image" />
          </div>
          <div className={style.serviceContent}>
            <h4>Tour Packages</h4>
            <p>Discover our expertly curated tour packages, thoughtfully designed to match your unique preferences from tranquil escapes to exhilarating adventures..</p>
            <button className={style.cta}>Explore Now <FaArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;