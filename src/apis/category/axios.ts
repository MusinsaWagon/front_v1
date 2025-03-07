import { APIService } from '../axiosInstance';

//hamburger 버튼 요소
export const getTopCategory = async () => {
  try {
    const response = await APIService.public.get(`/category/parents`);
    return response.data;
  } catch (error) {
    console.error('Error sending data:', error);
  }
};

export const getBottomCategories = async (id: number) => {
  try {
    const response = await APIService.public.get(`/category/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error sending data:', error);
  }
};
