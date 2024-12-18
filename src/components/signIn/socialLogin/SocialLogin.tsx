import styled from 'styled-components';
const SocialLogin = () => {
  return (
    <Container>
      <Btn>
        <img />
      </Btn>
      <Btn>
        <img />
      </Btn>
    </Container>
  );
};
const Container = styled.div`
  margin-top: 10%;
  width: 50%;
`;
const Btn = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: aliceblue;
`;
export default SocialLogin;
