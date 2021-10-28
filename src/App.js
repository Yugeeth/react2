import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import NoMatch from "./pages/404Page/404Page";
class App extends React.Component {
  state = {
    isLog: false
  };

  handleLogin = (isLog) => this.setState({ isLog });
  render() {
    const { isLog } = this.state;
    return (
      <div>
        <Switch>
          {!isLog ? (
            <Route
              exact
              path="/"
              render={() => <Login isLogin={this.handleLogin} />}
            />
          ) : (
            <Route
              path="/"
              render={() => <Home handleLogged={this.handleLogin} />}
            />
          )}
          <Route path="*" component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
