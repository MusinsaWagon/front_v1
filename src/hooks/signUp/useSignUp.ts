import axios from 'axios';
import axiosInstance from '../../apis/axiosInstance';

interface EmailResponse {
  validCode: number;
}

export const checkDupId = async (
  email: string
): Promise<string | undefined> => {
  try {
    const res = await axiosInstance.post(`/users/checkEmail`, {
      email,
    });
    const data = await res.data.duplicated;
    console.log('중복 확인');
    return data;
  } catch (error) {
    alert('중복확인 중 오류 발생' + error);
  }
};

export const sendEmail = async (
  account: string
): Promise<EmailResponse | undefined> => {
  try {
    const res = await axiosInstance.post('/users/email', {
      account,
    });
    const data = res.data.data;
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
