import { UseQueryOptions } from 'react-query';

export type HTTPMethods =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

export interface APIRequestParams {
  baseUrl?: string;
  path: string;
  args?: {
    method: HTTPMethods;
    headers: { [key in string]: string };
    body: any;
  };
}

export type QueryKeyT = readonly [
  string,
  ...(string | object | number | undefined)[],
];

export interface UseFetchProps<T> {
  key: QueryKeyT;
  queryFn: () => Promise<T>;
  config?: UseQueryOptions<T, Error, T, QueryKeyT>;
}
