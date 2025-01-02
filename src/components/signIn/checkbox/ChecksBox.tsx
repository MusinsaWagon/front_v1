import { useState } from 'react';
import styled from 'styled-components';
import checkedImg from '../../../../public/images/login_checked.png';
import uncheckedImg from '../../../../public/images/login_check.png';
const ChecksBox = () => {
  const [isIdSaved, setIsIdSaved] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false);
  return (
    <CheckBoxContainer>
      <CheckBox>
        <CheckBoxInput
          type="checkbox"
          id="id-save-checkbox"
          checked={isIdSaved}
          onChange={() => setIsIdSaved(!isIdSaved)}
        />
        <CustomCheckBox htmlFor="id-save-checkbox" isChecked={isIdSaved} />
        <span>아이디 저장</span>
      </CheckBox>
      <CheckBox>
        <CheckBoxInput
          type="checkbox"
          id="auto-login-checkbox"
          checked={isAutoLogin}
          onChange={() => setIsAutoLogin(!isAutoLogin)}
        />
        <CustomCheckBox htmlFor="auto-login-checkbox" isChecked={isAutoLogin} />
        <span>자동 로그인</span>
      </CheckBox>
    </CheckBoxContainer>
  );
};

export default ChecksBox;
const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CheckBox = styled.span`
  width: 30%;
  display: flex;
  flex-direction: row;
  gap: 5px;
  span {
    font-size: 0.5em;
    color: #727272;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CheckBoxInput = styled.input`
  display: none;
`;

const CustomCheckBox = styled.label<{ isChecked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${({ isChecked }) =>
    isChecked ? `url(${checkedImg})` : `url(${uncheckedImg})`};
  background-size: cover;
`;
