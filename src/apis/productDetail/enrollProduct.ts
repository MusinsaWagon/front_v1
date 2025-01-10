import { APIService } from '../axiosInstance';

export const enrollProduct = async (productData: ProductData) => {
  try {
    const res = await APIService.private.post('/products/registration', {
      url: productData.url,
      shopType: productData.shopType,
    });
    return res;
  } catch (error) {
    alert(error);
  }
};

interface ProductData {
  url: string;
  shopType: string;
}
