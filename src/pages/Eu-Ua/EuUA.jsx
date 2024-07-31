import { useRef } from "react";
import s from "./EuUa.module.css";
// import { IoIosArrowDown } from "react-icons/io";
import CargoType from "../../components/CargoType/CargoType";
import cargo from "../../components/CargoType/img/cargo.png";
import medicines from "../../components/CargoType/img/liky.png";
import animals from "../../components/CargoType/img/animals.png";
import moving from "../../components/CargoType/img/pereizd.jpg";
import tires from "../../components/CargoType/img/opony.png";
import bikes from "../../components/CargoType/img/rover.png";

const EuUa = () => {
  //   const sectionRef = useRef(null);
  const mainRef = useRef(null);
  //   const scrollToSection = () => {
  //     sectionRef.current.scrollIntoView({ behavior: "smooth" });
  //   };
  const image = [
    { src: cargo, url: "/services/pl-ua/packages", title: "Посилки" },
    { src: medicines, url: "/services/pl-ua/medicines", title: "Ліки" },
    { src: animals, url: "/services/pl-ua/animals", title: "Тварини" },
    { src: moving, url: "/services/pl-ua/moving", title: "Переїзди" },
    { src: tires, url: "/services/pl-ua/tires", title: "Шини та диски" },
    { src: bikes, url: "/services/pl-ua/bikes", title: "Велосипеди" },
  ];
  return (
    <>
      <div className={s.header} ref={mainRef}>
        <div className={s.home}>
          <h1 className={s.title}>
            Доставка посилок з Польщі та Європи в Україну
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

export default EuUa;
