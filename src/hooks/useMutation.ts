import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useMutate = <TData, TVariables>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  onSuccess?: (data: TData) => void,
  onError?: (error: unknown) => void,
  queryKey?: string // queryKey를 필수로 변경
) => {
  const queryClient = useQueryClient();

  return useMutation<TData, unknown, TVariables, { previousData?: unknown }>({
    mutationFn,
    onMutate: async () => {
      let previousData;
      if (queryKey) {
        // 현재 queryKey의 데이터를 저장
        previousData = queryClient.getQueryData([queryKey]);
      }

      return { previousData }; // 기본 동작: 이전 데이터 반환
    },
    onSuccess,
    onError: (error) => {
      if (onError) {
        onError(error);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey }); // queryKey 관련 캐시 무효화
    },
  });
};
