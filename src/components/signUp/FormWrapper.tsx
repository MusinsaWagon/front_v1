import { styled } from 'styled-components';
import FormInput from './FormInput';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { z } from 'zod';
import Button from '../common/Button';
import { schema } from '../../constant/signUpSchema';
import { getFormInputs } from '../../constant/formInputs';

type FormData = z.infer<typeof schema>;

export default function FormWrapper() {
  const [checkId, setCheckId] = useState({
    errMsg: '',
    checkMsg: '',
  });

  const [checkEmail, setCheckEmail] = useState({
    errMsg: '',
    checkMsg: '',
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const formInputs = getFormInputs(
    watch,
    errors,
    checkId,
    setCheckId,
    checkEmail,
    setCheckEmail
  );

  return (
    <SignUpForm onSubmit={handleSubmit(onSubmit)}>
      {formInputs.map((inputProps, index) => (
        <FormInput key={index} register={register} {...inputProps} />
      ))}
      <Button
        width="100%"
        onClick={() => {}}
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
