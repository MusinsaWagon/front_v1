import { APIService } from '../axiosInstance';
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
    const response = await APIService.public.post('/users/login', data);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending data:', error);
  }
};
