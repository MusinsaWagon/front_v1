import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../common/Button';
import { schema, FormData } from '../../constant/signUpSchema';
import UserInputContainer from './UserInputContainer';
import { useMutate } from '../../hooks/useMutation';
import { signup, UserData } from '../../hooks/signUp/useSignUp';

export default function FormWrapper() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const mutation = useMutate(
    signup,
    () => {
      console.log('회원가입 성공!');
      alert('회원가입이 완료됐습니다.');
    },
    () => {
      console.error('회원가입 실패:');
    }
  );

  const onSubmit = (data: UserData) => {
    mutation.mutate({
      email: data.email,
      password: data.password,
    });
    console.log(data);
  };

  return (
    <SignUpForm onSubmit={handleSubmit(onSubmit)}>
      <UserInputContainer watch={watch} register={register} errors={errors} />
      <Button
        width="100%"
        onClick={() => onSubmit}
        borderRadius="100px"
        aspectRatio="332/36"
        msg="가입하기"
      />
    </SignUpForm>
  );
}

const SignUpForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  gap: 36px 0;
`;
