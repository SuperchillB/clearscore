import apiClient from '../../../services/api';
import { useFetch } from '../../../services/api/reactQuery';
import accountKeys from './accountKeys';

const useGetAccount = (accountId: number) =>
  useFetch({
    key: accountKeys.detail(accountId),
    queryFn: apiClient.accounts.getAccount,
    // params: ,
    config: {
      refetchOnMount: true,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      staleTime: 5000,
    },
  });

export default useGetAccount;
