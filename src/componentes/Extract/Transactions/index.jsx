import React from 'react';

export default function Transactions({ transaction, styles }) {
  console.log("===>",transaction)
  return (
    <li>
      <p className={styles.mes}>{transaction.month}</p>
      <div className={styles.transacao}>
        <p data-testid="tipoTransacao">{transaction.transaction}</p>
        <span>{transaction.date}</span>
      </div>
      {transaction.transaction === 'Transferência' ? (
        <h3
          data-testid="valorTransacao"
          className={styles.valor}
        >{`- R$ ${transaction.value}`}</h3>
      ) : (
        <h3
          data-testid="valorTransacao"
          className={styles.valor}
        >{` R$ ${transaction.value}`}</h3>
      )}
      <div className={styles.divisor} />
    </li>
  );
}
