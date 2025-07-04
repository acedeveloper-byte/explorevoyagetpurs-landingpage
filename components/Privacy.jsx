import React from 'react'
import style from "@/ui/privacy.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Privacy = () => {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.heading}>
          <h3 className={style.title}>Privacy Policy</h3>
        </div>
        <div className={style.content}>
          <section className={style.section}>
            <h2>1. Information We Collect</h2>
            <p>
              We may collect personal information when you:
            </p>
            <ul>
              <li>Book a tour or travel service</li>
              <li>Fill out a contact or inquiry form</li>
              {/* <li>Subscribe to our newsletter</li> */}
              <li>Communicate with us via email, phone, or live chat</li>
            </ul>
            <p>This may include your name, email, phone number, passport details, payment information, and travel preferences.</p>
          </section>

          <section className={style.section}>
            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Process bookings and travel arrangements</li>
              <li>Provide customer support</li>
              <li>Send trip updates and confirmations</li>
              <li>Share offers or newsletters (with your consent)</li>
              <li>Fulfill legal obligations</li>
            </ul>
          </section>

          <section className={style.section}>
            <h2>3. Sharing Your Information</h2>
            <p>We may share your information with trusted service providers like airlines and payment processors. We do not sell your data to third parties.</p>
          </section>

          <section className={style.section}>
            <h2>4. Cookies and Tracking</h2>
            <p>Cookies are used by us to track site traffic and enhance your surfing experience. In your browser's settings, you can modify your cookie choices.</p>
          </section>

          <section className={style.section}>
            <h2>5. Data Security</h2>
            <p>We implement access controls and encryption, among other security measures, to safeguard your data.</p>
          </section>

          <section className={style.section}>
            <h2>6. Your Rights</h2>
            <p>You have the right to ask for your personal information to be accessed, corrected, or deleted. Contact us at: <strong>info@explorevoyagepackages.com</strong> to exercise your rights.</p>
          </section>

          <section className={style.section}>
            <h2>7. Third-Party Links</h2>
            <p>We are not responsible for the privacy policies of third-party websites linked from our site.</p>
          </section>

          <section className={style.section}>
            <h2>8. Policy Updates</h2>
            <p>We may update this policy periodically. The effective date will be revised accordingly.</p>
          </section>

          <section className={style.section}>
            <h2>9. Contact Information</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className={style.icon}>
              <MdEmail />
              <span><strong>info@explorevoyagepackages.com</strong></span>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Privacy;