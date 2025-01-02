import styled from 'styled-components';
import { KAKAO_AUTH_URL, NAVER_AUTH_URL } from './OAuth';
const SocialLogin = () => {
  return (
    <Container>
      <Btn href={KAKAO_AUTH_URL}>
        <img src="../../../../public/images/kakaoIcon.png" />
      </Btn>
      <Btn href={NAVER_AUTH_URL}>
        <img src="../../../../public/images/naverIcon.png" />
      </Btn>
    </Container>
  );
};
const Container = styled.div`
  margin-top: 10%;
  width: 50%;
  display: flex;
  gap: 10px;
  justify-content: center;
`;
const Btn = styled.a`
  width: 50px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  img {
    width: 100%;
  }
`;
export default SocialLogin;
