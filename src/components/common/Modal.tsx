import * as M from '@/styles/modal/Modal.styled';
import CloseBtn from '@/components/common/CloseBtn.tsx';
import { getInputInfos } from '../../hooks/modal/getModalInfo';
import HeaderSection from './HeaderSection';
import ProductCard from './ProductCard';
import PriceCard from './PriceCard';
import UserInput from './UserInput';
import Button from './Button';

interface ModalProps {
  type: string;
  onClick: () => void;
  priceList: number[];
  onClose: () => void;
}

export default function Modal({
  type,
  onClick,
  priceList,
  onClose,
}: ModalProps) {
  const inputInfo = getInputInfos(type);

  return (
    <M.Background>
      <M.Wrapper>
        <M.Content>
          <M.CloseBtnWrapper>
            <CloseBtn width="5.3%" ratio="1/1" onClick={onClose} />
          </M.CloseBtnWrapper>
          <HeaderSection type={type} />
          <ProductCard label="알림 원하는 상품" />
          <PriceCard
            priceList={priceList}
            aspectRatio="334/64"
            marginTop="4.59%"
            marginBottom="5.99%"
          />
          <UserInput
            placeholder={inputInfo.placeholder}
            label={inputInfo.label}
            type={inputInfo.type}
          />
          <Button
            width="100%"
            aspectRatio="358/32"
            onClick={onClick}
            borderRadius="100px"
            marginTop="7.19%"
            msg="알림 등록하기"
          />
        </M.Content>
      </M.Wrapper>
    </M.Background>
  );
}
