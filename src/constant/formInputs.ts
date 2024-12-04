import { UseFormWatch, FieldErrorsImpl } from 'react-hook-form';
import { schema } from './signUpSchema';
import { z } from 'zod';
type FormData = z.infer<typeof schema>;

export type FormInputType = {
  name: keyof FormData; // 'id' | 'email' | 'authNumber' | 'password' | 'passwordCheck'
  type: string;
  label: string;
  btnMsg?: string;
  placeholder: string;
  error: string | undefined;
  errMsg?: string;
  checkMsg?: string;
  onClick?: () => void;
  isValidated: boolean;
};

export const getFormInputs = (
  watch: UseFormWatch<FormData>,
  errors: FieldErrorsImpl<FormData>,
  checkId: { errMsg: string; checkMsg: string },
  setCheckId: React.Dispatch<
    React.SetStateAction<{ errMsg: string; checkMsg: string }>
  >,
  checkEmail: { errMsg: string; checkMsg: string },
  setCheckEmail: React.Dispatch<
    React.SetStateAction<{ errMsg: string; checkMsg: string }>
  >
): Array<FormInputType> => [
  {
    name: 'id',
    type: 'text',
    label: '아이디',
    btnMsg: '중복확인',
    placeholder: '아이디를 입력해주세요',
    error: errors.id?.message || checkId.errMsg,
    errMsg: checkId.errMsg,
    checkMsg: checkId.checkMsg,
    onClick: () => {
      if (!watch('id')) {
        alert('아이디를 입력해주세요');
        return;
      }
      setCheckId({
        errMsg: '사용 불가능한 아이디입니다.',
        checkMsg: '',
      });
    },
    isValidated: watch('id') && !errors.id?.message ? true : false,
  },
  {
    name: 'email',
    type: 'text',
    label: '이메일',
    btnMsg: '인증번호 발송',
    placeholder: '이메일을 입력해주세요',
    error: errors.email?.message || checkEmail.errMsg,
    errMsg: checkEmail.errMsg,
    checkMsg: checkEmail.checkMsg,
    onClick: () => {
      if (!watch('email')) {
        alert('이메일을 입력해주세요');
        return;
      }
      setCheckEmail({
        ...checkEmail,
        checkMsg: '인증번호를 확인해주세요',
      });
    },
    isValidated: watch('email') && !errors.email?.message ? true : false,
  },
  {
    name: 'authNumber',
    type: 'text',
    label: '인증번호',
    placeholder: '인증번호 6자리',
    btnMsg: '인증하기',
    error: errors.authNumber?.message,
    isValidated:
      watch('authNumber') && !errors.authNumber?.message ? true : false,
  },
  {
    name: 'password',
    type: 'password',
    label: '비밀번호',
    placeholder: '영문,숫자,특수문자 포함 8자 이상이여야 합니다',
    error: errors.password?.message,
    checkMsg: '사용 가능한 비밀번호입니다.',
    isValidated: watch('password') && !errors.password?.message ? true : false,
  },
  {
    name: 'passwordCheck',
    type: 'password',
    label: '비밀번호 확인',
    placeholder: '영문,숫자,특수문자 포함 8자 이상이여야 합니다',
    error: errors.passwordCheck?.message,
    checkMsg: '비밀번호가 일치합니다.',
    isValidated:
      watch('passwordCheck') && !errors.passwordCheck?.message ? true : false,
  },
];
