import { useQuery } from 'react-query';
import { QueryKeyT, UseFetchProps } from '../../../types/api';

/**
 * Peforms a GET request and returns a React Query context object
 * @param data         {Object}
 * @param data.key     {String}     Query key
 * @param data.queryFn {Function}   Function that will perform the GET request
 * @param data.config  {Object}     React Query config (eg: staleTime, refetchOnMount, ...)
 * @returns       {UseQueryResult}  React Query context object (contains 'isLoading', 'isError', ...)
 */
export const useFetch = <T>({ key, queryFn, config }: UseFetchProps<T>) => {
  const query = useQuery<T, Error, T, QueryKeyT>(key, () => queryFn(), {
    enabled: !!key,
    ...config,
  });

  return query;
};
