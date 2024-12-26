import { useMutation } from '@tanstack/react-query';

export const useMutate = <TData, TVariables>(
  mutationFn: (variables: TVariables) => Promise<TData>, // 매개변수 타입 적용
  onSuccess?: (data: TData) => void
) => {
  return useMutation<TData, unknown, TVariables>({
    mutationFn,
    onSuccess,
    onError: (error) => {
      alert(mutationFn.toString() + '실패: ' + error);
    },
  });
};
