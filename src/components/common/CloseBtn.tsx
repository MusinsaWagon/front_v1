import styled from 'styled-components';
import closeBtn from '@/assets/images/closeBtn.png';

//닫기 버튼 컴포넌트 (props: width, aspect-ratio)

const Button = styled.div<CloseBtnProps>`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  aspect-ratio: ${(props) => props.ratio || null};

  img {
    width: 100%;
    height: 100%;
  }
`;

interface CloseBtnProps {
  width: string;
  ratio?: string;
}

export default function CloseBtn({ width, ratio }: CloseBtnProps) {
  return (
    <Button width={width} ratio={ratio}>
      <img src={closeBtn} />
    </Button>
  );
}
