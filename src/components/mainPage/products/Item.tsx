import styled from 'styled-components';
import heartIcon from '../../../assets/images/heartIcon.png';

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
  const priceDifference = info.currentPrice - info.previousPrice;
  const priceChangeRate = (
    (priceDifference / info.previousPrice) *
    100
  ).toFixed(1);

  return (
    <Container>
      <ImgBox>
        <Img src={`https://image.msscdn.net${info.imgUrl}`} />
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
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9.43px;
`;
const ImgBox = styled.div`
  width: 136.39px;
  height: 129.27px;
  background-color: #e6e6e6;
  border-radius: 11.86px;
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 11.86px;
  /* border: none; */
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
  display: flex;
  flex-direction: column;
  gap: 8.71px;
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
  height: 20px;
  display: block;
`;
const Price = styled.span`
  font-weight: 700;
  font-size: 10.19px;
`;
const ChangeRate = styled.span<ChangeRateProps>`
  font-weight: 700;
  font-size: 9.49px;
  color: ${(props) =>
    props.isPositive ? props.theme.colors.green : props.theme.colors.red};
`;
export default Item;
