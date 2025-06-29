"use client";
import React from 'react'
import style from "@/ui/tesimonials.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { FaStar } from 'react-icons/fa';
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";


const Testimonials = () => {
  return (
    <div className={style.container}>
      <div className={style.headingArea}>
        <h3>Amazing Reviews From Our <strong><i>Travelers</i></strong></h3>
        <p>Read some interesting reviews and experiences from travelers about Their Travels With Us</p>
      </div>
      <div className={style.row}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1
            },
            640: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
        >
          <SwiperSlide>
            <div className={style.card}>
              <div className={style.top}>
                <div className={style.image}>
                  <img src="./home.jpg" alt="customer" />
                </div>
                <div className={style.name}>
                  <h4>Mortimer Cobbett</h4>
                  <p>Our traveler</p>
                  <div className={style.ratings}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p className={style.comment}><RiDoubleQuotesL />Our honeymoon trip to Bali was beyond perfect! Everything from the beachfront villa to the candlelight dinner was arranged flawlessly. We didn’t have to worry about a thing, just enjoyed every moment together<RiDoubleQuotesR /></p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.card}>
              <div className={style.top}>
                <div className={style.image}>
                  <img src="./home.jpg" alt="customer" />
                </div>
                <div className={style.name}>
                  <h4>Sienna Montgomery</h4>
                  <p>Our traveler</p>
                  <div className={style.ratings}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p className={style.comment}><RiDoubleQuotesL />This was the perfect vacation for our family! The itinerary was balanced with fun activities for the kids and relaxation for us. The hotel choices were fantastic, with amenities to keep everyone happy!<RiDoubleQuotesR /></p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.card}>
              <div className={style.top}>
                <div className={style.image}>
                  <img src="./home.jpg" alt="customer" />
                </div>
                <div className={style.name}>
                  <h4>Lesley Schwartz</h4>
                  <p>Our traveler</p>
                  <div className={style.ratings}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p className={style.comment}><RiDoubleQuotesL />Planning corporate travel is usually a hassle, but this time it was seamless. The team organized everything from flights to meeting rooms, leaving me free to focus on my work. Exceptional service!<RiDoubleQuotesR /></p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.card}>
              <div className={style.top}>
                <div className={style.image}>
                  <img src="./home.jpg" alt="customer" />
                </div>
                <div className={style.name}>
                  <h4>Lucy Anderson</h4>
                  <p>Our traveler</p>
                  <div className={style.ratings}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p className={style.comment}><RiDoubleQuotesL />"What an adrenaline rush! From zip-lining through the rainforest to white-water rafting, this adventure package was amazing. The guides were friendly and very knowledgeable about the local wildlife!<RiDoubleQuotesR /></p>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className={style.cardContainer}>
          <div className={style.card}>
            <div className={style.top}>
              <div className={style.image}>
                <img src="./home.jpg" alt="customer" />
              </div>
              <div className={style.name}>
                <h4>Mortimer Cobbett</h4>
                <p>Our traveler</p>
                <div className={style.ratings}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <p className={style.comment}><RiDoubleQuotesL />Our honeymoon trip to Bali was beyond perfect! Everything from the beachfront villa to the candlelight dinner was arranged flawlessly. We didn’t have to worry about a thing, just enjoyed every moment together<RiDoubleQuotesR /></p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Testimonials;