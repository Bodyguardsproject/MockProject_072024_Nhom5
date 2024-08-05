import { Divider, Form, Input } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const ResetPasswordTemplate = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-start  sm:px-28  px-10 mb-5">
      <h1 className="font-semibold text-3xl">Reset your password</h1>
      <h3 className="mt-2 mb-5">We've sent an email to with instructions</h3>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ width: "100%" }}
      >
        <Form.Item
          label={<span className="font-semibold">OTP</span>}
          name="otp"
          required={false}
          rules={[
            {
              required: true,
              message: "Please input your OTP!",
            },
          ]}
        >
          <Input placeholder="Enter your OTP" />
        </Form.Item>

        <Form.Item>
          <div className="flex flex-wrap w-full gap-5">
            <div
              className="w-full text-center gap-2  flex-1 min-w-fit cursor-pointer font-semibold border-slate-400 border-[1px] px-5 py-[2px] rounded-lg duration-500 hover:bg-[#D2A52E] hover:text-white text-sm"
              onClick={() => navigate("/auth/login")}
            >
              Return to Login
            </div>
            <button className=" w-full bg-primary-color flex-1 min-w-fit duration-500 focus:bg-global-color-text focus:text-white gap-2 font-semibold border-slate-400 border-[1px] px-5 py-[2px] rounded-lg  text-sm">
              Reset Password
            </button>
          </div>
        </Form.Item>
      </Form>
      <div className=" w-full ">
        <Divider style={{ borderColor: "rgb(82 82 91)" }}>Or</Divider>
      </div>

      <div className="w-full mt-5 font-semibold">
        <p className="text-center" onClick={() => navigate("/auth/register")}>
          Don't have an account? {"  "}
          <Link to={"/auth/register"} className="text-[#D2A52E]">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
