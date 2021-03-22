import Transaction from "./Transaction";

const Transactions = ({ transactions }) => {
  return (
    <div>
      {transactions.map((transaction) => (
        <Transaction key={transaction.key} transaction={transaction} />
      ))}
    </div>
  );
};

export default Transactions;
