import axios from 'axios';
import { APIService } from '../axiosInstance';

interface ProductData {
  price: number;
  productId: number;
}

export const enrollNotification = async (productData: ProductData) => {
  try {
    const res = await APIService.private.post('/alarm/register', {
      price: productData.price,
      productNumber: productData.productId,
      fcmToken: localStorage.getItem('fcmToken'),
    });
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.data?.message || '오류가 발생했습니다.';
      alert(errorMessage);
      throw new Error(errorMessage);
    } else {
      const networkError = '네트워크 오류가 발생했습니다.';
      alert(networkError);
      throw new Error(networkError); // 에러를 다시 throw
    }
  }
};
