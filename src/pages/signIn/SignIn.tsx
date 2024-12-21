import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SocialLogin from '../../components/signIn/socialLogin/SocialLogin';
import Button from '../../components/common/Button';
import { MainContainer } from '../../styles/mainContainer';

const SignIn = () => {
  const handleSubmit = () => {};
  return (
    <MainContainer>
      <Container>
        <TopContainer>
          <LogoBox>
            <span>LOGIN</span>
          </LogoBox>
          <ImgBox>
            <img className="login__main-logo" />
          </ImgBox>
          <InputBox>
            <Input
              type="text"
              placeholder="아이디 또는 이메일을 입력해주세요"
            />
            <Input type="password" placeholder="비밀번호를 입력해주세요" />

            <CheckBoxContainer>
              <CheckBox>
                <CheckBoxInput type="checkbox" />
                <span className="">아이디 저장</span>
              </CheckBox>
              <CheckBox>
                <CheckBoxInput type="checkbox" />
                <span>자동 로그인</span>
              </CheckBox>
            </CheckBoxContainer>
            <Button
              width="100%"
              aspectRatio="358/40"
              onClick={handleSubmit}
              borderRadius="100px"
              marginTop="10.19%"
              msg="LOGIN"
            />
          </InputBox>
          <FindBox>
            <span>
              계정을 잊으셨나요?{' '}
              <Link to={`/`} style={{ color: '#6e99c0' }}>
                ID찾기
              </Link>
              또는{' '}
              <Link to={`/`} style={{ color: '#6e99c0' }}>
                비밀번호 찾기
              </Link>
            </span>
          </FindBox>
          <span className="login__social-msg">SNS로 로그인하기</span>
        </TopContainer>
        <BottomContainer>
          <SocialLogin />
          <p>
            가입하고 알림받기{' '}
            <button className="signupBtn">회원가입하러가기 {'>'}</button>
          </p>
        </BottomContainer>
      </Container>
    </MainContainer>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 100dvh; */
`;
const TopContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 33px 35px 0px 33px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 25px 25px;
  .login__social-msg {
    width: 35%;
    aspect-ratio: 111/23;
    background-color: white;
    font-size: 11px;
    color: #909090;
    transform: translateY(50%);

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const LogoBox = styled.div`
  display: flex;
  align-items: flex-start;
  span {
    font-size: 16px;
    color: #8f8f8f;
  }
`;
const ImgBox = styled.div`
  margin: 23px 0;
  img {
    width: 40vw;
    aspect-ratio: 1.3/1;
    background-color: gray;
  }
`;
const InputBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Input = styled.input`
  background-color: #ededed;
  border: none;
  width: 80vw;
  border-radius: 3px;
  box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.25);
  padding: 15px 17px;
  font-size: 13px;
  box-sizing: border-box;
  &::placeholder {
    color: #bcbcbc;
  }
`;
const CheckBoxContainer = styled.div``;
const CheckBox = styled.label`
  span {
    font-size: 12px;
    color: #727272;
  }
`;
const CheckBoxInput = styled.input``;
const FindBox = styled.div`
  margin: 5% 0 20% 0;
  span {
    font-size: 12px;
    color: #a0a0a0;
    Link {
      color: #6e99c0;
    }
  }
`;
const BottomContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #c5c5c5;
  gap: 15px;
  p {
    font-size: 0.8rem;
  }
  .signupBtn {
    color: #6e99c0;
    background-color: transparent;
  }
`;
export default SignIn;
