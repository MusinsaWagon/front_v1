import axiosInstance from './axiosInstance';

export const getData = async () => {
  try {
    const response = await axiosInstance.get(
      `/products/MUSINSA?lastId=${0}&size=${10}`
    );
    console.log('Response:', response.data);
    return response.data.data;
  } catch (error) {
    console.error('Error sending data:', error);
  }
};
