import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import UA_PL from "./components/Services/UA_PL/UA_PL";
import PL_UA from "./components/Services/PL_UA/PL_UA";
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

function App() {
  return (
    <div className={styles.App} id="outer-container">
      <BurgerMenu />
      <main id="page-wrap">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/ua-pl" element={<UA_PL />} />
          <Route path="/services/pl-ua" element={<PL_UA />} />
          <Route path="/services/pl-pl" element={<PL_PL />} />
          <Route path="/#schedule" element={<Schedule />} />
          <Route path="/for-companies" element={<ForCompanies />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/#faq" element={<FAQs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/brandua" element={<BrandUa />} />
          <Route path="/promotions" element={<Promotions />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
