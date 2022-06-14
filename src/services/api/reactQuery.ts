import { useQuery } from 'react-query';
import { QueryKeyT, UseFetchProps } from '../../types/api';

/*

  Comments:
    - This is where various React Query operations are stored 
    - As the app grows, more hooks could be added, for example 'usePost' for
      POST operations, 'useDelete' for DELETE operations, ... etc
    - Cache invalidation, query cancellation and query setters/getters
      for mutations could be handled here by a generic mutation function,
      which could then be re-used in the above hooks (eg: 'usePost')

*/

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
