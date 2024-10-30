import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 4.15% 5.47%;
  box-sizing: border-box;
  margin-top: 8.63%;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 19px 0;
`;

export const ProdWrapper = styled.div`
  margin-top: 19px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7px 0;
  label {
    color: rgba(12, 12, 12, 0.5);
    font-size: 7px;
    letter-spacing: 0.24px;
    font-weight: bold;
    text-align: left;
    width: 100%;
  }
`;

export const ProdInfo = styled.div`
  box-shadow: inset 0 0 0 1.07px #cfcfcf;
  padding: 18px 3.35% 11.07px 3.35%;
`;

export const ProdHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    color: #1d1d1d;
    width: 100%;
    text-align: left;
    font-size: 10px;
    font-weight: bold;
  }

  span:nth-last-child(2) {
    color: #0c0c0c;
    width: 100%;
    text-align: left;
    font-size: 10.81px;
    font-weight: 800;
    line-height: 130%;
  }

  label {
    margin-top: 9.43%;
    text-align: right;
    width: 100%;
    font-weight: 800;
    font-size: 14px;
    color: #0c0c0c;
  }
`;

export const Line = styled.div<{ width: string }>`
  height: 0.57px;
  background-color: rgba(0, 0, 0, 0.5);
  width: ${({ width }) => width};
  margin: 6px 0;
`;

export const ImageWrapper = styled.div`
  margin-top: 4.25%;
  display: flex;
  justify-content: center;
  gap: 2.7%;
`;
