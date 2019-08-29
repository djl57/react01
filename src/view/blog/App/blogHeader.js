import React from "react";
import { HashRouter as Router, withRouter } from "react-router-dom";
import { Input, Icon } from "antd";

const { Search } = Input;

class BlogHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curNavIdx: 0
    };
  }
  async goto(to, index) {
    this.setState({
      curNavIdx: index
    });
    const { history } = this.props;
    history.push(to);
  }
  render() {
    const navLists = [{ id: 0, navName: "首页", to: "/app/home" }, { id: 1, navName: "博客", to: "/app/blog" }];
    const listItem = navLists.map((item, index) => (
      <li key={item.id} onClick={() => this.goto(item.to, index)} className={`nav-list ${index === this.state.curNavIdx ? "nav-list-active" : ""}`}>
        {item.navName}
      </li>
    ));
    return (
      <div className="blog-header">
        <ul className="nav-lists">{listItem}</ul>
        <ul className="hd-right">
          <Search placeholder="搜索" onSearch={value => console.log(value)} style={{ width: 200 }} />
          <span className="hd-right-margin"><Icon type="highlight" /> 写博客</span>
          <span className="hd-right-margin"><Icon type="mail" /> 消息</span>
          <span className="hd-right-margin">登录</span>
          <span className="hd-right-margin">注册</span>
        </ul>
      </div>
    );
  }
}
const Head = withRouter(BlogHeader);
const BlogHeaderWithRouter = () => {
  return (
    <Router>
      <Head />
    </Router>
  );
};

export default BlogHeaderWithRouter;
