// /src/components/Header/MobileMenu.jsx

import { Link } from "react-router-dom";
import styles from "./MobileMenu.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTimes,
} from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const MobileMenu = ({ onCloses }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.mobileMenu}>
        <button className={styles.closeButton} onClick={onCloses}>
          <FaTimes />
        </button>
        <ul className={styles.mobileMenuLinks}>
          <li>
            <Link to="/">Головна</Link>
          </li>
          <li className={styles.dropdown}>
            <Link className={styles.accordion}>Послуги</Link>
            <ul className={styles.submenu}>
              <li className={styles.dropdowns}>
                <Link to="/services/ua-pl" className={styles.accordion}>
                  UA-PL
                </Link>
                <ul className={styles.subsubmenu}>
                  <li>
                    <Link to="/services/ua-pl/packages">Посилки</Link>
                  </li>
                  <li>
                    <Link to="/services/ua-pl/medicines">Ліки</Link>
                  </li>
                  <li>
                    <Link to="/services/ua-pl/animals">Тварини</Link>
                  </li>
                  <li>
                    <Link to="/services/ua-pl/moving">Переїзди</Link>
                  </li>
                  <li>
                    <Link to="/services/ua-pl/tires">Колеса та шини</Link>
                  </li>
                  <li>
                    <Link to="/services/ua-pl/bikes">Велосипеди</Link>
                  </li>
                </ul>
              </li>
              <li className={styles.dropdown}>
                <Link to="/services/pl-ua" className={styles.accordion}>
                  PL-UA
                </Link>
                <ul className={styles.subsubmenu}>
                  <li>
                    <Link to="/services/pl-ua/packages">Посилки</Link>
                  </li>
                  <li>
                    <Link to="/services/pl-ua/medicines">Ліки</Link>
                  </li>
                  <li>
                    <Link to="/services/pl-ua/animals">Тварини</Link>
                  </li>
                  <li>
                    <Link to="/services/pl-ua/moving">Переїзди</Link>
                  </li>
                  <li>
                    <Link to="/services/pl-ua/tires">Колеса та шини</Link>
                  </li>
                  <li>
                    <Link to="/services/pl-ua/bikes">Велосипеди</Link>
                  </li>
                </ul>
              </li>
              <li className={styles.dropdown}>
                <Link to="/services/pl-pl" className={styles.accordion}>
                  PL-PL
                </Link>
                <ul className={styles.subsubmenu}>
                  <li>
                    <Link to="/services/pl-pl/request">
                      Звернутись за запитом
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/schedule">Розклад рейсів</Link>
          </li>
          <li>
            <Link to="/for-companies">Для фірм</Link>
          </li>
          <li>
            <Link to="/about-us">Про Нас</Link>
          </li>
          <li>
            <Link to="/faq">Часті питання</Link>
          </li>
          <li>
            <Link to="/contacts">Контакти</Link>
          </li>
          <li>
            <Link to="/brandua">BrandUa</Link>
          </li>
          <li>
            <Link to="/promotions">Акції</Link>
          </li>
        </ul>
        <ul className={styles.mobileMenuSocLinks}>
          <li>
            <Link to="/">
              <FaFacebook className={styles.reactIcons} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaInstagram className={styles.reactIcons} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaTiktok className={styles.reactIcons} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaLinkedin className={styles.reactIcons} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
