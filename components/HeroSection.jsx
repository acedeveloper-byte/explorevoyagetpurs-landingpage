import React from "react";
import style from "@/ui/herosection.module.css";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.left}>
        <span className={style.capsule}>#1 The Best Travel Agency</span>
        <p className={style.head}>
          Discover the{" "}
          <strong>
            <i>World's</i>
          </strong>{" "}
          Treasures with Our Curated Explore Voyage Packages
        </p>
        <p className={style.subpara}>
          Welcome to Explore Voyage Packages – a premier tour and travel agency dedicated to turning your travel aspirations into unforgettable realities.
        </p>
        <button className={style.cta}>
          Explore Now <FaArrowRight />
        </button>
      </div>
      <div className={style.right}>
        <div className={style.image}>
          <img src="./statue.jpg" alt="statue of liberty" className={style.image} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
