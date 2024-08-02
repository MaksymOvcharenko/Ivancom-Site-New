/* eslint-disable react/prop-types */
import { Formik, Form, Field } from "formik";

import { sendData } from "../../pages/Services/UA_PL/api";

const FormTest = ({ url }) => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log(values);

    // 1. Создаем FormData из значений формы
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phone", values.phone);

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
      initialValues={{ name: "", email: "", phone: "" }} // Вказати Значення полів початкові
      onSubmit={handleSubmit}
    >
      <Form>
        <Field type="text" name="name" placeholder="Имя" />
        <Field type="email" name="email" placeholder="Email" />
        <Field type="text" name="phone" placeholder="Номер телефона" />

        <button type="submit">Отправить!</button>
      </Form>
    </Formik>
  );
};

export default FormTest;
