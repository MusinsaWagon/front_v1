import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const LoginHandler = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  const location = useLocation().pathname.split('/').pop();

  useEffect(() => {
    const kakaoLogin = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/users/auth/login/${location}?code=${code}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const token = response.data?.data?.accessToken;
        if (!token) {
          throw new Error('accessToken이 없습니다.');
        }
        localStorage.setItem('accessToken', token);
        navigate('/');
      } catch (error) {
        console.error('소셜 로그인 요청 중 오류 발생:', error);
      }
    };

    if (code) {
      kakaoLogin();
    }
  }, [code, location, navigate]);
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
