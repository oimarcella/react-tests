export const calculateNewBalance = (transaction, balance) => {
  if (transaction.transaction === "Depósito") {
    return balance + parseInt(transaction.value);
  } else {
    return balance - parseInt(transaction.value);
  }
};
