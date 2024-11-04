import styled from 'styled-components';
import { COLORS } from '../../../constant/theme';
import Item from './Item';
interface Product {
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

interface ProductSectionProps {
  datas: null | Product[];
  title: string;
}

interface ContProps {
  FontWeight: string | number;
  state?: string;
}
const ProductSection: React.FC<ProductSectionProps> = ({ datas, title }) => {
  return (
    <Container>
      <TitleBox>
        <LeftBox>
          <Logo />
          <InnerLeftBox>
            <Cont FontWeight="600">프라이스웨건</Cont>
            <Cont state="title" FontWeight="700">
              {title}
            </Cont>
          </InnerLeftBox>
        </LeftBox>
        <Arrow>〉</Arrow>
      </TitleBox>
      <ItemsContainer>
        {datas?.map((data) => (
          <Item info={data} />
        ))}
      </ItemsContainer>
    </Container>
  );
};
const Container = styled.div``;
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
  font-weight: ${(props) => props.FontWeight};
  font-size: 14.77px;
  background-color: ${(props) => (props.state ? `${COLORS.yellow}` : null)};
`;

const Arrow = styled.span``;
const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  gap: 15.35px;
  padding: 9px 22px;
`;
export default ProductSection;
