import { Component } from "react";
import User from "./User";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      date: Date.now(),
      age: 23,
    };
  }
  render() {
    return (
      <div>
        <User
          name={this.state.name}
          age={this.state.age}
          date={this.state.date}
        />
        <User name="Ivan" age="24" />
      </div>
    );
  }
}

export default App;
