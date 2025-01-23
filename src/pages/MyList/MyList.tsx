import styled from 'styled-components';
import Item from '../../components/mainPage/products/Item';
import { useLocation } from 'react-router-dom';

export default function MyList() {
  const location = useLocation().pathname;
  const type = location === '/heartList' ? 'heart' : 'enroll';
  const data = [
    {
      productNumber: 1,
      name: 'Essential Oversized Hoodie',
      brand: 'Nike',
      starScore: 4.8,
      reviewCount: 152,
      likeCount: 230,
      imgUrl: 'https://example.com/images/hoodie1.jpg',
      shopType: 'MUSINSA',
      currentPrice: 89000,
      previousPrice: 129000,
      isLiked: true,
    },
    {
      productNumber: 2,
      name: 'Classic Canvas Sneakers',
      brand: 'Converse',
      starScore: 4.5,
      reviewCount: 310,
      likeCount: 560,
      imgUrl: 'https://example.com/images/sneakers1.jpg',
      shopType: 'MUSINSA',
      currentPrice: 55000,
      previousPrice: 65000,
      isLiked: false,
    },
    {
      productNumber: 3,
      name: 'Slim Fit Jeans',
      brand: "Levi's",
      starScore: 4.3,
      reviewCount: 98,
      likeCount: 120,
      imgUrl: 'https://example.com/images/jeans1.jpg',
      shopType: 'MUSINSA',
      currentPrice: 79000,
      previousPrice: 99000,
      isLiked: true,
    },
    {
      productNumber: 4,
      name: 'Essential Oversized Hoodie',
      brand: 'Nike',
      starScore: 4.8,
      reviewCount: 152,
      likeCount: 230,
      imgUrl: 'https://example.com/images/hoodie1.jpg',
      shopType: 'MUSINSA',
      currentPrice: 89000,
      previousPrice: 129000,
      isLiked: true,
    },
    {
      productNumber: 5,
      name: 'Classic Canvas Sneakers',
      brand: 'Converse',
      starScore: 4.5,
      reviewCount: 310,
      likeCount: 560,
      imgUrl: 'https://example.com/images/sneakers1.jpg',
      shopType: 'MUSINSA',
      currentPrice: 55000,
      previousPrice: 65000,
      isLiked: false,
    },
    {
      productNumber: 6,
      name: 'Slim Fit Jeans',
      brand: "Levi's",
      starScore: 4.3,
      reviewCount: 98,
      likeCount: 120,
      imgUrl: 'https://example.com/images/jeans1.jpg',
      shopType: 'MUSINSA',
      currentPrice: 79000,
      previousPrice: 99000,
      isLiked: true,
    },
  ];

  return (
    <PageWrapper>
      <Header>
        {type === 'enroll' ? '내가 알림 받는 상품' : '내가 찜한 상품'}
      </Header>
      <ItemWrapper>
        {data.map((item) => (
          <Item key={item.productNumber} info={item} type={true} />
        ))}
      </ItemWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  height: 90vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 22px;
  font-size: 14.77px;
  font-weight: 800;
  color: white;
`;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 1행 3열로 고정 */
  gap: 10px;
  padding: 0 23px;
`;
