import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import SocialLogin from '../../components/signIn/socialLogin/SocialLogin';

import { loginUser } from '../../apis/login/axios';
import { useState } from 'react';
import ChecksBox from '../../components/signIn/checkbox/ChecksBox';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema, FormData } from '../../constant/loginSchema';
const SignIn = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const handleLoginSubmit = async () => {
    // e.preventDefault();
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
          <img
            className="login__main-logo"
            alt="logo"
            src="../../../public/images/logo.png"
          />
        </ImgBox>
        <InputBox onSubmit={handleSubmit(handleLoginSubmit)}>
          <Input
            type="text"
            placeholder="아이디 또는 이메일을 입력해주세요"
            {...register('account')}
            style={{
              borderColor: errors.account ? 'red' : '#ededed', // 에러 발생 시 테두리 색상 변경
            }}
          />
          {errors.account && <ErrorMsg>{errors.account.message}</ErrorMsg>}

          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register('password')}
            style={{
              borderColor: errors.password ? 'red' : '#ededed', // 에러 발생 시 테두리 색상 변경
            }}
          />
          {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}

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
          <button className="signupBtn" onClick={() => navigate('/signup')}>
            회원가입하러가기 {'>'}
          </button>
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
  width: 80vw;
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

const ErrorMsg = styled.span`
  font-size: 12px;
  color: red;
  margin-top: -8px;
  margin-bottom: 10px;
`;

export default SignIn;
