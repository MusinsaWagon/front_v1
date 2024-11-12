import styled from 'styled-components';
import Image from '../../components/common/Image';
import hearticon from '../../assets/images/heartIcon.png';
import LineHeader from '../../components/common/LineHeader';
import PriceInfo from '../../components/productDetail/PriceInfo';
import Button from '../../components/common/Button';
import basket from '../../assets/images/basket.png';
import bell from '../../assets/images/bell.png';
import PriceCard from '../../components/common/PriceCard';
import PriceChart from '../../components/productDetail/PriceChart';

export default function ProductDetail() {
  const data1M = [
    { date: '2024-10-01', price: 29900 },
    { date: '2024-10-03', price: 31000 },
    { date: '2024-10-10', price: 33000 },
    { date: '2024-10-15', price: 39000 },
    { date: '2024-10-20', price: 33000 },
    { date: '2024-10-25', price: 39000 },
    { date: '2024-10-30', price: 32000 },
  ];

  const data3M = [
    { date: '2024-08-01', price: 95 },
    { date: '2024-08-15', price: 100 },
    { date: '2024-09-01', price: 105 },
    { date: '2024-09-15', price: 110 },
    { date: '2024-10-01', price: 120 },
    { date: '2024-10-15', price: 125 },
    { date: '2024-11-01', price: 130 },
  ];

  const data6M = [
    { date: '2024-05-01', price: 85 },
    { date: '2024-06-01', price: 90 },
    { date: '2024-07-01', price: 92 },
    { date: '2024-08-01', price: 95 },
    { date: '2024-09-01', price: 105 },
    { date: '2024-10-01', price: 120 },
    { date: '2024-11-01', price: 130 },
  ];

  const data1Y = [
    { date: '2024-01-01', price: 75 },
    { date: '2024-02-01', price: 80 },
    { date: '2024-03-01', price: 85 },
    { date: '2024-04-01', price: 88 },
    { date: '2024-05-01', price: 90 },
    { date: '2024-06-01', price: 95 },
    { date: '2024-07-01', price: 100 },
    { date: '2024-08-01', price: 105 },
    { date: '2024-09-01', price: 110 },
    { date: '2024-10-01', price: 120 },
    { date: '2024-11-01', price: 130 },
    { date: '2024-12-01', price: 135 },
  ];

  return (
    <PageWrapper>
      <ImageWrapper>
        <Image width="100%" aspectRatio="402/431" src="" borderRadius="20px" />
        <Heart>
          <img src={hearticon} />
        </Heart>
      </ImageWrapper>
      <BodyWrapper>
        <Category>
          <h6>상의 &gt; 맨투맨/스웨트</h6>
        </Category>
        <LineHeader
          width="100%"
          lineWidth="100%"
          padding="0"
          msg="PRENDA"
          msg2="PRDA DENIM PATCH CREWNECK SHIRT"
          review={[4.8, 234, 185]}
        />
        <PriceInfo prevPrice={39900} curPrice={24150} />
        <Line />
        <BtnWrapper>
          <Button
            width="49.02%"
            aspectRatio="176/35"
            borderRadius="7px"
            src={basket}
            onClick={() => {}}
            msg="구매하러 가기"
          />
          <Button
            width="49.02%"
            aspectRatio="176/35"
            borderRadius="7px"
            src={bell}
            onClick={() => {}}
            msg="알림 등록"
          />
        </BtnWrapper>
        <PriceCard
          aspectRatio="359/82"
          marginTop="11px"
          marginBottom="7px"
          priceList={[24150, 34000, 40000]}
        />
        <FluctDate>
          <figcaption>최근 가격 변동: 2024-09-07</figcaption>
        </FluctDate>
        <ChartWrapper>
          <PriceChart
            data1M={data1M}
            data3M={data3M}
            data6M={data6M}
            data1Y={data1Y}
          />
        </ChartWrapper>
      </BodyWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  height: 80vh;
  overflow-y: scroll;
`;

const ImageWrapper = styled.div`
  bottom: 20px;
  width: 100%;
  position: relative;
  margin-bottom: -20px;
`;

const Heart = styled.div`
  width: 9.45%;
  aspect-ratio: 1/1;
  border-radius: 5px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 68.42%;
    aspect-ratio: 26/23;
  }
`;

const BodyWrapper = styled.div`
  padding: 15px 5.57%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Category = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;

  h6 {
    color: rgba(12, 12, 12, 0.5);
    font-size: 10px;
    font-weight: bold;
  }
`;

const Line = styled.div`
  height: 0.5px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  margin: 16px 0;
`;

const BtnWrapper = styled.div`
  width: 100%;
  gap: 1.95%;
  display: flex;
  justify-content: space-between;
`;

const FluctDate = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;

  figcaption {
    font-size: 7px;
    font-weight: bold;
    color: rgba(12, 12, 12, 0.5);
  }
`;

const ChartWrapper = styled.div`
  width: 100%;
  aspect-ratio: 359/181;
  border-radius: 12px;
  box-shadow: 1px 1px 8px 0 rgba(0, 0, 0, 0.25);
  padding-top: 11px;
  margin-top: 7px;
`;
