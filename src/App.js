import React, { useState } from 'react';
import styles from './App.module.css';
import { calculateNewBalance } from './utils';

import Header from './componentes/Header';
import Extract from './componentes/Extract';
import Menu from './componentes/Menu';
import Main from './componentes/Main';
import Transaction from './componentes/Transaction';

export default function App() {
  const [balance, setBalance] = useState(1000);
  const [transactions, setTransactions] = useState([]);

  function submitTransaction(values) {
    const newBalance = calculateNewBalance(values, balance);
    setBalance(newBalance);
    setTransactions([...transactions, values]);
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <Menu />
        <div className={styles.wrapper}>
          <Main balance={balance} />
          <Transaction submitTransaction={submitTransaction} />
        </div>
        <Extract transactions={transactions} />
      </main>
    </>
  );
}

