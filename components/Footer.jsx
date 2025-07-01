import React from 'react';
import styles from "@/ui/footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter  } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logoAndDesc}>
            <h2 className={styles.logo}>
                <span className={styles.logoMain}>EXPLORE VOYAGE</span>
                <span className={styles.logoSub}>PACKAGES</span>
            </h2>
          <p>
            Book with Explore Voyage Packages, and save a great amount on your cruise booking. Get exclusive deals and explore the seas at low prices.
          </p>
        </div>

        <div className={styles.grid}>
          {/* <div>
            <h3>Working Hours :</h3>
            <ul>
              <li className={styles.border}>Monday – Tuesday: 08.00 AM–09.00 PM</li>
              <li className={styles.border}>Wednesday – Thursday: 08.00 AM–09.00 PM</li>
              <li className={styles.border}>Friday – Saturday: 08.00 AM–09.00 PM</li>
              <li className={styles.border}>Sunday: Closed</li>
            </ul>
          </div> */}

          <div>
            <h3>Quick Links</h3>
            <ul>
              <li className={styles.links}>Home</li>
              <li className={styles.links}>About</li>
              <li className={styles.links}>Packages</li>
              <li className={styles.links}>FAQ</li>
              <li className={styles.links}>Contact</li>
            </ul>
          </div>

          <div>
            <h3>Support</h3>
            <ul>
              <li className={styles.links}>Help Center</li>
              <li className={styles.links}>Booking</li>
              <li className={styles.links}>Privacy Policy</li>
              <li className={styles.links}>Terms & Conditions</li>
              <li className={styles.links}>Online Support</li>
            </ul>
          </div>

          <div>
            <h3>Contact Info</h3>
            <div className={styles.contactInfo}>
                <p><strong>Phone number:</strong>+1 000000000</p>
                {/* <p>USA: +1(844) 762-1214</p>
                <p>Chile: +56 800231058</p>
                <p>Mexico: +52 8007334112</p> */}
                <p>
                <strong>Address:</strong><br />
                  3612 Windshire Dr Springfield,<br />
                  IL 62704, USA<br />
                </p>
                <p><strong>Email:</strong><br />info@explorevoyagepackages.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.bottomBar}>
        <p>© Tour & Travel by Algobiz Innovations LLP. All Right Reserved 2024.</p>
        <div className={styles.socialIcons}>
          <span><FaFacebookF /></span>
          <span><FaInstagram /></span>
          <span><FaTwitter /></span>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
