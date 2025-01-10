import styled from 'styled-components';
import { getInputInfos } from '../../hooks/modal/getModalInfo';
import UserInput from '../common/UserInput';
import Image from '../common/Image';
import Button from '../common/Button';
import LineHeader from '../common/LineHeader';
import { useRef, useState } from 'react';
import { useMutate } from '../../hooks/useMutation';
import { enrollProduct } from '../../apis/productDetail/enrollProduct';
import Modal from '../common/Modal';

interface BodySectionProps {
  type: string;
}

export default function BodySection({ type }: BodySectionProps) {
  const inputInfos = getInputInfos(type);
  const list = ['MUSINSA', 'ZIGZAG', 'ABLY'];
  const urlRef = useRef<HTMLInputElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectContent, setSelectContent] = useState<string | undefined>('');
  const enrollProdMutate = useMutate(enrollProduct, () => setShowModal(true));

  const handleEnroll = () => {
    if (!urlRef.current || !urlRef.current.value || !selectContent) {
      alert('모든 정보를 입력해주세요');
      return;
    }

    enrollProdMutate.mutate({
      url: urlRef.current?.value,
      shopType: selectContent,
    });
  };

  return (
    <>
      <InputWrapper>
        <UserInput
          type={inputInfos.type}
          placeholder={inputInfos.placeholder}
          label={inputInfos.label}
          list={list}
          selectContent={selectContent}
          setSelectContent={setSelectContent}
        />
        <UserInput
          refer={urlRef}
          type={inputInfos.type2}
          placeholder={inputInfos.placeholder2}
          label={inputInfos.label2}
        />
      </InputWrapper>
      <ProdWrapper>
        <label>등록하려는 상품 정보</label>
        <ProdInfo>
          <LineHeader
            lineWidth="100%"
            width="100%"
            msg="PRENDA"
            msg2="PRDA DENIM PATCH CREWNECK SHIRT"
            price={39900}
          />
          <ImageWrapper>
            {Array.from({ length: 3 }).map((_, index) => (
              <Image
                src=""
                key={index}
                width="31.61%"
                aspectRatio="1/1"
                borderRadius="4.09px"
              />
            ))}
          </ImageWrapper>
        </ProdInfo>
        <span>등록 후 업데이트까지 시간이 소요될 수 있습니다.</span>
      </ProdWrapper>
      <Button
        msg="상품 등록하기"
        onClick={handleEnroll}
        borderRadius="100px"
        width="100%"
        aspectRatio="358/32"
      />
      {showModal && (
        <Modal
          msg="상품등록이 완료되었습니다."
          btnMsg="확인"
          showModal={showModal}
          setShowModal={setShowModal}
          src="/images/logo2.png"
          url=""
        />
      )}
    </>
  );
}

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 19px 0;
`;

export const ProdWrapper = styled.div`
  margin-top: 19px;
  margin-bottom: 8.58%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7px 0;
  & > label {
    color: rgba(12, 12, 12, 0.5);
    font-size: 7px;
    letter-spacing: 0.24px;
    font-weight: bold;
    text-align: left;
    width: 100%;
  }
  & > span {
    width: 100%;
    text-align: right;
    font-size: 6px;
    color: rgba(12, 12, 12, 0.5);
    font-weight: bold;
    line-height: 8px;
    letter-spacing: 0.24px;
  }
`;

export const ProdInfo = styled.div`
  box-shadow: inset 0 0 0 1.07px #cfcfcf;
  padding: 18px 3.35% 11.07px 3.35%;
`;

export const ImageWrapper = styled.div`
  margin-top: 4.25%;
  display: flex;
  justify-content: center;
  gap: 2.7%;
`;
