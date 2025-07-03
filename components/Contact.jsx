import React from 'react';
import style from "@/ui/contact.module.css";
import Image from 'next/image';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.left}>
          <div className={style.image}>
            <img src="./customer-care.webp" alt="contact image" />
          </div>
        </div>
        <div className={style.right}>
          <div className={style.content}>
            <div className={style.head}>
              <h3>Contact Us</h3>
              <p>Please contact us using the information below if you have any questions.</p>
            </div>
            <div className={style.contactInfo}>
              <p><FaPhoneAlt size={40} /> <span className={style.info}>+1 0000000000</span></p>
              {/* <p><strong>Phone Number:</strong> <span className={style.info}>+1 0000000000</span></p> */}
              <p><FaLocationDot size={40} /> <span className={style.info}>3612 Windshire Dr Springfield, IL 62704, USA</span></p>
              {/* <p><strong>Address: </strong> <span className={style.info}>3612 Windshire Dr Springfield, IL 62704, USA</span></p> */}
              <p><MdEmail size={40} /> <span className={style.info}>info@explorevoyagepackages.com</span></p>
              {/* <p><strong>Email: </strong> <span className={style.info}>info@explorevoyagepackages.com</span></p> */}
            </div>
          </div>
        </div>
        <form className={style.form}>
          <div className={`${style.grid} ${style.gridTwoCols}`}>
            <div>
              <label htmlFor="fullname" className={style.label}>Full Name</label>
              <input id="fullname" name="fullName" type="text" placeholder="Full Name" required  className={style.input} />
            </div>
            {/* <div>
              <label htmlFor="lastName" className={style.label}>Last Name</label>
              <input id="lastName" name="lastName" type="text" placeholder="Last Name" required  className={style.input} />
            </div> */}
          </div>
          <div className={style.formGroup}>
            <label htmlFor="email" className={style.label}>Email</label>
            <input id="email" name="email" type="email" placeholder="Email Address" required  className={style.input} />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="subject" className={style.label}>Subject</label>
            <input id="subject" name="subject" type="text" placeholder="Subject" required className={style.input} />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="message" className={style.label}>Message</label>
            <textarea id="message" name="message" placeholder="Your message here...." rows={5} required  className={style.textarea} />
          </div>
          <button type="submit" className={style.button}>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;