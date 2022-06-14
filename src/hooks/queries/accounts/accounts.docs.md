## Accounts queries

---

Comments:

- This folder contains all the custom hooks that perform React Query
  operations related to accounts
- For now we're only fetching an account (hence the 'useGetAccount' hook), but different hooks could be
  implemented (eg: 'useUpdateAccount' to update an account)
- The folder also keeps a factory of all the React Query keys needed
  for account-related query operations. These keys are needed for
  cache-storing operations.
- Lastly, the folder contains all the tests for each custom hook
