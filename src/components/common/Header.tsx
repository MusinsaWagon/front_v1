import styled from 'styled-components';

interface HeaderProps {
  src: string;
  title: string;
  description: string;
  bottom?: string | undefined;
}

//헤더 컴포넌트 (props: src, title, description, bottom)

export default function Header({
  src,
  title,
  description,
  bottom,
}: HeaderProps) {
  return (
    <HeaderContainer $bottom={bottom}>
      <TitleWrapper>
        <img src={src} />
        <span>{title}</span>
      </TitleWrapper>
      <Description>
        <span>{description}</span>
      </Description>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div<{ $bottom?: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  aspect-ratio: 334/42;
  justify-content: space-between;
  position: relative;
  bottom: ${(props) => props.$bottom || 'initial'};
  margin-bottom: ${(props) => '-' + props.$bottom};
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  gap: 1.95%;

  span {
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 0.42px;
  }
`;

const Description = styled.div`
  span {
    font-size: 8px;
    opacity: 0.5;
    font-weight: bold;
    letter-spacing: 0.24px;
  }
`;
