import React from "react";
import { checkAuth } from "../../../utils/auth";
import BlogHeader from "./blogHeader";
import HomePage from "./homePage/index";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import BlogPage from "./blogPage/index";
import WriteBlogPage from "./writeBlogPage/index";
import MessagePage from "./messagePage/index";
import LoginPage from "./loginPage/index";
import RegisterPage from "./registerPage/index";
import MyCollectionPage from "./myCollectionPage/index";
import PersonalCenterPage from "./personalCenterPage/index";
import AccountSettingsPage from "./accountSettingsPage/index";
import MyBlogPage from "./myBlogPage/index";
import BlogManagementPage from "./blogManagementPage/index";

const SUCCESS = "200";

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authPass: false
    };
  }
  async componentWillMount() {
    const res = await checkAuth(this.props.location.pathname);
    if (res && res.code === SUCCESS) {
      this.setState({
        authPass: true
      });
    }
  }
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          this.state.authPass ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/app/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

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
            <PrivateRoute path="/app/writeBlog" component={WriteBlogPage} />
            <PrivateRoute path="/app/message" component={MessagePage} />
            <Route path="/app/login" component={LoginPage} />
            <Route path="/app/register" component={RegisterPage} />
            <PrivateRoute path="/app/myCollection" component={MyCollectionPage} />
            <PrivateRoute path="/app/personalCenter" component={PersonalCenterPage} />
            <PrivateRoute path="/app/accountSettings" component={AccountSettingsPage} />
            <PrivateRoute path="/app/myBlog" component={MyBlogPage} />
            <PrivateRoute path="/app/blogManagement" component={BlogManagementPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
