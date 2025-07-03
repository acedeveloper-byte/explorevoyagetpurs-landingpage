import React from 'react'
import style from "@/ui/aboutpage.module.css";

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.heading}>
          <h3 className={style.title}>About Us</h3>
        </div>
        <div className={style.aboutContent}>
          <p>At <strong>Explore Voyage Packages</strong>, we think that travelling is about making lifelong memories rather than just getting somewhere. With meticulous preparation, individualised attention, and a passion for exploration, we are committed to making your ideal vacations a reality.</p>
          <p>Having worked in the travel and tourist industry for many years, we offer door-to-door travel services based on your preferences.  We offer a hassle-free and delightful experience from comprehensive visa services and easy airline ticket buying to personalised holiday packages.</p>
          <p>Our skilled staff of travel experts is available to help you at every stage, whether you're searching for a tranquil retreat or an exhilarating encounter.  With the help of our carefully chosen partners and local experts around the globe, we offer trips that are exciting, safe, and genuinely remarkable.</p>
          <p>The comfort, convenience, and satisfaction of our clients are our top priorities at Explore Voyage Packages. So that you may concentrate on exploring the world, one amazing trip at a time, let us handle the details.</p>
        </div>
      </div>
    </div>
  )
}

export default About;