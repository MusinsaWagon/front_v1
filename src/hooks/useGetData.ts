// hooks/useGetData.ts
// import { useQuery } from '@tanstack/react-query';
// import axiosInstance from '../apis/axiosInstance';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// const fetchData = async (): Promise<Product[]> => {
//   const response = await axiosInstance.get(`/products/MUSINSA?lastId=0&size=15`);
//   return response.data;
// };

// export const useGetData = () => {
//   return useQuery<Product[], Error>(['products', 'MUSINSA'], fetchData);
// };
