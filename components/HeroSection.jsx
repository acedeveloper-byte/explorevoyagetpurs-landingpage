import React from "react";
import style from "@/ui/herosection.module.css";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.left}>
        <span className={style.capsule}>#1 The Best Travel Agency</span>
        <p className={style.head}>
          Unlock the Wonders of the{" "}
          <strong>
            <i>World</i>
          </strong>{" "}
          With Explore Tours And Travels
        </p>
        <p className={style.subpara}>
          Welcome to Explore Tours And Travels, a premier tour and travel agency
          committed to transforming your travel dreams into reality.
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
