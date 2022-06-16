import { AccountTransaction } from '../../types/accounts';

export const filterTransactions = (transactions: AccountTransaction[]) => {
  if (!transactions || transactions.length === 0) return [];
  const smallestExpenses = transactions
    .filter((t) => t.amount.value < 0)
    .sort((a, b) => b.amount.value - a.amount.value)
    .slice(0, 10);
  return smallestExpenses;
};
