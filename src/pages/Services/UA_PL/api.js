import axios from "axios";

// Функция для отправки данных
export const sendData = async (url, formData) => {
  try {
    const response = await axios.post(url, formData);
    return response.data;
  } catch (error) {
    console.error("Error in sendData:", error.message);
    throw error;
  }
};
