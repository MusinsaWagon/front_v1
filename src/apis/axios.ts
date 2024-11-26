import axiosInstance from './axiosInstance';

export const getData = async () => {
  try {
    const response = await axiosInstance.get(
      `/products/MUSINSA?lastId=${0}&size=${15}`
    );
    console.log('Response:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error sending data:', error);
  }
};
