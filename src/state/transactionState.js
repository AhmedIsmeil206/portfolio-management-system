import { useState } from 'react';

const useTransactionState = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return {
    transactions,
    addTransaction,
    deleteTransaction
  };
};

export default useTransactionState;
