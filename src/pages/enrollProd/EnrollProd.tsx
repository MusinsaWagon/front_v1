import HeaderSection from '../../components/common/HeaderSection';
import Image from '../../components/common/Image';
import UserInput from '../../components/common/UserInput';
import { getInputInfos } from '../../hooks/modal/getModalInfo';
import * as E from '../../styles/enrollProd/EnrollProd.styled';

interface EnrollProdProps {
  type: string;
}

export default function EnrollProd({ type }: EnrollProdProps) {
  const inputInfos = getInputInfos(type);
  const list = ['MUSINSA', 'ZIGZAG', 'ABLY'];
  return (
    <E.Wrapper>
      <HeaderSection type="product" />
      <E.InputWrapper>
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
      </E.InputWrapper>
      <E.ProdWrapper>
        <label>등록하려는 상품 정보</label>
        <E.ProdInfo>
          <E.ProdHeader>
            <span>[{'PRENDA'}]</span>
            <E.Line width="100%" />
            <span>PRDA DENIM PATCH CREWNECK SHIRT</span>
            <label>￦ 39,900</label>
          </E.ProdHeader>
          <E.ImageWrapper>
            {Array.from({ length: 3 }).map((_, index) => (
              <Image src="" key={index} width="31.61%" aspectRatio="1/1" />
            ))}
          </E.ImageWrapper>
        </E.ProdInfo>
      </E.ProdWrapper>
    </E.Wrapper>
  );
}
