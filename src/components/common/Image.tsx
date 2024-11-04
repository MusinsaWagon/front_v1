import { useState } from 'react';
import styled from 'styled-components';

interface ImageProps {
  src: string;
  width: string;
  aspectRatio: string;
}

export default function Image({ src, width, aspectRatio }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <ImageWrapper width={width} $aspectRatio={aspectRatio}>
      {!isLoaded && <div />}
      <img src={src} onLoad={handleImageLoad} />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div<{ width: string; $aspectRatio: string }>`
  width: ${({ width }) => width};
  ${({ $aspectRatio }) => `aspect-ratio: ${$aspectRatio};`};

  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    width: 100%;
    height: 100%;
    border-radius: 4.09px;
  }

  & > div {
    background-color: #c0c0c0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 4.09px;
  }
`;
