import styled from 'styled-components';
import Item from './Item';
import { useNavigate } from 'react-router-dom';
interface Product {
  productNumber: number;
  name: string;
  brand: string;
  starScore: number;
  reviewCount: number;
  likeCount: number;
  isLiked: boolean;
  imgUrl: string;
  shopType: string;
  currentPrice: number;
  previousPrice: number;
}

interface ProductSectionProps {
  datas: null | Product[];
  title: string;
}

interface ContProps {
  $fontWeight: string | number;
  state?: string;
}
const ProductSection: React.FC<ProductSectionProps> = ({ datas, title }) => {
  const navigate = useNavigate();

  const handleArrowClick = () => {
    navigate('/entire');
  };
  return (
    <Container>
      <TitleBox>
        <LeftBox>
          <Logo />
          <InnerLeftBox>
            <Cont $fontWeight="700">프라이스웨건</Cont>
            <Cont state="title" $fontWeight="700">
              {title}
            </Cont>
          </InnerLeftBox>
        </LeftBox>
        <Arrow onClick={handleArrowClick}>〉</Arrow>
      </TitleBox>
      <ItemsContainer>
        {datas?.map((data, index) => (
          <Item key={index} info={data} />
        ))}
      </ItemsContainer>
    </Container>
  );
};
const Container = styled.div`
  border-bottom: 0.8px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 21.28px;
  width: 100%;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const LeftBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12.72px;
`;
const Logo = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;
const InnerLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.46px;
`;
const Cont = styled.span<ContProps>`
  font-weight: ${(props) => props.$fontWeight};
  font-size: 14.77px;
  background-color: ${(props) =>
    props.state ? `${props.theme.colors.yellow}` : null};
`;

const Arrow = styled.span``;
const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  gap: 15.35px;
  padding: 20px 0;
`;
export default ProductSection;
