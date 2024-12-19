import { UseFormWatch, FieldErrorsImpl } from 'react-hook-form';
import { InputAction, schema } from './signUpSchema';
import { z } from 'zod';
import { checkDupId, sendEmail } from '../hooks/signUp/useSignUp';
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
  sendLoading?: boolean;
};

export const getFormInputs = (
  watch: UseFormWatch<FormData>,
  errors: FieldErrorsImpl<FormData>,
  checkId: { errMsg: string; checkMsg: string },
  dispatch: React.Dispatch<InputAction>,
  checkEmail: { errMsg: string; checkMsg: string; sendLoading: boolean },
  checkCode: { errMsg: string; checkMsg: string },
  dispatchCode: (code: number) => void,
  validateCode: number | null
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
    onClick: async () => {
      const isDuplicated = await checkDupId(watch(`id`));
      if (isDuplicated) {
        dispatch({
          type: 'SET_CHECK_ID',
          payload: { errMsg: '사용 불가능한 아이디입니다.', checkMsg: '' },
        });
      } else {
        dispatch({
          type: 'SET_CHECK_ID',
          payload: { errMsg: '', checkMsg: '사용 가능한 아이디입니다.' },
        });
      }
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
    onClick: async () => {
      dispatch({
        type: 'SET_CHECK_EMAIL',
        payload: { ...checkEmail, sendLoading: true },
      });
      const data = await sendEmail(watch('email'));

      if (data?.validCode) {
        dispatchCode(data.validCode);
        dispatch({
          type: 'SET_CHECK_EMAIL',
          payload: {
            errMsg: '',
            checkMsg: '인증번호를 확인해주세요.',
            sendLoading: false,
          },
        });
      } else {
        dispatch({
          type: 'SET_CHECK_EMAIL',
          payload: {
            errMsg: '다시 시도해주세요',
            checkMsg: '',
            sendLoading: false,
          },
        });
      }
    },
    isValidated: watch('email') && !errors.email?.message ? true : false,
    sendLoading: checkEmail.sendLoading,
  },
  {
    name: 'authNumber',
    type: 'text',
    label: '인증번호',
    placeholder: '인증번호 6자리',
    btnMsg: '인증하기',
    error: errors.authNumber?.message,
    errMsg: checkCode.errMsg,
    checkMsg: checkCode.checkMsg,
    onClick: () => {
      const inputCode = watch('authNumber');
      if (parseInt(inputCode) === validateCode) {
        dispatch({
          type: 'SET_CHECK_CODE',
          payload: { errMsg: '', checkMsg: '인증이 완료되었습니다.' },
        });
      } else {
        dispatch({
          type: 'SET_CHECK_CODE',
          payload: { errMsg: '인증번호가 다릅니다.', checkMsg: '' },
        });
      }
    },
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
