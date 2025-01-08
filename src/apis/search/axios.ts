import { APIService } from '../axiosInstance';

interface searchDataPros {
  name: string;
}

export const searchListHandler = async ({ name }: searchDataPros) => {
  try {
    const params = {
      name,
      lastId: 0,
      size: 10,
    };
    console.log('text:', name);
    const response = await APIService.public.get('/products/search', {
      params,
    });
    console.log('검색:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending data:', error);
  }
};
