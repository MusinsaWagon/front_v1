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
const pageable = {
  page: 0,
  size: 15,
  sort: ['string'],
};
export const getCategoryData = async (index: number) => {
  try {
    const response = await axiosInstance.get(
      `/products/MUSINSA/category/${index}`,
      {
        params: {
          pageable: JSON.stringify(pageable),
        },
      }
    );
    console.log('detail Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending data:', error);
  }
};
