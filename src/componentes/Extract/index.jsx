import React from 'react';
import styles from './Extract.module.css';
import Transactions from './Transactions';

export default function Extract({ transactions }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.titulo}>Extrato</h2>
      <ul>
        {transactions.map((transaction, index) => {
          return (
            <Transactions key={index} transaction={transaction} styles={styles} />
          );
        })}
      </ul>
    </section>
  );
}
