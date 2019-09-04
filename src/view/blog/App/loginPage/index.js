import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { login } from "../../../../api/index";
import { withRouter } from "react-router-dom";
import { setToken } from "../../../../utils/cookie";

const SUCCESS = "200";

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickLoginButton: false
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        this.setState({
          clickLoginButton: true
        });
        const res = await login(values);
        this.setState({
          clickLoginButton: false
        });
        if (res.code === SUCCESS) {
          this.props.history.push('/');
          setToken(res.token);
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      wrapperCol: { xs: { span: 24 }, sm: { span: 10 } }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 0 }
      }
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [{ type: "email", message: "邮箱格式错误!" }, { required: true, message: "请输入您的邮箱!" }]
          })(<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="邮箱" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "请输入您的密码!" }]
          })(<Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} type="password" placeholder="密码" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>记住我</Checkbox>)}
          {/* <a href="">
            忘记密码
          </a>
          <a href="">现在注册</a> */}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" loading={this.state.clickLoginButton}>
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = withRouter(Form.create({ name: "normal_login" })(NormalLoginForm));

class RegisterPage extends React.Component {
  render() {
    return (
      <div className="log-box">
        <WrappedNormalLoginForm></WrappedNormalLoginForm>
      </div>
    );
  }
}

export default RegisterPage;
