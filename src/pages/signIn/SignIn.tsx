import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import SocialLogin from '../../components/signIn/socialLogin/SocialLogin';

import { loginUser } from '../../apis/login/axios';
import { useState } from 'react';

const SignIn = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = await loginUser({ account, password });
      console.log('로그인 성공:', userData);

      if (userData?.accessToken) {
        localStorage.setItem('accessToken', userData.accessToken);
        navigate('/');
      } else {
        console.error('토큰이 존재하지 않습니다.');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Container>
      <TopContainer>
        <LogoBox>
          <span>LOGIN</span>
        </LogoBox>
        <ImgBox>
          <img className="login__main-logo" alt="logo" />
        </ImgBox>
        <InputBox onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="아이디 또는 이메일을 입력해주세요"
            value={account}
            onChange={(e) => setAccount(e.target.value)} // 계정 업데이트
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // 비밀번호 업데이트
          />
          <CheckBoxContainer>
            <CheckBox>
              <CheckBoxInput type="checkbox" />
              <span>아이디 저장</span>
            </CheckBox>
            <CheckBox>
              <CheckBoxInput type="checkbox" />
              <span>자동 로그인</span>
            </CheckBox>
          </CheckBoxContainer>
          <Button type="submit">Login</Button>
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
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
const Button = styled.button`
  width: 100%;
  border-radius: 100px;
  aspect-ratio: 358/40;
  margin-top: 10.19%;
  background: ${({ theme }) => theme.colors.yellow};
  font-size: 10px;
  font-weight: 800;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
`;
export default SignIn;
