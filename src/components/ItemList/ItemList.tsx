import styled from 'styled-components';
import Item from '../mainPage/products/Item';

interface ItemList {
  datas: ProductType[] | null | undefined;
  isDrawerOpen?: boolean;
}
type ProductType = {
  productNumber: number;
  name: string;
  brand: string;
  starScore: number;
  reviewCount: number;
  likeCount: number;
  imgUrl: string;
  isLiked: boolean;
  shopType: string;
  currentPrice: number;
  previousPrice: number;
};

const ItemList = ({ datas, isDrawerOpen }: ItemList) => {
  return (
    <ItemsContainer>
      {datas?.map((data) => (
        <Item key={data.productNumber} info={data} />
      ))}
      {isDrawerOpen && <Background></Background>}
    </ItemsContainer>
  );
};

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 25px 22px 20px 22px;
  min-height: 300px;
  position: relative;
`;
export default ItemList;
const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 25;
  background-color: rgba(30, 30, 30, 0.6);
`;
