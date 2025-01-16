import { APIService } from '../axiosInstance';

interface searchDataPros {
  name: string;
}

export const searchListHandler = async ({ name }: searchDataPros) => {
  try {
    const params = {
      name,
      size: 10,
    };
    const response = await APIService.public.get('/products/MUSINSA/search', {
      params,
    });
    return response.data;
  } catch (error) {
    console.error('Error sending data:', error);
  }
};
