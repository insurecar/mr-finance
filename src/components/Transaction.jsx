const Transaction = ({ transaction }) => {
  return (
    <div>
      Label: {transaction.label}
      <p>Value:{transaction.value}</p>
      <br />
    </div>
  );
};

export default Transaction;
