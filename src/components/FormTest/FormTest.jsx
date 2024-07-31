import { Formik, Form, Field } from "formik";
import axios from "axios";

const FormTest = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbz9KnWkn2tniKN6rPnTc7XX2iva-SwnVv5Z0NI9seMTe0f968xToueCMxwM03TfbMgF/exec"; // замените на URL вашего веб-приложения Google Apps Script

    axios
      .post(scriptURL, values)
      .then((response) => {
        console.log("Success:", response.data);
        setSubmitting(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "" }} // начальные значения полей
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" placeholder="Имя" />
          <Field type="email" name="email" placeholder="Email" />
          <Field type="text" name="phone" placeholder="Номер телефона" />
          <button type="submit" disabled={isSubmitting}>
            Отправить!
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormTest;
