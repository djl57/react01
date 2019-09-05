import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import BlogHeader from "./blogHeader";
import LoginPage from "./loginPage/index";
import routerLists from "../../../router/authRouter";
import { getToken } from "../../../utils/cookie";

class FrontendAuth extends React.Component {
  render() {
    const { location, routerLists } = this.props;
    const { component: Component, ...rest } = this.props;
    const { pathname } = location;
    console.log("auth:", pathname);
    const isLogin = getToken();
    const targetRoute = routerLists.find(route => route.path === pathname);
    if (targetRoute && !targetRoute.auth && !isLogin) {
      // console.log("未登录状态，访问不需要验证权限的页面");
      const { component } = targetRoute;
      return <Route exact path={pathname} component={component} />;
    }
    if (isLogin) {
      if (pathname === "/app/login") {
        // console.log("登陆状态，访问登陆页，重定向到主页");
        return <Redirect to="/" />;
      } else {
        if (targetRoute) {
          // console.log("登录状态，路由合法，跳转到相应的路由");
          return <Route path={pathname} component={targetRoute.component} />;
        } else {
          // console.log("登录状态，路由不合法，重定向到 404 页面");
          return <Redirect to="/404" />;
        }
      }
    } else {
      if (targetRoute && targetRoute.auth) {
        // console.log("非登陆状态，路由合法时且需要权限校验时，跳转到登陆页面，要求登陆");
        if (pathname === "/app/login") {
          return <Route path="/app/login" component={LoginPage} />;
        } else {
          return <Route exact path={pathname} render={() => <Redirect to="/app/login" push />} />;
        }
        // return <Route path="/app/login" component={LoginPage} />;
      } else {
        // console.log("非登陆状态，路由不合法时，重定向至 404");
        return <Redirect to="/404" />;
      }
    }
  }
}

class App extends React.Component {
  render() {
    console.log("app");
    return (
      <div>
        <BlogHeader></BlogHeader>
        <Router>
          <Switch>
            <FrontendAuth routerLists={routerLists}></FrontendAuth>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
