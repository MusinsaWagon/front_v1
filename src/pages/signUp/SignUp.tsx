import styled from 'styled-components';
import InputWrapper from '../../components/signUp/InputWrapper';
import Button from '../../components/common/Button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z
  .object({
    id: z.string().min(1, { message: '아이디를 입력해주세요' }),
    email: z.string().email({ message: '이메일 형식이 아닙니다' }),
    password: z
      .string()
      .min(1, { message: '영문,숫자,특수문자 포함 8자 이상이여야 합니다' }),
    passwordCheck: z
      .string()
      .min(1, { message: '비밀번호가 일치하지 않습니다' }),
    authNumber: z.string().min(1, { message: '인증번호를 입력해주세요' }),
  })
  .refine((data) => data.password === data.passwordCheck, {
    path: ['passwordCheck'],
    message: '비밀번호가 일치하지 않습니다',
  });
type FormData = z.infer<typeof schema>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <PageWrapper>
      <PageContent>
        <Header>회원가입</Header>
        <SignUpForm onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper
            register={register}
            name="id"
            type="text"
            label="아이디"
            btnMsg="중복확인"
            placeholder="아이디를 입력해주세요"
            error={errors.id?.message}
          />
          <InputWrapper
            register={register}
            name="email"
            type="text"
            label="이메일"
            placeholder="이메일을 입력해주세요"
            error={errors.email?.message}
          />
          <InputWrapper
            register={register}
            name="authNumber"
            type="text"
            label="인증번호"
            placeholder="인증번호 6자리"
            btnMsg="인증하기"
            error={errors.authNumber?.message}
          />
          <InputWrapper
            register={register}
            name="password"
            type="text"
            label="비밀번호"
            placeholder="영문,숫자,특수문자 포함 8자 이상이여야 합니다"
            error={errors.password?.message}
          />
          <InputWrapper
            register={register}
            name="passwordCheck"
            type="text"
            label="비밀번호 확인"
            placeholder="영문,숫자,특수문자 포함 8자 이상이여야 합니다"
            error={errors.passwordCheck?.message}
          />

          <Button
            width="100%"
            onClick={() => {}}
            borderRadius="100px"
            aspectRatio="332/36"
            msg="가입하기"
          />
        </SignUpForm>
      </PageContent>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
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
    font-size: 2.74vw;
  }
`;

const Header = styled.header`
  width: 100%;
  font-size: 3.98vw;
  text-align: left;
  color: #8f8f8f;
  font-weight: 800;
`;

const SignUpForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  gap: 36px 0;
`;
