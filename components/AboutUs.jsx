"use client";
import React from 'react'
import style from "@/ui/about.module.css";
import { FaArrowRight } from 'react-icons/fa';
import CountUp from 'react-countup';


const AboutUs = () => {
  return (
    <div className={style.container}>
      <div className={style.headingArea}>
        <h3>Explore Voyage Packages, <br /> World's Best Travel Agency <strong><i>Since 2020.</i></strong></h3>
      </div>
      <div className={style.row}>
        <div className={style.leftCard}>
            <div className={style.leftImage}>
                <img src="./nyc.webp" alt="new york image" />
            </div>
        </div>
        <div className={style.rightCard}>
          <div className={style.imageContainer}>
            <div>
                <img src="./california.webp" alt="california image" />
            </div>
            <div>
                <img src="./mountain-sculpture.webp" alt="sculpture image" />
            </div>
          </div>
          <div className={style.para}>
            <p>At Explore Voyage Packages, we make your dream vacations come alive. With our full visa services, hassle-free air ticket, and carefully crafted tour packages, we make your journey convenient and memorable. Whether you seek adventure or peace of mind, our expert team is here to guide you every step of the way. Travel the world in comfort and convenience—come, join us!</p>
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