import axiosInstance from '../axiosInstance';

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

export const getCategoryData = async (index: number) => {
  const size = 12;
  const page = 0;
  try {
    const response = await axiosInstance.get(
      `/products/MUSINSA/category/${index}`,
      {
        params: {
          size,
          page,
        },
      }
    );
    console.log('detail Response:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error sending data:', error);
  }
};
