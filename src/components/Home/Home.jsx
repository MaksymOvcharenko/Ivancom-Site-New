// /components/Home/Home.jsx

import { IoIosArrowDown } from "react-icons/io";
import s from "./Home.module.css";

function Home() {
  return (
    <div className={s.home} id="page-wrap">
      <p className={s.description}>IVANCOM</p>
      <h1 className={s.title}>
        Швидка міжнародна доставка посилок з України в Польщу та інші країни
        Європи
      </h1>
      <div className={s.iconplace}>
        <IoIosArrowDown className={s.icon} size={48} />
      </div>
    </div>
  );
}

export default Home;
