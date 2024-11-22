import styled from 'styled-components';
import Image from '../../components/common/Image';
import hearticon from '../../assets/images/heartIcon.png';
import DetailBody from '../../components/productDetail/DetailBody';

export default function ProductDetail() {
  return (
    <PageWrapper>
      <ImageWrapper>
        <Image width="100%" aspectRatio="402/431" src="" borderRadius="20px" />
        <Heart>
          <img src={hearticon} />
        </Heart>
      </ImageWrapper>
      <DetailBody />
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
