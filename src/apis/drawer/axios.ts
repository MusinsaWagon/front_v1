import { APIService } from '../axiosInstance';

export const getTopCategory = async () => {
  try {
    const response = await APIService.public.get(`/category/parents`);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending data:', error);
  }
};

export const getBottomCategories = async (id: number) => {
  try {
    const response = await APIService.public.get(`/category/${id}`);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending data:', error);
  }
};
