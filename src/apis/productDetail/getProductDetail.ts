import axios from 'axios';
import { APIService } from '../axiosInstance';

export type ProductDetail = {
  productNumber: number;
  name: string;
  brand: string;
  starScore: number;
  reviewCount: number;
  likeCount: number;
  imgUrl: string;
  isLiked: boolean;
  shopType: string;
  currentPrice: number;
  previousPrice: number;
};

export const getProduct = async (shopType: string, id: string | undefined) => {
  if (!id) {
    alert('id가 비어있습니다.');
    return;
  }
  try {
    const res = await APIService.private.get(
      `/products/${shopType}/${parseInt(id)}`
    );
    const data = await res.data;
    const productInfo = data.basicProductInfo;
    if (productInfo) {
      const storedData = localStorage.getItem('productBasicInfo');
      const productArray = storedData ? JSON.parse(storedData) : [];

      const updatedArray = productArray.filter(
        (item: ProductDetail) => item.name !== productInfo.name
      );

      updatedArray.unshift(productInfo);
      localStorage.setItem('productBasicInfo', JSON.stringify(updatedArray));
    }

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.data?.message || '오류가 발생했습니다.';
      alert(errorMessage);
      window.location.href = '/';
      throw new Error(errorMessage);
    } else {
      alert('상품을 불러오는 중 오류가 발생했습니다.');
    }
  }
};

export const likeProduct = async (productId: string) => {
  const id = parseInt(productId);
  try {
    const res = await APIService.private.post(`/like/${id}`);
    const data = res.data;
    return data;
  } catch {
    alert('좋아요 중 오류가 발생했습니다.');
  }
};

export const unlikeProduct = async (productId: string) => {
  const id = parseInt(productId);
  try {
    const res = await APIService.private.delete(`/like/cancle/${id}`);
    const data = res.data;
    return data;
  } catch {
    alert('좋아요 취소 중 오류가 발생했습니다.');
  }
};
