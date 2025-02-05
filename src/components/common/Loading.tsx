import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

export default function Loading() {
  return (
    <LoadingBg>
      <RotatingLines
        visible={true}
        width="96px" // 숫자로 수정
        strokeWidth="5px" // 숫자로 수정
        animationDuration="0.75px" // 숫자로 수정
        ariaLabel="rotating-lines-loading"
      />
    </LoadingBg>
  );
}

const LoadingBg = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;
