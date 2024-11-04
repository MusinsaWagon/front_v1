import styled from 'styled-components';
import { getInputInfos } from '../../hooks/modal/getModalInfo';
import UserInput from '../common/UserInput';
import Image from '../common/Image';
import Button from '../common/Button';
import LineHeader from '../common/LineHeader';

interface BodySectionProps {
  type: string;
}

export default function BodySection({ type }: BodySectionProps) {
  const inputInfos = getInputInfos(type);
  const list = ['MUSINSA', 'ZIGZAG', 'ABLY'];

  const handleEnroll = () => {}; //등록 로직 구현

  return (
    <>
      <InputWrapper>
        <UserInput
          type={inputInfos.type}
          placeholder={inputInfos.placeholder}
          label={inputInfos.label}
          list={list}
        />
        <UserInput
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
              <Image src="" key={index} width="31.61%" aspectRatio="1/1" />
            ))}
          </ImageWrapper>
        </ProdInfo>
        <span>등록 후 업데이트까지 시간이 소요될 수 있습니다.</span>
      </ProdWrapper>
      <Button
        onClick={handleEnroll}
        borderRadius="100px"
        width="100%"
        aspectRatio="358/32"
      />
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
