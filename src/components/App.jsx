import { Component } from "react";
import Balance from "./Balance";
import Transactions from "./Transactions";
import Form from "./Form";
import { Wrapper } from "./appStyle";

let id = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      transactions: [],
    };
    console.log("Constructor");
  }

  onChange = (value) => {
    this.setState({
      balance: this.state.balance + +value,
      transactions: [
        ...this.state.transactions,
        { value, label: "change", id: ++id },
      ],
    });
  };

  render() {
    return (
      <Wrapper>
        <Balance balance={this.state.balance} />
        <Form onChange={this.onChange} />
        <hr />
        <Transactions transactions={this.state.transactions} />
      </Wrapper>
    );
  }
}

export default App;
