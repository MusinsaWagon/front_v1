import styled from 'styled-components';
import heartIcon from '../../../assets/images/heartIcon.png';
import { useLocation } from 'react-router-dom';
import Image from '../../common/Image';
import { useNavigate } from 'react-router-dom';
interface ProductProps {
  productNumber: number;
  name: string;
  brand: string;
  starScore: number;
  reviewCount: number;
  likeCount: number;
  imgUrl: string;
  shopType: string;
  isLiked: boolean;
  currentPrice: number;
  previousPrice: number;
}
interface DataProps {
  info: ProductProps;
  type?: boolean;
}

interface ChangeRateProps {
  $isPositive: boolean;
}
const Item: React.FC<DataProps> = ({ info, type }) => {
  const location = useLocation().pathname;
  const priceDifference = info.currentPrice - info.previousPrice;
  const priceChangeRate = (
    (priceDifference / info.previousPrice) *
    100
  ).toFixed(1);
  const navigate = useNavigate();
  const handleClick = () => {
    sessionStorage.setItem('isRefresh', 'false');
    navigate(`/product/${info.productNumber}?site=MUSINSA`);
  };
  return (
    <Container $isEntire={location === '/entire'} onClick={handleClick}>
      <ImgBox $isEntire={location === '/'}>
        <Image
          borderRadius="11.86px"
          width="100%"
          aspectRatio={'1 / 1'}
          src={`https://image.msscdn.net${info.imgUrl}`}
        />

        <LikeBtn $isLiked={info.isLiked}>
          <LikeImg src={heartIcon} />
        </LikeBtn>
      </ImgBox>
      <ContBox>
        <Brand $type={type || false}>{info.brand}</Brand>
        <Name $type={type || false}>{info.name}</Name>
        <Price $type={type || false}>
          ₩ {info.currentPrice.toLocaleString()}
        </Price>
        <ChangeRate $isPositive={priceDifference >= 0}>
          {priceDifference >= 0 ? '▲' : '▼'} ₩
          {' ' + Math.abs(priceDifference).toLocaleString()} (
          {priceDifference >= 0 ? '+' : '-'}
          {Math.abs(Number(priceChangeRate))}%)
        </ChangeRate>
      </ContBox>
    </Container>
  );
};

const Container = styled.div<{ $isEntire: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${(props) => (props.$isEntire ? '9.43px' : '20px')};
  width: 100%;
`;
const ImgBox = styled.div<{ $isEntire: boolean }>`
  width: ${(props) => (props.$isEntire ? '100px' : '100%')};
  aspect-ratio: 1/1;
  background-color: #e6e6e6;
  border-radius: 11.86px;
  position: relative;
`;

const LikeBtn = styled.button<{ $isLiked?: boolean }>`
  height: 23.92px;
  width: 23.72px;
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
  background-color: ${({ $isLiked, theme }) =>
    $isLiked ? theme.colors.yellow : 'rgba(0, 0, 0, 0.3)'};
`;
const LikeImg = styled.img`
  height: 14.65px;
  width: 16.42px;
`;
const ContBox = styled.div`
  width: 100%;
  display: grid;
  row-gap: 7px;
  text-align: left;
`;
const Brand = styled.span<{ $type: boolean }>`
  font-weight: 600;
  font-size: 9.49px;
  border-bottom: 0.8px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 6.6px;
  color: ${(props) => (!props.$type ? 'black' : 'white')};
`;
const Name = styled.p<{ $type: boolean }>`
  font-weight: 700;
  font-size: 10.19px;
  padding: 0;
  height: 23.5px;
  line-height: 120%;
  color: ${(props) => (!props.$type ? 'black' : 'white')};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Price = styled.span<{ $type: boolean }>`
  font-weight: 700;
  font-size: 10.19px;
  color: ${(props) => (!props.$type ? 'black' : 'white')};
`;
const ChangeRate = styled.span<ChangeRateProps>`
  font-weight: 700;
  font-size: 8.49px;
  color: ${(props) =>
    props.$isPositive ? props.theme.colors.green : props.theme.colors.red};
`;
export default Item;
