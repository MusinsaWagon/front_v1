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
type SearchParams = {
  brand?: string;
  keyword?: string;
};
export const getSearchDetail = async (props: SearchParams) => {
  const { brand, keyword } = props;
  try {
    const params = {
      lastId: 0,
      size: 10,
      ...(brand && { brand }),
      ...(keyword && { keyword }),
    };
    const response = await APIService.public.get(
      '/products/MUSINSA/search/detail',
      {
        params,
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error sending data:', error);
  }
};
