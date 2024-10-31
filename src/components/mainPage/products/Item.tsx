import styled from 'styled-components';
import heartIcon from '../../../assets/images/heartIcon.png';
import { COLORS } from '../../../constant/theme';
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
const Item: React.FC<DataProps> = ({ info }) => {
  console.log('info:', info);
  return (
    <Container>
      <ImgBox>
        <LikeBtn>
          <LikeImg src={heartIcon} />
        </LikeBtn>
      </ImgBox>
      <ContBox>
        <Brand>{info.brand}</Brand>
        <Name>{info.name}</Name>
        <Price>₩{info.currentPrice}</Price>
        <ChangeRate>₩{info.previousPrice}</ChangeRate>
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
`;
const Name = styled.p`
  font-weight: 700;
  font-size: 10.19px;
`;
const Price = styled.span`
  font-weight: 700;
  font-size: 10.19px;
`;
const ChangeRate = styled.span`
  font-weight: 700;
  font-size: 9.49px;
  color: ${COLORS.green};
`;

export default Item;
