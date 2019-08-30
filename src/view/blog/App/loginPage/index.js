import React from "react";
import { Form, Input, Button } from "antd";
import { register } from "../../../../api/index";
import { withRouter } from "react-router-dom";

const SUCCESS = "200";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      confirmDirty: false
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        console.log(values)
        // const res = await register(values);
        // if (res.code === SUCCESS) {
        //   console.log(this.props);
        //   this.props.history.push("/app/login");
        // }
      }
    });
  };
  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { xs: { span: 24 }, sm: { span: 5 } },
      wrapperCol: { xs: { span: 24 }, sm: { span: 10 } }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 5 }
      }
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="邮箱">
          {getFieldDecorator("email", {
            rules: [{ type: "email", message: "邮箱格式错误!" }, { required: true, message: "请填写您的邮箱!" }]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="密码" hasFeedback>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "请填写您的密码!" }]
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = withRouter(Form.create({ name: "register" })(RegistrationForm));

class RegisterPage extends React.Component {
  render() {
    return (
      <div className="log-box">
        <WrappedRegistrationForm></WrappedRegistrationForm>
      </div>
    );
  }
}

export default RegisterPage;
