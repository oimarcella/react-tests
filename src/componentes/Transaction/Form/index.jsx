import React, { useState } from 'react';
import styles from './Form.module.css';

export default function Form({ submitTransaction }) {
  const [valueTransaction, setValue] = useState({ transaction: '', value: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    const updatedValues = { ...valueTransaction, [name]: value };
    setValue(updatedValues);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const dayTransaction = new Date().toLocaleDateString('pt-br');
    const monthTransaction = new Date().toLocaleDateString('pt-br', {
      month: 'long',
    });
    submitTransaction({
      ...valueTransaction,
      date: dayTransaction,
      month: monthTransaction[0].toUpperCase() + monthTransaction.substring(1),
    });
    setValue({ ...valueTransaction, value: '' });
  }

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <h3 className={styles.legenda__opcoes}>Nova Transação</h3>
      <select
        className={styles.grupo__opcoes}
        onChange={handleChange}
        name="transaction"
        data-testid="select-opcoes"
      >
        <option defaultValue="Selecione um tipo de transação">
          Selecione um tipo de transação
        </option>
        <option value="Depósito">Depósito</option>
        <option value="Transferência">Transferência</option>
      </select>
      <label htmlFor="valueTransaction" className={styles.legenda}>
        Valor
      </label>
      <input
        onChange={handleChange}
        className={styles.campo__valor}
        type="number"
        value={valueTransaction.value}
        name="value"
        id="value"
        placeholder="Digite um valor"
      />
      <button className={styles.botao} type="submit">
        Realizar transação
      </button>
    </form>
  );
}
