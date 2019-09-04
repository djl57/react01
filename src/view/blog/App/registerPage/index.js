import React from "react";
import { Form, Input, Button } from "antd";
import { register } from "../../../../api/index";
import { withRouter } from "react-router-dom";

const SUCCESS = '200'

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      confirmDirty: false
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        const res = await register(values)
        if(res.code === SUCCESS) {
          console.log(this.props)
          this.props.history.push('/app/login')
        }
      }
    });
  };
  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };
  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("两次输入密码不一致!");
    } else {
      callback();
    }
  };
  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { xs: { span: 24 }, sm: { span: 2 } },
      wrapperCol: { xs: { span: 24 }, sm: { span: 10 } }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 2 }
      }
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="邮箱">
          {getFieldDecorator("email", {
            rules: [{ type: "email", message: "邮箱格式错误!" }, { required: true, message: "请填写您的邮箱!" }]
          })(<Input />)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              用户名
              {/* &nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip> */}
            </span>
          }
        >
          {getFieldDecorator("nickname", {
            rules: [{ required: true, message: "请填写您的用户名!", whitespace: true }]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="密码" hasFeedback>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "请填写您的密码!" }, { validator: this.validateToNextPassword }]
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="确认密码" hasFeedback>
          {getFieldDecorator("confirm", {
            rules: [{ required: true, message: "请确认您的密码!" }, { validator: this.compareToFirstPassword }]
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            注册
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
