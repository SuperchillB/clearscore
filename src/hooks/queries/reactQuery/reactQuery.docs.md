## React Query hooks

---

Comments:

- This is where various React Query operations are stored
- As the app grows, more hooks could be added, for example 'usePost' for
  POST operations, 'useDelete' for DELETE operations, ... etc
- Cache invalidation, query cancellation and query setters/getters
  for mutations could be handled here by a generic mutation function,
  which could then be re-used in the above hooks (eg: 'usePost')
