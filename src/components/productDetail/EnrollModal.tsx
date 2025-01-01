import CloseBtn from '@/components/common/CloseBtn.tsx';
import styled from 'styled-components';
import { getInputInfos } from '../../hooks/modal/getModalInfo';
import HeaderSection from '../common/HeaderSection';
import ProductCard from '../common/ProductCard';
import PriceCard from '../common/PriceCard';
import UserInput from '../common/UserInput';
import Button from '../common/Button';
import { useRef } from 'react';
import { useMutate } from '../../hooks/useMutation';
import { enrollNotification } from '../../apis/enrollNotification';
import { useParams } from 'react-router-dom';

export default function EnrollModal({
  type,
  priceList,
  onClose,
  imgSrc,
}: ModalProps) {
  const inputInfo = getInputInfos(type);
  const priceRef = useRef<HTMLInputElement>(null);
  const { id } = useParams();
  const enrollNotificationMutate = useMutate(enrollNotification, () => {});

  const selectPrice = (price: number) => {
    priceRef.current!.value = price.toString();
  };

  const handleEnroll = () => {
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
          <ProductCard src={imgSrc} label="알림 원하는 상품" />
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
      </Wrapper>
    </Background>
  );
}

interface ModalProps {
  type: string;
  priceList: number[];
  onClose: () => void;
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
