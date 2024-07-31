/* eslint-disable react/no-unescaped-entities */
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import {
  // FaFacebook,
  // FaInstagram,
  // FaTiktok,
  // FaLinkedin,
  FaQuestionCircle,
  FaUserPlus,
} from "react-icons/fa";
import { FaTruck } from "react-icons/fa6";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import "./BurgerMenu.css";
import { useState, useRef, useEffect } from "react";

import { IoCalendarNumber } from "react-icons/io5";

import { RiDiscountPercentFill } from "react-icons/ri";

import Logo from "../Logo/Logo";
import { BiSolidHome } from "react-icons/bi";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiBuildingOffice } from "react-icons/hi2";
import uaIcon from "../../img/schedule/svg/Mask groupua.svg";
import consIcon from "../../img/schedule/svg/consult.png";
import facebIcon from "../../img/schedule/svg/fb.svg";
import carIcon from "../../img/schedule/svg/carrera.svg";
import insIcon from "../../img/schedule/svg/insta.svg";
import tiktokIcon from "../../img/schedule/svg/tiktok.svg";
import linkidnIcon from "../../img/schedule/svg/in.svg";
// import Icon from "../Icon/IconLinkidn";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUslugi, setIsOpenUslugi] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsOpenUslugi(false);
  };

  const handleStateChange = ({ isOpen }) => {
    setIsOpen(isOpen);
  };

  return (
    <Menu
      right
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      width={"278px"}
      customCrossIcon={<IoMdClose className="bm-cross-icon" />}
      crossButtonClassName={"bm-cross-icon"}
      isOpen={isOpen}
      onStateChange={handleStateChange}
      ref={menuRef}
    >
      <div className="burger-logo">
        <Logo />
      </div>
      <Link to="/" className="menu-item" onClick={handleLinkClick}>
        <BiSolidHome size={"16px"} className="menu-icon" />
        Головна
      </Link>
      <Link
        to="/#service"
        onClick={() => setIsOpenUslugi((prev) => !prev)}
        className="menu-item"
      >
        <FaTruck size={"16px"} className="menu-icon" />
        Послуги
        <IoIosArrowDown />
      </Link>
      {isOpenUslugi && (
        <>
          <Link
            to="services/ua-eu"
            className="submenu-item"
            onClick={handleLinkClick}
          >
            <div className="header-submenu">
              <span>UA - EU</span>
              {/* <IoIosArrowDown /> */}
            </div>
            <ul className="submenu">
              <li>
                <Link to="/services/ua-eu/packages" onClick={handleLinkClick}>
                  Посилки
                </Link>
              </li>
              <li>
                <Link to="/services/ua-eu/medicines" onClick={handleLinkClick}>
                  Ліки
                </Link>
              </li>
              <li>
                <Link to="/services/ua-eu/animals" onClick={handleLinkClick}>
                  Тварини
                </Link>
              </li>
              <li>
                <Link to="/services/ua-eu/moving" onClick={handleLinkClick}>
                  Переїзди
                </Link>
              </li>
              <li>
                <Link to="/services/ua-eu/tires" onClick={handleLinkClick}>
                  Колеса та шини
                </Link>
              </li>
              <li>
                <Link to="/services/ua-eu/bikes" onClick={handleLinkClick}>
                  Велосипеди
                </Link>
              </li>
            </ul>
          </Link>
          <Link
            to="/services/change"
            className="submenu-item"
            onClick={handleLinkClick}
          >
            <div className="header-submenu">
              <span>EU - UA</span>
              {/* <IoIosArrowDown /> */}
            </div>
            <ul className="submenu">
              <li>
                <Link to="/services/eu-ua/packages" onClick={handleLinkClick}>
                  Посилки
                </Link>
              </li>
              <li>
                <Link to="/services/eu-ua/medicines" onClick={handleLinkClick}>
                  Ліки
                </Link>
              </li>
              <li>
                <Link to="/services/eu-ua/animals" onClick={handleLinkClick}>
                  Тварини
                </Link>
              </li>
              <li>
                <Link to="/services/eu-ua/moving" onClick={handleLinkClick}>
                  Переїзди
                </Link>
              </li>
              <li>
                <Link to="/services/eu-ua/tires" onClick={handleLinkClick}>
                  Колеса та шини
                </Link>
              </li>
              <li>
                <Link to="/services/eu-ua/bikes" onClick={handleLinkClick}>
                  Велосипеди
                </Link>
              </li>
            </ul>
          </Link>
          <Link
            to="/services/pl-pl"
            className="submenu-item"
            onClick={handleLinkClick}
          >
            <div className="header-submenu">
              <span>PL - PL</span>
              {/* <IoIosArrowDown /> */}
            </div>
            <ul className="submenu">
              <li>
                <Link to="/services/pl-pl/request" onClick={handleLinkClick}>
                  Між відділеннями
                </Link>
              </li>
            </ul>
          </Link>
        </>
      )}
      <Link to="/brandua" className="menu-item" onClick={handleLinkClick}>
        <img src={uaIcon} alt="My Icon" width={"16px"} className="menu-icon" />
        BrandUa
      </Link>
      <Link to="/#schedule" className="menu-item" onClick={handleLinkClick}>
        <IoCalendarNumber size={"16px"} className="menu-icon" />
        Розклад рейсів
      </Link>
      <Link to="/for-companies" className="menu-item" onClick={handleLinkClick}>
        <BsBriefcaseFill size={"16px"} className="menu-icon" />
        Для фірм
      </Link>
      <Link to="/about-us" className="menu-item" onClick={handleLinkClick}>
        <HiBuildingOffice size={"16px"} className="menu-icon" />
        Про Нас
      </Link>
      <Link to="/#faq" className="menu-item" onClick={handleLinkClick}>
        <FaQuestionCircle size={"16px"} className="menu-icon" />
        Часті питання
      </Link>
      <Link to="/contacts" className="menu-item" onClick={handleLinkClick}>
        <FaUserPlus size={"16px"} className="menu-icon" />
        Контакти
      </Link>

      <Link to="/promotions" className="menu-item" onClick={handleLinkClick}>
        <RiDiscountPercentFill size={"16px"} className="menu-icon" />
        Акції
      </Link>
      <Link to="/promotions" className="menu-item" onClick={handleLinkClick}>
        <img src={carIcon} alt="My Icon" width={"16px"} className="menu-icon" />
        Кар'єра
      </Link>
      <div className="soc-links">
        <Link
          to="https://www.facebook.com/ivancom.eu/"
          className="soc-link"
          target="_blank"
        >
          {/* <FaFacebook /> */}
          <img
            src={facebIcon}
            alt="My Icon"
            width={"26px"}
            className="menu-icon"
          />
          {/* <Icon className="menu-icon" /> */}
        </Link>
        <Link
          to="https://www.instagram.com/ivancom.poland/?igshid=NGVhN2U2NjQ0Yg%3D%3D"
          className="soc-link"
          target="_blank"
        >
          {/* <FaInstagram /> */}
          <img
            src={insIcon}
            alt="My Icon"
            width={"26px"}
            className="menu-icon"
          />
        </Link>
        <Link
          to="https://www.tiktok.com/@ivancom.poland?_t=8iCTrsyAonB"
          className="soc-link"
          target="_blank"
        >
          {/* <FaTiktok /> */}
          <img
            src={tiktokIcon}
            alt="My Icon"
            width={"26px"}
            className="menu-icon"
          />
        </Link>
        <Link
          to="https://ru.linkedin.com/company/ivancom"
          className="soc-link"
          target="_blank"
        >
          {/* <FaLinkedin /> */}
          <img
            src={linkidnIcon}
            alt="My Icon"
            width={"26px"}
            className="menu-icon"
          />
        </Link>
      </div>
      <div className="chat-burger">
        <Link to="https://t.me/IvancomTownBot" className="consult">
          <img
            src={consIcon}
            alt="My Icon"
            width={"26px"}
            className="menu-icon"
          />

          <div>
            <p>Online - консультація</p>
          </div>
        </Link>
      </div>

      <div className="policy-burger">
        <p className="policy-item">
          © Всі права захищені.
          <br /> NIP: 9452232009
          <br /> ivancom.eu
        </p>
      </div>
    </Menu>
  );
};

export default BurgerMenu;
