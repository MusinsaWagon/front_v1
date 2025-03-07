import styled from 'styled-components';
import Item from '../../components/mainPage/products/Item';
import { ProductDetail } from '../../apis/productDetail/getProductDetail';
import { useQuery } from '@tanstack/react-query';
import { getEmail } from '../../apis/myList/useMyList';

export default function MyPage() {
  const storedData = localStorage.getItem('productBasicInfo');
  const { data: email, isLoading } = useQuery({
    queryKey: ['myPage'],
    queryFn: () => getEmail(),
    staleTime: 1000 * 5 * 60,
    refetchOnWindowFocus: false,
  });
  const data = storedData ? JSON.parse(storedData) : [];

  return (
    <PageWrapper>
      <h1>MYPAGE</h1>
      <Header>
        <User>
          <img src="/images/userImage.png" />
          <UserInfo>
            <Name>{isLoading ? 'loading...' : email}</Name>
          </UserInfo>
        </User>
      </Header>
      <CurrentView>
        <h2>최근 본 상품</h2>
        <Items $isData={data.length > 0}>
          {data.length > 0 ? (
            data.map((item: ProductDetail) => (
              <Item key={item.name} info={item} type={true} />
            ))
          ) : (
            <NoItems>최근 본 상품이 없습니다.</NoItems>
          )}
        </Items>
      </CurrentView>
      <Notice>
        <span>
          * 한 번 거부된 알림설정은 기기의 환경설정을 통해서만 변경 가능합니다.
        </span>
      </Notice>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  height: 80vh;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 18px 5.97%;
  color: ${({ theme }) => theme.colors.white};

  h1 {
    margin-left: 10px;
    font-size: 12px;
    font-weight: 800;
  }
`;

const Header = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  padding: 11px;
`;

const User = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;
`;

const Name = styled.div`
  font-size: 10px;
  font-weight: 700;
`;

const CurrentView = styled.div`
  width: 100%;
  background-color: #434343;
  gap: 10px;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  padding: 14px;
  box-sizing: border-box;
  border-radius: 15px;

  h2 {
    font-size: 10px;
    margin-bottom: 14px;
  }
`;

const Items = styled.div<{ $isData: boolean }>`
  display: ${({ $isData }) => ($isData ? 'grid' : 'flex')};
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const NoItems = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.6;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Notice = styled.div`
  font-size: 8px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.6;
  text-align: center;
`;
