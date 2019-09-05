import React from "react";
import { withRouter } from "react-router-dom";
import { Input, Icon, Menu, Dropdown } from "antd";
import { removeToken, getToken } from "../../../utils/cookie";

const { Search } = Input;

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

const menu = props => {
  const menuList1 = [
    { name: "我的收藏", to: "/app/myCollection", key: "0" },
    { name: "个人中心", to: "/app/personalCenter", key: "1" },
    { name: "账号设置", to: "/app/accountSettings", key: "2" }
  ];
  const menuList2 = [{ name: "我的博客", to: "/app/myBlog", key: "3" }, { name: "管理博客", to: "/app/blogManagement", key: "4" }];
  const menuItems1 = menuList1.map(item => (
    <Menu.Item key={item.key} onClick={() => props.onGoto(item.to)}>
      {item.name}
    </Menu.Item>
  ));
  const menuItems2 = menuList2.map(item => (
    <Menu.Item key={item.key} onClick={() => props.onGoto(item.to)}>
      {item.name}
    </Menu.Item>
  ));
  return (
    <Menu>
      {menuItems1}
      <Menu.Divider />
      {menuItems2}
      <Menu.Divider />
      <Menu.Item key="5" onClick={() => props.onGoto("/quit")}>
        退出
      </Menu.Item>
    </Menu>
  );
};

const LoggedIn = props => (
  <Dropdown overlay={menu(props)} placement="bottomRight" className="hd-right-margin">
    <span>
      {props.nickname} <Icon type="down" />
    </span>
  </Dropdown>
);

class BlogHeader extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      curPath: pathname,
      isLogin: getToken(),
      nickname: ""
    };
  }
  async goto(to) {
    if (to === "/quit") {
      removeToken();
      const { history } = this.props;
      history.push("/");
      return;
    }
    this.setState({
      curPath: to
    });
    const { history } = this.props;
    history.push(to);
  }
  onSearch(value) {
    console.log(value);
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
          {/* <span className="hd-right-margin hd-haver-active" onClick={() => this.goto("/app/writeBlog")}>
            <Icon type="highlight" className="writeBlogColor" /> 写博客
          </span> */}
          {/* <span className="hd-right-margin hd-haver-active" onClick={() => this.goto("/app/message")}>
            <Icon type="mail" className="messageColor" /> 消息
          </span> */}
          {this.state.isLogin ? (
            <LoggedIn onGoto={to => this.goto(to)} nickname={this.state.nickname}></LoggedIn>
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
