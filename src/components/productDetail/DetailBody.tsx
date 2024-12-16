import styled from 'styled-components';
import Button from '../common/Button';
import LineHeader from '../common/LineHeader';
import PriceCard from '../common/PriceCard';
import PriceChart from './PriceChart';
import PriceInfo from './PriceInfo';
import basket from '../../assets/images/basket.png';
import bell from '../../assets/images/bell.png';
import Modal from '../common/Modal';
import { useState } from 'react';

interface DetailBodyProps {
  basicProductInfo: {
    brand: string;
    name: string;
    starScore: number;
    likeCount: number;
    reviewCount: number;
    previousPrice: number;
    currentPrice: number;
  };
  parentAndChildCategoryDTO: {
    parentCategory: {
      categoryName: string;
    };
    childCategory: {
      categoryName: string;
    };
  };
  productDetail: {
    lowPrice: number;
    highPrice: number;
    middlePrice: number;
    productUrl: string;
  };
  productHistoryList: [
    {
      createdAt: string;
      price: number;
    }
  ];
}

export default function DetailBody({
  basicProductInfo,
  parentAndChildCategoryDTO,
  productDetail,
  productHistoryList,
}: DetailBodyProps) {
  const [showModal, setShowModal] = useState(false);
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
    <BodyWrapper>
      <Category>
        <h6>
          {parentAndChildCategoryDTO.parentCategory.categoryName} &gt;{' '}
          {parentAndChildCategoryDTO.childCategory.categoryName}
        </h6>
      </Category>
      <LineHeader
        width="100%"
        lineWidth="100%"
        padding="0"
        msg={basicProductInfo.brand}
        msg2={basicProductInfo.name}
        review={[
          basicProductInfo.starScore,
          basicProductInfo.likeCount,
          basicProductInfo.reviewCount,
        ]}
      />
      <PriceInfo
        prevPrice={basicProductInfo.previousPrice}
        curPrice={basicProductInfo.currentPrice}
      />
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
          onClick={() => {
            setShowModal(true);
          }}
          msg="알림 등록"
        />
      </BtnWrapper>
      <PriceCard
        aspectRatio="359/82"
        marginTop="11px"
        marginBottom="7px"
        priceList={[
          productDetail.lowPrice,
          productDetail.middlePrice,
          productDetail.highPrice,
        ]}
      />
      <FluctDate>
        <figcaption>
          최근 가격 변동:{' '}
          {productHistoryList[productHistoryList.length - 1].createdAt}
        </figcaption>
      </FluctDate>
      <ChartWrapper>
        <PriceChart
          data1M={data1M}
          data3M={data3M}
          data6M={data6M}
          data1Y={data1Y}
        />
      </ChartWrapper>
      {showModal && (
        <Modal
          type="price"
          onClick={() => {}}
          onClose={() => {
            setShowModal(false);
          }}
          priceList={[
            productDetail.lowPrice,
            productDetail.middlePrice,
            productDetail.highPrice,
          ]}
        />
      )}
    </BodyWrapper>
  );
}

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
