import axios from 'axios';
import { APIService } from '../axiosInstance';

export const getMyList = async (
  type: string,
  setShowModal: (boolean: boolean) => void
) => {
  const token = localStorage.getItem('accessToken');
  if (!token || token === 'null') {
    setShowModal(true);
    return;
  }
  try {
    const res = await APIService.private.get(
      `/${type === 'heart' ? 'like' : 'alarm'}/list`
    );
    const data = await res.data;
    return data;
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

export const getEmail = async () => {
  const token = localStorage.getItem('accessToken');
  if (!token || token === 'null') return '로그인이 필요합니다';

  try {
    const res = await APIService.private.get('/users/mypage');
    const data = await res.data.email;
    console.log(data);

    return data;
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
