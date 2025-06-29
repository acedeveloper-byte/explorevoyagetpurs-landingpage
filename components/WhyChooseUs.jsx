import React from 'react'
import style from "@/ui/whychooseus.module.css";
import { FaUser } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

const WhyChooseUs = () => {
  return (
    <div className={style.container}>
      <div className={style.headingArea}>
        <h3>Why Choose <strong><i>Voyage Tours And Travels?</i></strong></h3>
      </div>
      <div className={style.row}>
        <div className={style.left}>
            <p>At Voyage Tours and Travels, we take pride in delivering exceptional travel experiences that go far beyond mere bookings. Here’s why travelers choose us for their adventures!</p>
            <div className={style.staggerCards}>
              <div className={style.card}>
                <p className={style.icon}><FaUser size={20} /></p>
                <div className={style.cardContent}>
                    <h4>Expert Guidance</h4>
                    <p>Our experienced travel experts ensure every detail of your trip is perfect.</p>
                </div>
              </div>
              <div className={style.card}>
                <p className={style.icon}><MdAttachMoney size={20} /></p>
                <div className={style.cardContent}>
                    <h4>Best Price Guarantee</h4>
                    <p>We offer value-for-money packages without compromising on quality.</p>
                </div>
              </div>
              <div className={style.card}>
                <p className={style.icon}><BiWorld size={20} /></p>
                <div className={style.cardContent}>
                    <h4>Sustainable Travel Practices</h4>
                    <p>We support eco-friendly tourism to preserve the environment & local communities.</p>
                </div>
              </div>
            </div>
        </div>
        <div className={style.right}>
          <div className={style.image}>
            <img src="./home.jpg" alt="why us image" />
          </div>
          <div className={style.image}>
            <img src="./home.jpg" alt="why us image" />
          </div>
          <div className={style.image}>
            <img src="./home.jpg" alt="why us image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs;