import React from 'react';
import styles from './Principal.module.css';
import { ReactComponent as Ilustracao } from './ilustracao.svg';
import Balance from './Balance';

const data = Date.now();
const hoje = new Date(data);
const diasDaSemana = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

export default function Main({ balance }) {
  return (
    <section className={styles.container}>
      <div className={styles.detalhe__superior} />
      <h1 className={styles.titulo}>Olá, Joana :)!</h1>
      <p className={styles.data}>{`${
        diasDaSemana[hoje.getDay()]
      }, ${hoje.toLocaleDateString('pt-BR')}`}</p>
      <div className={styles.wrapper}>
        <Ilustracao className={styles.ilustracao} width="230" height="185" />
        <Balance balance={balance} />
      </div>
      <div className={styles.detalhe__inferior} />
    </section>
  );
}
