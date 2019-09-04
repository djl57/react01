import React from "react";
import { withRouter } from "react-router-dom";
import { Input, Icon } from "antd";
import { checkAuth } from "../../../utils/auth";

const { Search } = Input;
const SUCCESS = "200";

const Login = props => (
  <span className="hd-right-margin hd-haver-active" onClick={() => props.onGoto()}>
    登录
  </span>
);

const Register = props => (
  <span className="hd-right-margin hd-haver-active" onClick={() => props.onGoto()}>
    注册
  </span>
);

const LoggedIn = () => <span>已登录</span>;

class BlogHeader extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      curPath: pathname,
      isLogin: false
    };
  }
  async goto(to) {
    if (to === "/app/writeBlog") {
      checkAuth(to).then(res => {
        this.setState({
          curPath: to
        });
        const { history } = this.props;
        history.push(to);
      });
    } else {
      this.setState({
        curPath: to
      });
      const { history } = this.props;
      history.push(to);
    }
  }
  onSearch(value) {
    console.log(value);
  }
  async componentWillMount() {
    const res = await checkAuth(this.state.curPath);
    if (res && res.code === SUCCESS) {
      this.setState({
        isLogin: true
      });
    }
  }
  render() {
    const navLists = [{ id: 0, navName: "首页", to: "/app/home" }, { id: 1, navName: "博客", to: "/app/blog" }];
    const listItem = navLists.map(item => (
      <li
        key={item.id}
        onClick={() => this.goto(item.to)}
        className={`nav-list hd-haver-active ${item.to === this.state.curPath ? "nav-list-active" : ""}`}
      >
        {item.navName}
      </li>
    ));
    return (
      <div className="blog-header">
        <ul className="nav-lists">{listItem}</ul>
        <ul className="hd-right">
          <Search placeholder="搜索" onSearch={value => this.onSearch(value)} style={{ width: 200 }} />
          <span className="hd-right-margin hd-haver-active" onClick={() => this.goto("/app/writeBlog")}>
            <Icon type="highlight" className="writeBlogColor" /> 写博客
          </span>
          {/* <span className="hd-right-margin hd-haver-active" onClick={() => this.goto("/app/message")}>
            <Icon type="mail" className="messageColor" /> 消息
          </span> */}
          {this.state.isLogin ? (
            <LoggedIn></LoggedIn>
          ) : (
            <span>
              <Login onGoto={() => this.goto("/app/login")}></Login>
              <Register onGoto={() => this.goto("/app/register")}></Register>
            </span>
          )}
        </ul>
      </div>
    );
  }
}

export default withRouter(BlogHeader);
