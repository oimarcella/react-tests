import React from 'react';
import styles from './Transaction.module.css';
import { ReactComponent as Ilustracao } from './ilustracao.svg';
import Form from './Form';

export default function Transaction({ submitTransaction }) {
  return (
    <section className={styles.container}>
      <div className={styles.detalhe__superior} />
      <div className={styles.wrapper}>
        <Form submitTransaction={submitTransaction} />
      </div>
      <Ilustracao height="229" width="359" />
      <div className={styles.detalhe__inferior} />
    </section>
  );
}
