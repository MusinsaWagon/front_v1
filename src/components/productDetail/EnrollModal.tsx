import CloseBtn from '@/components/common/CloseBtn.tsx';
import styled from 'styled-components';
import { getInputInfos } from '../../hooks/modal/getModalInfo';
import HeaderSection from '../common/HeaderSection';
import ProductCard from '../common/ProductCard';
import PriceCard from '../common/PriceCard';
import UserInput from '../common/UserInput';
import Button from '../common/Button';
import { useRef, useState } from 'react';
import { useMutate } from '../../hooks/useMutation';
import { enrollNotification } from '../../apis/productDetail/enrollNotification';
import { useParams } from 'react-router-dom';
import Modal from '../common/Modal';
import { requestNotificationPermission } from '../../firebase';

export default function EnrollModal({
  type,
  priceList,
  onClose,
  name,
  brand,
  currentPrice,
  imgSrc,
}: ModalProps) {
  const inputInfo = getInputInfos(type);
  const priceRef = useRef<HTMLInputElement>(null);
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const enrollNotificationMutate = useMutate(enrollNotification, () => {
    setShowModal(true);
  });

  const selectPrice = (price: number) => {
    priceRef.current!.value = price.toString();
  };

  const handleEnroll = async () => {
    if (priceRef.current?.value === '') {
      alert('가격을 입력해주세요.');
      return;
    }
    const permission = Notification.permission;

    if (permission === 'denied') {
      setShowModal2(true);
      return;
    }
    await requestNotificationPermission();

    enrollNotificationMutate.mutate({
      price: parseInt(priceRef.current?.value || '0'),
      productId: parseInt(id || '0'),
    });
  };

  return (
    <Background>
      <Wrapper>
        <Content>
          <CloseBtnWrapper>
            <CloseBtn width="5.3%" ratio="1/1" onClick={onClose} />
          </CloseBtnWrapper>
          <HeaderSection type={type} />
          <ProductCard
            name={name}
            brand={brand}
            currentPrice={currentPrice}
            src={imgSrc}
            label="알림 원하는 상품"
          />
          <PriceCard
            priceList={priceList}
            aspectRatio="334/64"
            marginTop="4.59%"
            marginBottom="5.99%"
            onChange={selectPrice}
          />
          <UserInput
            refer={priceRef}
            placeholder={inputInfo.placeholder}
            label={inputInfo.label}
            type={inputInfo.type}
          />
          <Button
            width="100%"
            aspectRatio="358/32"
            onClick={handleEnroll}
            borderRadius="100px"
            marginTop="7.19%"
            msg="알림 등록하기"
          />
        </Content>
        {showModal && (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            msg="알림 등록이 완료되었습니다."
            src="/images/logo2.png"
            url=""
            btnMsg="확인"
          />
        )}
        {showModal2 && (
          <Modal
            showModal={showModal2}
            setShowModal={setShowModal2}
            msg="알림 권한이 거부되었습니다. 알림은 재설치를 통해 다시 설정할 수 있습니다."
            src="/images/logo2.png"
            url=""
            btnMsg="확인"
          />
        )}
      </Wrapper>
    </Background>
  );
}

interface ModalProps {
  type: string;
  priceList: number[];
  onClose: () => void;
  name: string;
  brand: string;
  currentPrice: number;
  imgSrc: string | undefined;
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  background-color: white;
  border-radius: 21px;
  padding: 3% 3.35%;
  box-sizing: border-box;
  box-shadow: inset 0 0 0 3px #ffe760;
  aspect-ratio: 358/534;
  width: 89.05%;
  max-width: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const CloseBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
