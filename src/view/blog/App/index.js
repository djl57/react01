import React from "react";
import BlogHeader from "./blogHeader";
import HomePage from "./homePage/index";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import BlogPage from "./blogPage/index";
import WriteBlogPage from './writeBlogPage/index'
import MessagePage from './messagePage/index'
import LoginPage from './loginPage/index'
import RegisterPage from './registerPage/index'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Router>
          <BlogHeader></BlogHeader>
          <Switch>
            <Route path="/app/home" component={HomePage} />
            <Route path="/app/blog" component={BlogPage} />
            <Route path="/app/writeBlog" component={WriteBlogPage} />
            <Route path="/app/message" component={MessagePage} />
            <Route path="/app/login" component={LoginPage} />
            <Route path="/app/register" component={RegisterPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
