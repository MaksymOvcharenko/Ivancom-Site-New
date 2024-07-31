import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

import PL_PL from "./components/Services/PL_PL/PL_PL";
import Schedule from "./components/Schedule/Schedule";
import ForCompanies from "./components/ForCompanies/ForCompanies";
import AboutUs from "./components/AboutUs/AboutUs";
import FAQs from "./components/FAQ/FAQs";
import Contacts from "./components/Contacts/Contacts";
import BrandUa from "./components/BrandUa/BrandUa";
import Promotions from "./components/Promotions/Promotions";
import styles from "./App.module.css";

import BurgerMenu from "./components/BrugerMenu/BurgerMenu";
import Footer from "./components/Footer/Footer";
import UaEu from "./pages/Ua-Eu/UaEu";
import EuUA from "./pages/Eu-Ua/EuUA";
import ChangeEu from "./pages/Eu-Ua/ChangeEU/ChangeEu";
import { useEffect } from "react";
import WordUa from "./pages/WordUa/WordUa";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <div className={styles.App} id="outer-container">
      <BurgerMenu />
      <main id="page-wrap">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/" element={<h2>Service</h2>} />
          <Route path="services/ua-eu" element={<UaEu />} />
          <Route path="/services/change" element={<ChangeEu />} />
          <Route path="/services/pl-ua" element={<EuUA />} />
          <Route path="/services/eu-ua" element={<WordUa />} />
          <Route path="/services/pl-pl" element={<PL_PL />} />

          <Route path="/#schedule" element={<Schedule />} />
          <Route path="/for-companies" element={<ForCompanies />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/#faq" element={<FAQs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/brandua" element={<BrandUa />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="*" element={<h3>Not Found</h3>} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
