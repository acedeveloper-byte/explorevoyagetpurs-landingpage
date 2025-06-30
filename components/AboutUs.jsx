"use client";
import React from 'react'
import style from "@/ui/about.module.css";
import { FaArrowRight } from 'react-icons/fa';
import CountUp from 'react-countup';


const AboutUs = () => {
  return (
    <div className={style.container}>
      <div className={style.headingArea}>
        <h3>Explore Tours And Travels, <br /> World's Best Travel Agency <strong><i>Since 2020.</i></strong></h3>
      </div>
      <div className={style.row}>
        <div className={style.leftCard}>
            <div className={style.leftImage}>
                <img src="./nyc.jpg" alt="new york image" />
            </div>
        </div>
        <div className={style.rightCard}>
          <div className={style.imageContainer}>
            <div>
                <img src="./california.jpg" alt="california image" />
            </div>
            <div>
                <img src="./mountain-sculpture.jpg" alt="sculpture image" />
            </div>
          </div>
          <div className={style.para}>
            <p>At Explore Tours and Travels, we make your dream journeys a reality. From seamless visa services to hassle-free air ticket booking and curated tour packages, we ensure your travel experience is stress-free and unforgettable. Whether you’re seeking adventure or relaxation, our expert team is here to guide you every step of the way. Explore the world with ease and comfort—travel with us!</p>
            <button className={style.cta}>Explore Now <FaArrowRight /></button>
          </div>
          <div className={style.counterContainer}>
            <div className={style.countBox}>
                <p className={style.countNum}><span><CountUp end={50} /></span> K+</p>
                <p className={style.comment}>Happy Traveller</p>
            </div>
            <div className={style.countBox}>
                <p className={style.countNum}><span><CountUp end={165} /></span> K+</p>
                <p className={style.comment}>Travel Destinations</p>
            </div>
            <div className={style.countBox}>
                <p className={style.countNum}><span><CountUp end={16} /></span> K+</p>
                <p className={style.comment}>Year Of Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;