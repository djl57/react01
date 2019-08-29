import React from "react";
import BlogHeader from "./blogHeader";
import HomePage from "./homePage/index";
import { HashRouter as Route, Switch } from "react-router-dom";
import BlogPage from "./blogPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <BlogHeader></BlogHeader>
        <Switch>
          <Route path="/app/home" component={HomePage} />
          <Route path="/app/blog" component={BlogPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
