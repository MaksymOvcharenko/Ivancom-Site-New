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
// export const sendFileData = async (url, formData) => {
//   try {
//     const response = await axios.post(url, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response.data || "Error uploading file");
//   }
// };

export const sendFileData = async (url, data) => {
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data || "Error uploading file");
  }
};
