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
            <Route path="/app/myCollection" component={MyCollectionPage} />
            <Route path="/app/personalCenter" component={PersonalCenterPage} />
            <Route path="/app/accountSettings" component={AccountSettingsPage} />
            <Route path="/app/myBlog" component={MyBlogPage} />
            <Route path="/app/blogManagement" component={BlogManagementPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
