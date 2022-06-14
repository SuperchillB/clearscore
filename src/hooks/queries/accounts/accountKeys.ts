import { QueryKeyT } from '../../../types/api';

const accountKeys = {
  detail: (id: number) => ['account', id] as QueryKeyT,

  // TODO: Remove below later
  // all: ['accounts'] as QueryKeyT,
  // lists: () => [...accountKeys.all, 'list'] as QueryKeyT,
  // list: (filters: string) => [...accountKeys.lists(), { filters }] as QueryKeyT,
  // details: () => [...accountKeys.all, 'detail'] as QueryKeyT,
  // detail: (id: number) => [...accountKeys.details(), id] as QueryKeyT,
};

export default accountKeys;
