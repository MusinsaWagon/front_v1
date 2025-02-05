import styled from 'styled-components';

interface ButtonProps {
  width: string;
  aspectRatio: string;
  borderRadius: string;
  onClick: () => void;
  src?: string;
  marginTop?: string;
  msg: string;
  color?: string;
}

type ButtonWrapperProps = {
  [K in keyof Pick<
    ButtonProps,
    'width' | 'aspectRatio' | 'borderRadius' | 'marginTop' | 'color'
  > as `$${K}`]: ButtonProps[K];
};

export default function Button({
  width,
  aspectRatio,
  onClick,
  borderRadius,
  src,
  marginTop,
  msg,
  color,
}: ButtonProps) {
  return (
    <ButtonWrapper
      $borderRadius={borderRadius}
      $width={width}
      $aspectRatio={aspectRatio}
      $marginTop={marginTop}
      $color={color}
    >
      <button onClick={onClick}>
        {src && <img src={src} />}
        {msg}
      </button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div<ButtonWrapperProps>`
  width: ${({ $width }) => $width};
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
    background: ${({ $color, theme }) =>
      $color ? $color : theme.colors.yellow};

    ${({ $borderRadius }) => `border-radius: ${$borderRadius};`}
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    color: ${({ theme }) => theme.colors.font_black};
  }

  img {
    aspect-ratio: 17/18;
  }
`;
