import { Button, Form, Input, Select, Spin } from "antd";
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import "../resources/styles/pages/Login.css";

export default function Login() {
  const { currentUser } = useAuth();
  const [isOTPSent, setIsOTPSent] = useState(false);

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} defaultValue="+91">
        <Select.Option value="86">+91</Select.Option>
        {/* <Select.Option value="87">+87</Select.Option> */}
      </Select>
    </Form.Item>
  );

  return (
    <div className="loginFlex">
      <div className="mainContainer">
        <div className="loginTitle">
          <h2>Login</h2>
        </div>
        <div className="loginForm">
          <Form className="LoginForm">
            <Form.Item
              name="phone"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                className="phoneInput"
                size="large"
              />
              <Button
                type="primary"
                className="sendOTP"
                size="large"
                disabled={isOTPSent}
              >
                {isOTPSent ? "Send OTP" : <Spin />}
              </Button>
            </Form.Item>
            <Form.Item
              name="otp"
              rules={[{ required: true, message: "Please input valid OTP!" }]}
            >
              <Input
                size="large"
                placeholder="one Time Password"
                className="OTPinput"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large">
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
