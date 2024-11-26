import styled from 'styled-components';
import heartIcon from '../../../assets/images/heartIcon.png';
import { COLORS } from '../../../constant/theme';
import { useLocation } from 'react-router-dom';
import Image from '../../common/Image';
interface ProductProps {
  productNumber: number;
  name: string;
  brand: string;
  starScore: number;
  reviewCount: number;
  likeCount: number;
  imgUrl: string;
  shopType: string;
  currentPrice: number;
  previousPrice: number;
}
interface DataProps {
  info: ProductProps;
}

interface ChangeRateProps {
  isPositive: boolean;
}
const Item: React.FC<DataProps> = ({ info }) => {
  const location = useLocation();
  const state = location.state;
  const priceDifference = info.currentPrice - info.previousPrice;
  const priceChangeRate = (
    (priceDifference / info.previousPrice) *
    100
  ).toFixed(1);

  return (
    <Container isEntire={state?.showEntire}>
      <ImgBox isEntire={state?.showEntire}>
        <Image
          borderRadius="11.86px"
          width="100%"
          aspectRatio={'1 / 1'}
          src={`https://image.msscdn.net${info.imgUrl}`}
        />

        <LikeBtn>
          <LikeImg src={heartIcon} />
        </LikeBtn>
      </ImgBox>
      <ContBox>
        <Brand>{info.brand}</Brand>
        <Name>{info.name}</Name>
        <Price>₩ {info.currentPrice.toLocaleString()}</Price>
        <ChangeRate isPositive={priceDifference >= 0}>
          {priceDifference >= 0 ? '▲' : '▼'} ₩
          {' ' + Math.abs(priceDifference).toLocaleString()} (
          {priceDifference >= 0 ? '+' : '-'}
          {Math.abs(Number(priceChangeRate))}%)
        </ChangeRate>
      </ContBox>
    </Container>
  );
};
const Container = styled.div<{ isEntire: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.isEntire ? '9.43px' : '20px')};
  width: 100%;
`;
const ImgBox = styled.div<{ isEntire: boolean }>`
  width: ${(props) => (props.isEntire ? null : '136.39px')};
  height: ${(props) => (props.isEntire ? null : '129.27px')};
  background-color: #e6e6e6;
  border-radius: 11.86px;
  position: relative;
`;

const LikeBtn = styled.button`
  height: 23.92px;
  width: 23.72px;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 4.74px;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 4.74px;
  bottom: 3.72px;
  z-index: 10;
`;
const LikeImg = styled.img`
  height: 14.65px;
  width: 16.42px;
`;
const ContBox = styled.div`
  display: grid;
  /* flex-direction: column; */
  row-gap: 7px;
`;
const Brand = styled.span`
  font-weight: 600;
  font-size: 9.49px;
  border-bottom: 0.8px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 6.6px;
`;
const Name = styled.p`
  font-weight: 700;
  font-size: 10.19px;
  padding: 0;
  height: 35px;
  display: block;
  line-height: 120%;
`;
const Price = styled.span`
  font-weight: 700;
  font-size: 10.19px;
`;
const ChangeRate = styled.span<ChangeRateProps>`
  font-weight: 700;
  font-size: 0.5rem;
  color: ${(props) => (props.isPositive ? COLORS.green : `${COLORS.red}`)};
`;

export default Item;
