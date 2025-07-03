import React from 'react';
import style from "@/ui/terms.module.css";
import { MdEmail } from "react-icons/md";

const TermsAndCondition = () => {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.heading}>
          <h3 className={style.title}>Terms & Conditions</h3>
        </div>
        <div className={style.content}>
          <section className={style.section}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              You accept and agree to these terms and conditions by using the Explore Voyage Packages website and services. Kindly review them thoroughly before making any reservations.
            </p>
          </section>
          <section className={style.section}>
            <h2>2. Bookings & Payments</h2>
            <ul>
              <li>Availability at the moment of confirmation affects all reservations.ion.</li>
              <li>Only after full or partial payment is received is a reservation confirmed.</li>
              <li>Demand, provider changes, and currency exchange rates can all affect prices.</li>
            </ul>
          </section>
          <section className={style.section}>
            <h2>3. Cancellations & Refunds</h2>
            <p>
              We are aware that plans can change. However, certain airline policies control cancellations. As an agency, Explore Voyage Packages is subject to their rules.
            </p>
            <ul>
              <li>Cancellation fees may apply depending on the timing and provider policies.</li>
              <li>Refunds, if applicable, may take up to 30 business days to process.</li>
              <li>Some bookings may be non-refundable.</li>
            </ul>
          </section>
          <section className={style.section}>
            <h2>4. Travel Documents</h2>
            <ul>
              <li>Customers are responsible for ensuring valid passports, visas, and health requirements.</li>
              <li>We do not accept liability for denied boarding or entry due to incomplete documentation.</li>
            </ul>
          </section>
          <section className={style.section}>
            <h2>5. Changes & Modifications</h2>
            <p>
              Explore Voyage Packages reserves the right to make changes to itineraries, accommodations, and services if necessary due to external factors.
            </p>
            <ul>
              <li>Changes may occur due to weather, political conditions, or provider decisions.</li>
              <li>We will notify you promptly and offer alternatives when available.</li>
            </ul>
          </section>
          <section className={style.section}>
            <h2>6. Liability Disclaimers</h2>
            <p>
              Explore Voyage Packages acts as an intermediary between you and service providers such as airlines, hotels, and tour companies.
            </p>
            <ul>
              <li>We are not liable for losses, injuries, delays, or damages caused by third parties.</li>
              <li>We strongly recommend purchasing travel insurance to protect against unforeseen events.</li>
            </ul>
          </section>
          <section className={style.section}>
            <h2>7. Use of Website</h2>
            <ul>
              <li>You agree not to misuse or interfere with the website’s functionality.</li>
              <li>All content is the property of Explore Voyage Packages and may not be reproduced without permission.</li>
            </ul>
          </section>
          <section className={style.section}>
            <h2>8. Intellectual Property</h2>
            <p>
              All content on this website including logos, text, and images is protected by copyright laws.
            </p>
            <ul>
              <li>Unauthorized use or reproduction is strictly prohibited.</li>
              <li>Requests for permission can be sent to our contact email.</li>
            </ul>
          </section>
          <section className={style.section}>
            <h2>9. Governing Law</h2>
            <p>
              These Terms & Conditions shall be governed and interpreted according to the laws of United States.
            </p>
          </section>
          <section className={style.section}>
            <h2>10. Contact Information</h2>
            <p>
              If you have any questions or need further clarification, please contact us at:
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

export default TermsAndCondition;