import axios from 'axios';
import { APIService } from '../axiosInstance';

interface EmailResponse {
  validCode: number;
}

export type UserData = {
  email: string;
  password: string;
};

export const checkDupId = async (
  email: string
): Promise<boolean | undefined> => {
  try {
    const res = await APIService.public.post(`/users/checkEmail`, {
      email,
    });
    const data = await res.data.duplicated;
    console.log('중복 확인');
    return data;
  } catch (error) {
    alert('중복확인 중 오류 발생' + error);
    return true;
  }
};

export const sendEmail = async (
  account: string
): Promise<EmailResponse | undefined> => {
  try {
    const res = await APIService.public.post('/users/email', {
      account,
    });
    const data = res.data;
    console.log('이메일 전송');
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.data?.message || '오류가 발생했습니다.';
      alert(errorMessage);
    } else alert('네트워크 오류가 발생했습니다.');
  }
};

export const signup = async (userData: UserData) => {
  try {
    const res = await APIService.public.post('/users/join', {
      account: userData.email,
      password: userData.password,
      role: 'USER',
    });
    const data = res.data;
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
