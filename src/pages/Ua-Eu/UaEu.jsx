import { useRef } from "react";
import s from "./Ua-Eu.module.css";
// import { IoIosArrowDown } from "react-icons/io";
import CargoType from "../../components/CargoType/CargoType";
import cargo from "../../components/CargoType/img/cargo.png";
import medicines from "../../components/CargoType/img/liky.png";
import animals from "../../components/CargoType/img/animals.png";
import moving from "../../components/CargoType/img/pereizd.jpg";
import tires from "../../components/CargoType/img/opony.png";
import bikes from "../../components/CargoType/img/rover.png";

const UaEu = () => {
  //   const sectionRef = useRef(null);
  const mainRef = useRef(null);
  //   const scrollToSection = () => {
  //     sectionRef.current.scrollIntoView({ behavior: "smooth" });
  //   };
  const image = [
    { src: cargo, url: "/services/ua-eu/packages", title: "Посилки" },
    { src: medicines, url: "/services/ua-eu/medicines", title: "Ліки" },
    { src: animals, url: "/services/ua-eu/animals", title: "Тварини" },
    { src: moving, url: "/services/ua-eu/moving", title: "Переїзди" },
    { src: tires, url: "/services/ua-eu/tires", title: "Шини та диски" },
    { src: bikes, url: "/services/ua-eu/bikes", title: "Велосипеди" },
  ];
  return (
    <>
      <div className={s.header} ref={mainRef}>
        <div className={s.home}>
          <h1 className={s.title}>
            Швидка міжнародна доставка посилок з України в Польщу та інші країни
            Європи
          </h1>
          <div className={s.iconplace}>
            {/* <IoIosArrowDown
              className={s.icon}
              size={48}
              onClick={scrollToSection}
            /> */}
          </div>
        </div>
        <CargoType images={image} />
      </div>
    </>
  );
};

export default UaEu;
