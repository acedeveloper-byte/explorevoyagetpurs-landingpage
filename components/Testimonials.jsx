"use client";
import React from "react";
import style from "@/ui/tesimonials.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Testimonials = () => {
  return (
    <div className={style.container}>
      <div className={style.headingArea}>
        <h3>
          Amazing Reviews From Our{" "}
          <strong>
            <i>Travelers</i>
          </strong>
        </h3>
        <p>
          Read some interesting reviews and experiences from travelers about
          Their Travels With Us
        </p>
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
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className={style.card}>
              <div className={style.top}>
                <div className={style.image}>
                  <img src="./portrait1.jpg" alt="customer" />
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
              <p className={style.comment}>
                <RiDoubleQuotesL />
                Our honeymoon trip to Bali was nothing short of perfection, as everything, right from the beach villa to the candlelit dinner, was extremely well organized. We had no concerns whatsoever, and we cherished each and every moment we spent together.
                <RiDoubleQuotesR />
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.card}>
              <div className={style.top}>
                <div className={style.image}>
                  <img src="./person3.png" alt="traveler" />
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
              <p className={style.comment}>
                <RiDoubleQuotesL />
                This was the ideal holiday for our family! The holiday was well spaced out with some fun activities to do with the children and relaxation for us. The hotels were excellent with amenities to suit the needs of all!
                <RiDoubleQuotesR />
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.card}>
              <div className={style.top}>
                <div className={style.image}>
                  <img src="./man.jpg" alt="traveler" />
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
              <p className={style.comment}>
                <RiDoubleQuotesL />
                Organizing corporate travel is typically a hassle, but today it was perfect. The employees coordinated everything from flights to meeting rooms, and I could concentrate on my job. Great service!
                <RiDoubleQuotesR />
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.card}>
              <div className={style.top}>
                <div className={style.image}>
                  <img src="./person4.png" alt="traveler" />
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
              <p className={style.comment}>
                <RiDoubleQuotesL />
                What an adrenaline rush! From zip-lining across the rainforest to white-water rafting, this adventure package was amazing. The guides were so nice and very knowledgeable about the local and surrounding wildlife!
                <RiDoubleQuotesR />
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
