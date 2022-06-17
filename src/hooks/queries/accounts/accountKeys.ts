import { QueryKeyT } from '../../../types/api';

/*

Comments:
  - This file contains a factory of all the React Query keys needed
  for account-related query operations. These keys are needed for
  cache-storing operations.

*/

const accountKeys = {
  detail: (id: number) => ['account', id] as QueryKeyT,
};

export default accountKeys;
