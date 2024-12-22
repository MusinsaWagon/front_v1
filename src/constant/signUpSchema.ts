import { z } from 'zod';

export const schema = z
  .object({
    id: z
      .string()
      .min(6, { message: '아이디는 영어, 숫자 포함 6자 이상이어야 합니다.' })
      .refine((value) => /^[a-zA-Z0-9]+$/.test(value), {
        message: '아이디는 영어, 숫자 포함 6자 이상이어야 합니다.',
      })
      .refine((value) => /[a-zA-Z]/.test(value) && /[0-9]/.test(value), {
        message: '아이디는 영어, 숫자 포함 6자 이상이어야 합니다.',
      }),
    email: z.string().email({ message: '이메일 형식이 아닙니다' }),
    password: z
      .string()
      .min(8, { message: '영문,숫자,특수문자 포함 8자 이상이여야 합니다' })
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: '영문,숫자,특수문자 포함 8자 이상이여야 합니다',
      }),
    passwordCheck: z
      .string()
      .min(1, { message: '비밀번호가 일치하지 않습니다' }),
    authNumber: z.string().min(1, { message: '인증번호를 입력해주세요' }),
  })
  .refine((data) => data.password === data.passwordCheck, {
    path: ['passwordCheck'],
    message: '비밀번호가 일치하지 않습니다',
  });

export type FormData = z.infer<typeof schema>;

// 액션 타입 정의
export type InputAction =
  | { type: 'SET_CHECK_ID'; payload: { errMsg: string; checkMsg: string } }
  | {
      type: 'SET_CHECK_EMAIL';
      payload: { errMsg: string; checkMsg: string; sendLoading: boolean };
    }
  | { type: 'SET_CHECK_CODE'; payload: { errMsg: string; checkMsg: string } };
