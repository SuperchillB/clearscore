export interface Account {
  id: string;
  provider: AccountProvider;
  balance: AccountBalance;
  transactions: AccountTransaction[];
}

export interface AccountProvider {
  title: string;
  account_number: string;
  sort_code: string;
  description: string;
}

export interface AccountBalance {
  amount: number;
  currency_iso: string;
}

export interface AccountTransaction {
  id: string;
  date: string;
  description: string;
  category_title: string;
  amount: TransactionAmount;
}

export interface TransactionAmount {
  value: number;
  currency_iso: string;
}
