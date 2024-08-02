// import s from "../MedicinesUa/MedicinesUa.module.css";
import { testUrl } from "../url";
import FormMedicinesUA from "./FormMedicinesUA/FormMedicinesUA";
import s from "./MedicinesUa.module.css";
const MedicinesUa = () => {
  return (
    <div className={s.cont}>
      <FormMedicinesUA url={testUrl} />
    </div>
  );
};

export default MedicinesUa;
