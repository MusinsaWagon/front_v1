import styled from 'styled-components';
import Button from '../common/Button';
import LineHeader from '../common/LineHeader';
import PriceCard from '../common/PriceCard';
import PriceChart from './PriceChart';
import PriceInfo from './PriceInfo';
import basket from '../../assets/images/basket.png';
import bell from '/images/bell.png';
import EnrollModal from './EnrollModal';
import { useState } from 'react';
import Modal from '../common/Modal';

export default function DetailBody({
  basicProductInfo,
  parentAndChildCategoryDTO,
  productDetail,
  productHistoryList,
  imgSrc,
}: DetailBodyProps) {
  const [showModal, setShowModal] = useState(false); // 알림 등록 모달
  const [showModal2, setShowModal2] = useState(false); // 미로그인 상태로 알림 등록 눌렀을 때

  const checkLogin = () => {
    if (
      localStorage.getItem('accessToken') &&
      localStorage.getItem('accessToken') !== 'null'
    ) {
      setShowModal(true);
    } else {
      setShowModal2(true);
    }
  };

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
          onClick={checkLogin}
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
        <figcaption>최근 가격 변동: {productHistoryList.recentDate}</figcaption>
      </FluctDate>
      <ChartWrapper>
        <PriceChart
          data1W={productHistoryList.oneWeekList}
          data1M={productHistoryList.oneMonthList}
          data3M={productHistoryList.threeMonthList}
        />
      </ChartWrapper>
      {showModal && (
        <EnrollModal
          type="price"
          onClose={() => {
            setShowModal(false);
          }}
          priceList={[
            productDetail.lowPrice,
            productDetail.middlePrice,
            productDetail.highPrice,
          ]}
          name={basicProductInfo.name}
          brand={basicProductInfo.brand}
          currentPrice={basicProductInfo.currentPrice}
          imgSrc={imgSrc}
        />
      )}
      {showModal2 && (
        <Modal
          msg="로그인이 필요한 서비스입니다."
          showModal={showModal2}
          setShowModal={setShowModal2}
          url="/login"
          src="/images/logo2.png"
          btnMsg="로그인하러 가기"
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
  productHistoryList: {
    oneWeekList: [];
    oneMonthList: [];
    threeMonthList: [];
    recentDate: string;
  };
  imgSrc: string | undefined;
}
