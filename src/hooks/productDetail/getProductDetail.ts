import axiosInstance from '../../apis/axiosInstance';

export const getProduct = async (shopType: string, id: string | undefined) => {
  if (!id) {
    alert('id가 비어있습니다.');
    return;
  }
  try {
    const res = await axiosInstance.get(
      `/products/${shopType}/${parseInt(id)}`
    );
    const data = await res.data.data;
    return data;
  } catch {
    alert('상품을 불러오는 중 오류가 발생했습니다.');
  }
};
