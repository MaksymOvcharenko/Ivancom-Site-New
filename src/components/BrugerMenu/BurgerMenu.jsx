import { elastic as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "20px",
    top: "20px",
  },
  bmBurgerBars: {
    background: "black", // Синій колір для бургер-іконки
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "rgb(10, 167, 218)",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "rgb(10, 167, 218)", // Синій колір для анімації
  },
  bmItemList: {
    color: "#ffffff", // Білий колір тексту
    padding: "0.8em",
  },
  bmItem: {
    display: "block",
    padding: "0.5em",
    color: "#ffffff",
    textDecoration: "none",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
  socLinks: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "2em",
  },
  socLink: {
    color: "#ffffff",
    fontSize: "1.5em",
  },
};

const BurgerMenu = () => {
  return (
    <Menu
      right
      styles={styles}
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      width={"20%"} // або '280px'
    >
      <Link to="/" className="menu-item" style={styles.bmItem}>
        Головна
      </Link>
      <Link to="/services/ua-pl" className="menu-item" style={styles.bmItem}>
        UA-PL
      </Link>
      <Link to="/services/pl-ua" className="menu-item" style={styles.bmItem}>
        PL-UA
      </Link>
      <Link to="/services/pl-pl" className="menu-item" style={styles.bmItem}>
        PL-PL
      </Link>
      <Link to="/schedule" className="menu-item" style={styles.bmItem}>
        Розклад рейсів
      </Link>
      <Link to="/for-companies" className="menu-item" style={styles.bmItem}>
        Для фірм
      </Link>
      <Link to="/about-us" className="menu-item" style={styles.bmItem}>
        Про Нас
      </Link>
      <Link to="/faq" className="menu-item" style={styles.bmItem}>
        Часті питання
      </Link>
      <Link to="/contacts" className="menu-item" style={styles.bmItem}>
        Контакти
      </Link>
      <Link to="/brandua" className="menu-item" style={styles.bmItem}>
        BrandUa
      </Link>
      <Link to="/promotions" className="menu-item" style={styles.bmItem}>
        Акції
      </Link>
      <div style={styles.socLinks}>
        <Link to="/" style={styles.socLink}>
          <FaFacebook />
        </Link>
        <Link to="/" style={styles.socLink}>
          <FaInstagram />
        </Link>
        <Link to="/" style={styles.socLink}>
          <FaTiktok />
        </Link>
        <Link to="/" style={styles.socLink}>
          <FaLinkedin />
        </Link>
      </div>
    </Menu>
  );
};

export default BurgerMenu;
