// /components/Home/Home.jsx

import { IoIosArrowDown } from "react-icons/io";
import s from "./Home.module.css";
import ServiceHero from "../ServiceHero/ServiceHero";
import scheduleimg from "../img/scheduleJuly2024.png";
import { useEffect, useRef } from "react";
import FAQs from "../FAQ/FAQs";
import Partners from "../Partners/Partners";
import OurTeam from "../OurTeam/OurTeam";
import Helping from "../Helping/Helping";
import { useLocation } from "react-router-dom";

function Home() {
  const sectionRef = useRef(null);
  const faqRef = useRef(null);
  const scheduleRef = useRef(null);
  const mainRef = useRef(null);
  const serviceRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#schedule" && scheduleRef.current) {
      scheduleRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#faq" && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "" && mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#service" && serviceRef.current) {
      serviceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={s.header} ref={mainRef}>
      <div className={s.home}>
        <p className={s.description}>IVANCOM</p>
        <h1 className={s.title}>
          Швидка міжнародна доставка посилок з України в Польщу та інші країни
          Європи
        </h1>
        <div className={s.iconplace}>
          <IoIosArrowDown
            className={s.icon}
            size={48}
            onClick={scrollToSection}
          />
        </div>
      </div>
      <div className={s.body} ref={serviceRef}>
        <h2 className={s.bodytitle}>Ми відправляємо</h2>
        <p className={s.bodydescr}>
          будь-які посилки майже без обмежень! В нас кожен день – робочий!
        </p>
        <div className={s.servicecont}>
          <ServiceHero
            li1={"Доставка від 2 днів"}
            li2={"Мінімальні обмеження на вміст посилки"}
            li3={"Три види тарифів"}
            li4={"Доставка без вихідних"}
            li5={"Розрахунок в гривні та валюті"}
            btnUrl={"/services/ua-eu"}
          >
            <span className={s.blue}>U</span>
            <span className={s.yellow}>A</span> - Весь світ
          </ServiceHero>
          <ServiceHero
            li1={"Доставка від 3 днів"}
            li2={"Мінімальні обмеження на вміст посилки"}
            li3={"Два види тарифів"}
            li4={"Доставка без вихідних"}
            li5={"Розрахунок в гривні та валюті"}
            btnUrl={"/services/change"}
          >
            Весь світ - <span className={s.blue}>U</span>
            <span className={s.yellow}>A</span>
          </ServiceHero>
          <ServiceHero
            li1={"Відправлення по Польщі між відділеннями IVANCOM"}
            li2={"Доставка від 1 до 8 днів"}
            li3={"Будь-який формат пакування"}
            li4={"Відбір та доставка кур'єром на адресу"}
            li5={"Розрахунок в гривні та валюті"}
            btnUrl={"/"}
          >
            PL - PL
          </ServiceHero>
        </div>
      </div>
      <section className={s.schedule} ref={scheduleRef} id="schedule">
        <h2 className={s.schedtitle}>
          Розклад рейсів з/до головного складу в Польщі:
        </h2>
        <div className={s.schedcont}>
          <div className={s.schedimg}>
            <img src={scheduleimg} alt="schedule" />
          </div>
          <div className={s.schedtext}>
            Ми відправляємо твої посилки{" "}
            <span className={s.black}>раз на 4 дні</span>. Саме це й впливає на
            швидкість доставки. <br />
            <br />
            <br />
            <span className={s.black}>Як пришвидшити відправлення?</span>
            <br />
            <br />
            <br />
            Передай нам посилку прямо в день виїзду наших авто або за день до і
            не витрачай час на очікування:)
            <br />
            <br />
            <br />
            Щомісяця ми оновлюємо розклад наших рейсів. Слідкуй за ним тут або в
            наших соцмережах:
            <br />
            <br />
            <br />
            <a
              href="https://www.instagram.com/ivancom.poland/?igshid=NGVhN2U2NjQ0Yg%3D%3D"
              target="blank"
            >
              Instagram
            </a>
            <br />
            <a href="https://www.facebook.com/ivancom.eu/" target="blank">
              Facebook
            </a>
            <br />
            <a
              href="https://www.tiktok.com/@ivancom.poland?_t=8iCTrsyAonB"
              target="blank"
            >
              TikTok
            </a>
          </div>
        </div>
      </section>
      <div className={s.faq} ref={faqRef} id="faq">
        <FAQs />
      </div>
      <div>
        <Partners />
      </div>
      <div>
        <OurTeam />
      </div>
      <div>
        <Helping />
      </div>
    </div>
  );
}

export default Home;
