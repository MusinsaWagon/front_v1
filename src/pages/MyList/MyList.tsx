import styled from 'styled-components';
import Item from '../../components/mainPage/products/Item';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getMyList } from '../../apis/myList/useMyList';
import Loading from '../../components/common/Loading';
import Modal from '../../components/common/Modal';
import { useState } from 'react';

export default function MyList() {
  const location = useLocation().pathname;
  const [showModal, setShowModal] = useState(false);
  const type = location === '/heartList' ? 'heart' : 'enroll';
  const { data, isLoading } = useQuery({
    queryKey: [type],
    queryFn: () => getMyList(type, setShowModal),
    staleTime: 1000 * 5 * 60,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <Loading />;

  return (
    <PageWrapper>
      <Header>
        {type === 'enroll' ? '내가 알림 받는 상품' : '내가 찜한 상품'}
      </Header>
      <ItemWrapper>
        {data &&
          data.map((item: Product) => (
            <Item key={item.productNumber} info={item} type={true} />
          ))}
      </ItemWrapper>
      {showModal && (
        <Modal
          msg="로그인이 필요한 서비스입니다."
          showModal={showModal}
          setShowModal={setShowModal}
          url="/login"
          src="/images/logo2.png"
          btnMsg="로그인하러 가기"
        />
      )}
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
  isLiked: boolean;
}
