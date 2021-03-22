import Transaction from "./Transaction";
import PropTypes from "prop-types";

const Transactions = ({ transactions }) => {
  return (
    <div>
      {transactions.map((transaction) => (
        <Transaction key={transaction.key} transaction={transaction} />
      ))}
    </div>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.array,
};

Transactions.defaultProps = {
  transactions: [],
};

export default Transactions;
