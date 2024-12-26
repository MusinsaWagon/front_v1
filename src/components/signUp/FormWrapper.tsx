import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../common/Button';
import { schema, FormData } from '../../constant/signUpSchema';
import UserInputContainer from './UserInputContainer';
import { signup, UserData } from '../../hooks/signUp/useSignUp';
import { useState } from 'react';
import Modal from '../common/Modal';
import { useMutate } from '../../hooks/useMutation';

export default function FormWrapper() {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const mutation = useMutate(signup, () => setShowModal(true));

  const onSubmit = (data: UserData) => {
    mutation.mutate({
      email: data.email,
      password: data.password,
    });
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
      {showModal && (
        <Modal
          msg="회원가입 성공"
          setShowModal={setShowModal}
          showModal={showModal}
          src="/images/logo2.png"
        />
      )}
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
