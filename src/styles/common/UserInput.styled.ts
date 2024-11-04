import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  height: 44px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  gap: 14.64% 0;

  span {
    font-size: 6px;
    line-height: 8px;
    letter-spacing: 0.24px;
    font-weight: bold;
    opacity: 0.5;
  }

  input {
    width: 100%;
    height: 68.18%;
    font-size: 8px;
    text-align: center;
    font-weight: bold;
    box-sizing: border-box;
    border: 1px solid #cfcfcf;
    border-radius: 2px;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 68.18%;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  border: 1px solid #cfcfcf;
  border-radius: 2px;

  input {
    height: 100%;
    border: none;
    outline: none;
    text-indent: 3%;
  }

  &:focus-within {
    border-color: #3498db;
  }
`;

export const Select = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const rotateAnm = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

export const reverseRotate = keyframes`
  0% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(-90deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const DropdownBtn = styled.img<{ rotate: string; click: string }>`
  position: relative;
  right: 3.05%;
  width: 3.25%;
  height: 22.33%;
  box-sizing: border-box;
  pointer-events: none;
  transform: ${({ rotate }) =>
    rotate === 'true' ? 'rotate(180deg)' : 'rotate(0deg)'};

  ${({ rotate, click }) =>
    rotate === 'true'
      ? css`
          animation: ${rotateAnm} ease-in 0.8s;
        `
      : click === 'true' &&
        css`
          animation: ${reverseRotate} ease-in 0.8s;
        `}
`;

export const CalendarWrapper = styled.div``;
