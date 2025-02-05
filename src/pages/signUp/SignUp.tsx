import styled from 'styled-components';
import FormWrapper from '../../components/signUp/FormWrapper';

export default function SignUp() {
  return (
    <PageWrapper>
      <PageContent>
        <Header>회원가입</Header>
        <FormWrapper />
      </PageContent>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 90vh;
  overflow-y: auto;
  padding: 0 8.71%;
  padding-top: 33px;
`;

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  label {
    color: #8f8f8f;
    font-weight: bold;
  }
`;

const Header = styled.header`
  width: 100%;
  font-size: 16px;
  text-align: left;
  color: #8f8f8f;
  font-weight: 800;
`;
