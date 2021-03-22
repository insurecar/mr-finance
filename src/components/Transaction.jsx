import "./transactionStyle.scss";
import PropTypes from "prop-types";
import { Wrapper } from "./transacrionStyle";

const Transaction = ({ transaction: { value, label } }) => {
  return (
    <Wrapper value={value}>
      Label: {label}
      <p>Value:{value}</p>
      <br />
    </Wrapper>
  );
};

Transaction.propsType = {
  transaction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

Transaction.propsType = {
  transaction: {
    lable: "",
    value: 0,
  },
};

export default Transaction;
