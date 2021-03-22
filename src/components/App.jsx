import { Component } from "react";
import Balance from "./Balance";
import Transaction from "./Transaction";

let id = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      transactions: [],
    };
    this.onIncrease = this.onIncrease.bind(this);
    console.log("Constructor");
  }

  onIncrease = () => {
    this.setState({
      balance: this.state.balance + 1,
      transactions: [
        ...this.state.transactions,
        { label: "increase", value: 1 },
      ],
      id: ++id,
    });
  };

  onDecrease = () => {
    this.setState({
      balance: this.state.balance - 1,
      transactions: [
        ...this.state.transactions,
        { label: "decrease", value: -1 },
      ],
      id: ++id,
    });
  };

  render() {
    return (
      <div>
        <Balance balance={this.state.balance} />
        <button onClick={this.onIncrease}>Додати 1</button>
        <button onClick={this.onDecrease}>Відняти 1</button>
        <hr />
        {this.state.transactions.map((transaction) => (
          <Transaction key={transaction.key} transaction={transaction} />
        ))}
      </div>
    );
  }
}

export default App;
