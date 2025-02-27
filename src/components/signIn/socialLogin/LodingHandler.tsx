import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const LoginHandler = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  const location = useLocation().pathname.split('/').pop();

  if (code) localStorage.setItem('accessToken', code);

  useEffect(() => {
    const kakaoLogin = async () => {
      await axios({
        method: 'GET',
        url: `${
          import.meta.env.VITE_API_URL
        }/users/auth/login/${location}?code=${code}`,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => {
        navigate('/');
      });
    };
    kakaoLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);
  return (
    <div className="LoginHandeler">
      <div className="notice">
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default LoginHandler;
