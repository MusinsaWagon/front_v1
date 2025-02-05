import styled from 'styled-components';
import Image from '../common/Image';
import heartIcon from '../../assets/images/heartIcon.png';
import { useMutate } from '../../hooks/useMutation';
import { likeProduct } from '../../apis/productDetail/getProductDetail';
import { useState } from 'react';
import Modal from '../common/Modal';

export default function ProductImage({ url, id, isLiked }: ProductImageProps) {
  const [showModal, setShowModal] = useState(false);

  const handleHeartClick = () => {
    const token = localStorage.getItem('accessToken');
    if (!token || token === 'null') {
      setShowModal(true);
      return;
    }
    mutation.mutate(id || '');
  };

  const mutation = useMutate(likeProduct);

  return (
    <ImageWrapper>
      <Image
        width="100%"
        aspectRatio="402/431"
        src={'https://image.msscdn.net' + url}
        borderRadius="inherit"
      />
      <Heart onClick={handleHeartClick} $isLiked={isLiked}>
        <img src={heartIcon} />
      </Heart>
      {showModal && (
        <Modal
          msg="로그인이 필요한 서비스입니다."
          setShowModal={setShowModal}
          showModal={showModal}
          btnMsg="로그인하기"
          src="/images/logo2.png"
          url="/login"
          closeBtn
        />
      )}
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: -20px;
  border-radius: 0 0 20px 20px;
`;

const Heart = styled.button<{ $isLiked: boolean }>`
  width: 9.45%;
  aspect-ratio: 1/1;
  border-radius: 5px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: ${({ $isLiked, theme }) =>
    $isLiked ? theme.colors.yellow : 'rgba(0, 0, 0, 0.3)'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  img {
    width: 68.42%;
    aspect-ratio: 26/23;
  }
`;

interface ProductImageProps {
  url: string;
  id: string | undefined;
  isLiked: boolean;
}
