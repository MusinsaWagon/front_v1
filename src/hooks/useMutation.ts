import { useMutation } from '@tanstack/react-query';

export const useMutate = <TData, TVariables>(
  mutationFn: (variables: TVariables) => Promise<TData> // 매개변수 타입 적용
) => {
  return useMutation<TData, unknown, TVariables>({
    mutationFn,
    onSuccess: () => {
      alert(mutationFn.toString() + '성공');
    },
    onError: (error) => {
      alert(mutationFn.toString() + '실패: ' + error);
    },
  });
};
