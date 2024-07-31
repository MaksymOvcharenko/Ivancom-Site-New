import { Link } from "react-router-dom";
import s from "./ChangeEu.module.css";

const ChangeEu = () => {
  return (
    <div className={s.header}>
      <div className={s.home}>
        <h1 className={s.title}>Посилки з Європи до України</h1>
        <p>документи, особисті речі, коштовні речі, вантажі для бізнесу тощо</p>
      </div>
      <div className={s.btn}>
        <div className={s.cont}>
          <ul className={s.list}>
            <li className={s.item}>
              <Link to="/services/pl-ua">Відправляю з Польщі</Link>
            </li>
            <li className={s.world}>
              <Link to="/services/eu-ua">Відправляю з інших країн</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChangeEu;
