import * as z from 'zod';

export const schema = z.object({
  account: z
    .string()
    .nonempty({ message: '아이디 또는 이메일을 입력해주세요' }),
  password: z
    .string()
    .min(9, { message: '9자 이상 입력해주세요' })
    .nonempty({ message: '비밀번호를 입력해주세요' }),
});

export type FormData = z.infer<typeof schema>;
