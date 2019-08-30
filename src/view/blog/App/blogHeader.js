import React from "react";
import { withRouter } from "react-router-dom";
import { Input, Icon } from "antd";

const { Search } = Input;

class BlogHeader extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      curPath: pathname
    };
  }
  goto(to) {
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
          <span className="hd-right-margin hd-haver-active" onClick={() => this.goto("/app/writeBlog")}>
            <Icon type="highlight" className="writeBlogColor" /> 写博客
          </span>
          <span className="hd-right-margin hd-haver-active" onClick={() => this.goto("/app/message")}>
            <Icon type="mail" className="messageColor" /> 消息
          </span>
          <span className="hd-right-margin hd-haver-active" onClick={() => this.goto("/app/login")}>
            登录
          </span>
          <span className="hd-right-margin hd-haver-active" onClick={() => this.goto("/app/register")}>
            注册
          </span>
        </ul>
      </div>
    );
  }
}

export default withRouter(BlogHeader);
