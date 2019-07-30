import React from "react";

class DataRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello world"
    };
  }
  changeMessage() {
    this.setState({
      message: "hello react"
    });
  }

  render() {
    return (
      <div>
        {this.state.message}
        <input
          type="button"
          value="更新数据"
          onClick={() => this.changeMessage()}
        />
        <div>
          <span title={this.state.message}>
            鼠标悬停几秒钟查看此处动态绑定的提示信息！
          </span>
        </div>
      </div>
    );
  }
}

export default DataRender;
