import { useState } from 'react';
import styled from 'styled-components';

interface ImageProps {
  src: string | undefined;
  width: string;
  aspectRatio: string;
  borderRadius: string;
}

type ImageWrapperProps = {
  [K in keyof Pick<
    ImageProps,
    'width' | 'aspectRatio' | 'borderRadius'
  > as `$${K}`]: ImageProps[K];
};

export default function Image({
  src,
  width,
  aspectRatio,
  borderRadius,
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <ImageWrapper
      $width={width}
      $aspectRatio={aspectRatio}
      $borderRadius={borderRadius}
    >
      <Placeholder $isLoaded={isLoaded} />
      <StyledImg
        src={src}
        onLoad={handleImageLoad}
        loading="lazy"
        $isLoaded={isLoaded}
        alt="상품 이미지"
      />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div<ImageWrapperProps>`
  width: ${({ $width }) => $width};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  position: relative;
  overflow: hidden;
  border-radius: ${({ $borderRadius }) => $borderRadius};
`;

const StyledImg = styled.img<{ $isLoaded: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
  visibility: ${({ $isLoaded }) => ($isLoaded ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  border-radius: inherit;
`;

const Placeholder = styled.div<{ $isLoaded: boolean }>`
  background-color: #c0c0c0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
