import axiosInstance from '../axiosInstance';

interface LoginDatas {
  account: string;
  password: string;
}
interface LoginResponse {
  memberId: number;
  account: string;
  accessToken: string;
  createdAt: string;
}
export const loginUser = async ({
  account,
  password,
}: LoginDatas): Promise<LoginResponse | undefined> => {
  const data = { account, password };
  try {
    const response = await axiosInstance.post('/users/login', data);
    console.log('Response:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error sending data:', error);
  }
};
