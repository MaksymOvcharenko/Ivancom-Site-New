import { Formik, Form, Field } from "formik";
import axios from "axios";

const FormTest = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);

    // Создаем FormData из значений формы
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phone", values.phone);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzsDotOgEINR3bfwrvTnYJLy4enScbjPEJsopkVuPvI-ctMc0ztlondtsXSfgkznuVJ/exec";

    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success!", result);
        alert("Спасибо за заявку!");
        resetForm(); // Сброс формы после успешной отправки
      })
      .catch((error) => {
        console.error("Error!", error.message);
        alert("Ошибка при отправке данных.");
      })
      .finally(() => setSubmitting(false)); // Завершение процесса отправки
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "" }} // начальные значения полей
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
