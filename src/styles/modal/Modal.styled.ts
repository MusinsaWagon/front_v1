import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  background-color: white;
  border-radius: 21px;
  padding: 3% 3.35%;
  box-sizing: border-box;
  box-shadow: inset 0 0 0 3px #ffe760;
  aspect-ratio: 358/534;
  width: 89.05%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CloseBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
