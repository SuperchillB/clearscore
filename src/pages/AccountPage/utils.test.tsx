import { filterTransactions } from './utils';
import Account from '../../tests/fixtures/account.json';

const newTransactions = [
  {
    id: '13acb877dc4d8030c5dacbde33d3496a2ae3asdc000db4c793bda9c3228baca1a28',
    date: '2018-06-30',
    description: 'Tesco',
    category_title: 'Groceries',
    amount: {
      value: -57.21,
      currency_iso: 'GBP',
    },
  },
  {
    id: 'dbad80ded0d2d3419749a8dd391a61bc1b5970bdfffc27f254568ec86e5c0fa06bcc',
    date: '2018-06-22',
    description: 'Max Mustermann',
    category_title: 'Income',
    amount: {
      value: 510.55,
      currency_iso: 'GBP',
    },
  },
  {
    id: 'b11de7abd717eae696d2eedca9c24e5df7652b59a7ad200d43aa88321d908694342d',
    date: '2018-07-03',
    description: 'Amazon',
    category_title: 'Shopping',
    amount: {
      value: -99.95,
      currency_iso: 'GBP',
    },
  },
  {
    id: 'a483bdde46390271ff377949455817a71d3cdf11a3492b2c921477b751265ee9aba4',
    date: '2018-07-05',
    description: 'Transport for London',
    category_title: 'Transport',
    amount: {
      value: -2.85,
      currency_iso: 'GBP',
    },
  },
  {
    id: 'c09f785b61c0fa361dc143b7331551d8b4cc58349774fae6f61d696564bbebd74db0',
    date: '2018-07-09',
    description: 'Pret a Manger',
    category_title: 'Eating Out',
    amount: {
      value: -35.87,
      currency_iso: 'GBP',
    },
  },
  {
    id: 'da972f75ba1b4da81c93dcffeedf388f5c85e76642b2d41089d715b428b580dc469a',
    date: '2018-07-02',
    description: 'Vodafone',
    category_title: 'Entertainment',
    amount: {
      value: -29.99,
      currency_iso: 'GBP',
    },
  },
  {
    id: '73f0fc40b287cd4e3ca0f8134b7dd065881e30b1e4b9eddcba06a281d2b435392698',
    date: '2018-07-01',
    description: 'Marks & Spencer',
    category_title: 'Shopping',
    amount: {
      value: -45.23,
      currency_iso: 'GBP',
    },
  },
  {
    id: '7580594e47b09ce6d22addaccb2fcf6c4f6297e616c0cecbf8acc902e1813a161816',
    date: '2018-06-29',
    description: 'British Gas',
    category_title: 'Bills',
    amount: {
      value: -48.75,
      currency_iso: 'GBP',
    },
  },
];

describe('AccountPage utils', () => {
  test('filterTransactions', () => {
    const filtered = filterTransactions(Account.transactions);
    expect(filtered.length).toBe(10);
    expect(filtered[0].description).toBe('Transport for London');
    expect(filtered[filtered.length - 1].description).toBe('Asda');

    const newFiltered = filterTransactions([]);
    expect(newFiltered.length).toBe(0);

    const filteredNewTransactions = filterTransactions(newTransactions);
    expect(filteredNewTransactions.length).toBe(7);
    expect(filteredNewTransactions[0].description).toBe('Transport for London');
    expect(
      filteredNewTransactions[filteredNewTransactions.length - 1].description,
    ).toBe('Amazon');
  });
});
