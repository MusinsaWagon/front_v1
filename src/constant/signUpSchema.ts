import { z } from 'zod';

export const schema = z
  .object({
    id: z.string().min(1, { message: '아이디를 입력해주세요' }),
    email: z.string().email({ message: '이메일 형식이 아닙니다' }),
    password: z
      .string()
      .min(1, { message: '영문,숫자,특수문자 포함 8자 이상이여야 합니다' })
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
