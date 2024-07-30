/* eslint-disable react/no-unescaped-entities */

import s from "./Footer.module.css";
import { Link } from "react-router-dom";
import BlueLogo from "../../img/schedule/svg/BlueLogo.png";
const Footer = () => {
  return (
    <>
      <div className={s.cont}>
        <ul className={s.links}>
          <Link to="/about-us">Про нас</Link>
          <Link to="/#schedule">Розклад рейсів</Link>
          <Link to="/contacts"> Контакти</Link>
          <Link to="/career">Кар'єра</Link>
          <Link to="/#faq">Часті питання</Link>
          <Link to="/for-companies">Для Фірм</Link>
          <Link to="/promotions">Акції</Link>
          <Link to="/regulamin">Регламент</Link>
        </ul>

        <div className={s.logo}>
          <Link to="/">
            <img src={BlueLogo} alt="Logo" width={150} height={67} />
          </Link>
        </div>
        <div className={s.policy}>
          <p className={s.policyItem}>
            © Всі права захищені.
            <br /> NIP: 9452232009
            <br /> ivancom.eu
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
