import React from "react";

class Form extends React.Component {
  /* react 推荐使用受控组件 */
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      context: "这是内容",
      selectValue: 1,
      fruits: [1, 2]
    };
  }
  handleSubmit(event) {
    console.log("提交的姓名是：", this.state.name);
    console.log("提交的内容是：", this.state.context);
    console.log("选择的水饺口味是：", this.state.selectValue);
    console.log("喜欢的水果是：", this.state.fruits);
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({
      name: event.target.value.toUpperCase()
    });
  }
  handleTextChange(event) {
    this.setState({
      context: event.target.value
    });
  }
  handleSelectChange(event) {
    this.setState({
      selectValue: event.target.value
    });
  }
  handleMulSelectChange(event) {
    this.setState({
      fruits: event.target.value
    });
  }
  render() {
    const options = [
      { id: 1, value: "芹菜猪肉" },
      { id: 2, value: "白菜猪肉" },
      { id: 3, value: "茴香猪肉" }
    ];
    const optionItem = options.map(item => (
      <option key={item.id} value={item.id}>
        {item.value}
      </option>
    ));
    const multipleOptions = [
      { id: 1, value: "苹果" },
      { id: 2, value: "西瓜" },
      { id: 3, value: "香蕉" }
    ];
    const multipleOptionsItem = multipleOptions.map(item => (
      <option key={item.id} value={item.id}>
        {item.value}
      </option>
    ));
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>
          姓名：
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
        </label>
        <label>
          内容：
          <textarea
            value={this.state.context}
            onChange={e => this.handleTextChange(e)}
          />
        </label>
        <label>
          水饺口味：
          <select
            value={this.state.selectValue}
            onChange={e => this.handleSelectChange(e)}
          >
            {optionItem}
          </select>
        </label>
        <label>
          喜欢的水果：
          <select
            value={this.state.fruits}
            multiple={true}
            onChange={e => this.handleMulSelectChange(e)}
          >
            {multipleOptionsItem}
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}

export default Form;
