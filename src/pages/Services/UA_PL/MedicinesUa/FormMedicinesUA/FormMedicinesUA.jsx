/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { sendData } from "../../api";
import s from "./FormMedicinesUA.module.css";
import Autocomplete from "react-google-autocomplete";

// Валидация
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  ttn: Yup.string()
    .matches(/^\d{16}$/, "TTN must be exactly 16 digits")
    .required("Required"),
  names: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  contactPhone: Yup.string().required("Required"),
  branch: Yup.string().required("Required"),
  adress: Yup.string().required("Required"),
  checked: Yup.boolean()
    .oneOf([true], "Consent is required")
    .required("Required"),
});

const FormMedicinesUA = ({ url }) => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log(values);

    // 1. Создаем FormData из значений формы
    const formData = new FormData();
    formData.append("names", values.names);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("ttn", values.ttn);
    formData.append("branch", values.branch);
    formData.append("adress", values.adress);
    formData.append("contactPhone", values.contactPhone);
    formData.append("checked", values.checked);
    formData.append("zakaz", values.zakaz);

    try {
      await sendData(url, formData);
      console.log("Success!");
      alert("Спасибо за заявку!");
      resetForm(); // Сброс формы после успешной отправки
    } catch (error) {
      console.error("Error!", error.message);
      alert("Ошибка при отправке данных.");
    } finally {
      setSubmitting(false); // Завершение процесса отправки
    }
  };

  return (
    <Formik
      className={s.form}
      initialValues={{
        email: "",
        ttn: "",
        names: "",
        phone: "",
        contactPhone: "",
        branch: "",
        adress: "",
        zakaz: "",
        checked: false,
      }} // Вказати Значення полів початкові
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form className={s.form}>
          <div className={s.fieldContainer}>
            <Field
              className={s.field}
              type="email"
              name="email"
              placeholder="Введи свій Email"
            />
            <ErrorMessage
              className={s.errorMessage}
              name="email"
              component="div"
            />
          </div>
          <div className={s.fieldContainer}>
            <Field
              className={s.field}
              type="text"
              name="ttn"
              placeholder="Введи ТТН Нової Пошти"
            />
            <ErrorMessage
              className={s.errorMessage}
              name="ttn"
              component="div"
            />
          </div>
          <div className={s.fieldContainer}>
            <label className={s.label}>
              {/* Введіть ім'я та прізвище отримувача латинецею */}
              <Field
                className={s.field}
                type="text"
                name="names"
                placeholder="Введи ім'я та прізвище отримувача латинецею"
              />
            </label>
            <ErrorMessage
              className={s.errorMessage}
              name="names"
              component="div"
            />
          </div>
          <div className={s.fieldContainer}>
            <label className={s.label}>
              Введи номер телефону отримувача
              <PhoneInput
                containerClass={s.phoneInputContainer}
                inputClass={s.phoneInput}
                country={"pl"}
                name="phone"
                onChange={(phone) => setFieldValue("phone", phone)}
              />
            </label>
            <ErrorMessage
              className={s.errorMessage}
              name="phone"
              component="div"
            />
          </div>
          <div className={s.fieldContainer}>
            <label className={s.label}>
              Введи Viber або Telegram платника за послугу
              <PhoneInput
                containerClass={s.phoneInputContainer}
                inputClass={s.phoneInput}
                country={"ua"}
                name="contactPhone"
                onChange={(phone) => setFieldValue("contactPhone", phone)}
              />
            </label>
            <ErrorMessage
              className={s.errorMessage}
              name="contactPhone"
              component="div"
            />
          </div>
          <div className={s.fieldContainer}>
            <Field as="select" name="branch" className={s.field}>
              <option value="">Обери відділення</option>
              <option value="Краків, Jana Pawła II 154, 31-982 Kraków, Polska">
                Краків, Jana Pawła II 154, 31-982 Kraków, Polska
              </option>
              <option value="Вроцлав, Tadeusza Kościuszki 138A, 50-439 Wrocław, Polska">
                Вроцлав, Tadeusza Kościuszki 138A, 50-439 Wrocław, Polska
              </option>
              <option value="Варшава, Skierniewicka 21/7, local Ivancom,01-230 Warszawa (станція метро Plocka)">
                Варшава, Skierniewicka 21/7, local Ivancom,01-230 Warszawa
                (станція метро Plocka)
              </option>
              <option value="Гданьск, Romana Dmowskiego 12/1, 80-264 Gdańск">
                Гданьск, Romana Dmowskiego 12/1, 80-264 Gdańск
              </option>
              <option value="Катовіце, Jana III Sobieskiego 11/1, 40-082 Katowice">
                Катовіце, Jana III Sobieskiego 11/1, 40-082 Katowice
              </option>
              <option value="Кельце">Кельце</option>
              <option value="Ольштин">Ольштин</option>
              <option value="Мальборк">Мальборк</option>
              <option value="Кур'єр IVANCOM">Кур'єр IVANCOM</option>
              <option value="Інше">Інше</option>
            </Field>
            <ErrorMessage
              className={s.errorMessage}
              name="branch"
              component="div"
            />
          </div>
          <div className={s.fieldContainer}>
            <Field
              className={s.field}
              type="text"
              name="zakaz"
              placeholder="Номер замовлення з аптеки (необов'язково)"
            />
          </div>
          <div className={s.fieldContainer}>
            <Autocomplete
              className={s.field}
              apiKey="AIzaSyAqKg5PNGW6HW1yAurV6oeXmyEzfE4zD_c"
              onPlaceSelected={(place) => {
                setFieldValue("adress", place.formatted_address);
              }}
              options={{
                types: ["address"],
                componentRestrictions: { country: "ua" },
              }}
              placeholder="Країна, місто, вулиця, будинок, квартира, індекс"
            />
            <ErrorMessage
              className={s.errorMessage}
              name="adress"
              component="div"
            />
          </div>
          <div className={s.fieldContainer}>
            <label className={s.label} id="checkbox">
              Даю згоду на обробку персональних даних
              <Field className={s.checkbox} type="checkbox" name="checked" />
            </label>
            <ErrorMessage
              className={s.errorMessage}
              name="checked"
              component="div"
            />
          </div>
          <button className={s.submitButton} type="submit">
            Відправити!
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormMedicinesUA;
