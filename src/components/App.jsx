import { Wrapper, GlobalStyle } from "./appStyle";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import About from "./About";
import Statistics from "./Statistics";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <GlobalStyle />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
