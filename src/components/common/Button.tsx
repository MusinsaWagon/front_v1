import styled from 'styled-components';
import { COLORS } from '@/constant/theme.ts';

interface ButtonProps {
  width: string;
  aspectRatio: string;
  borderRadius: string;
  onClick: () => void;
  src?: string;
  marginTop?: string;
}

export default function Button({
  width,
  aspectRatio,
  onClick,
  borderRadius,
  src,
  marginTop,
}: ButtonProps) {
  return (
    <ButtonWrapper
      $borderRadius={borderRadius}
      width={width}
      $aspectRatio={aspectRatio}
      $marginTop={marginTop}
    >
      <button onClick={onClick}>{src && <img src={src} />}상품 등록하기</button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div<{
  width: string;
  $aspectRatio: string;
  $borderRadius: string;
  $marginTop?: string;
}>`
  width: ${({ width }) => width};
  ${({ $aspectRatio }) => `aspect-ratio: ${$aspectRatio};`}
  ${({ $marginTop }) => `margin-top: ${$marginTop};`}

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    height: 100%;
    font-size: 10px;
    font-weight: 800;
    background: ${COLORS.yellow};
    ${({ $borderRadius }) => `border-radius: ${$borderRadius};`}
  }

  img {
    aspect-ratio: 17/18;
  }
`;
