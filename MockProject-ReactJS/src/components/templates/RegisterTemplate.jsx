import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Checkbox, Divider, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { authServices } from "../../services/authService";

export const RegisterTemplate = () => {
  //message
  const [messageApi, contextHolder] = message.useMessage();
  //redirect
  const navigate = useNavigate();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Successful registration",
    });
  };
  const showMessage = ({ type, message }) => {
    messageApi.open({
      type: type,
      content: message,
    });
  };

  const onFinish = async (values) => {
    console.log("Success:", values);
    //call api
    const { name } = values;
    var fullName = name.split(" "),
      firstName = fullName[0],
      lastName = fullName[fullName.length - 1];
    try {
      const res = await authServices.register({
        ...values,
        firstName,
        lastName,
      });
      console.log(res);
      showMessage({ type: "success", message: "Successful registration" });
      navigate("/auth/login");
    } catch (error) {
      showMessage({
        type: "error",
        message: error.response.data.errors || "Something wrong !",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-start sm:px-28 px-10 mb-5 ">
      {contextHolder}
      <h1 className="font-semibold text-[32px] mb-5">Get Started Now</h1>

      <Form
        name="register"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        style={{ width: "100%" }}
      >
        <Form.Item
          label={<span className="font-semibold">Name</span>}
          name="name"
          required={true}
          rules={[
            {
              max: 50,
              message: "Please Maximum 50 character!",
            },
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item
          label={<span className="font-semibold">Phone number</span>}
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
            {
              max: 15,
              message: "Please Maximum 15 character!",
            },
            {
              pattern:
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
              message:
                "Please enter correct phone number format! Example: (624) 174-3179",
            },
          ]}
        >
          <Input placeholder="Enter your phone number" />
        </Form.Item>
        <Form.Item
          label={<span className="font-semibold">Email address</span>}
          name="email"
          required={true}
          rules={[
            {
              type: "email",
              message: "Invalid input Email!",
            },
            {
              max: 50,
              message: "Please Maximum 50 character!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label={<span className="font-semibold">Address</span>}
          name="address"
          rules={[
            { required: true, message: "Please input your Address!" },
            {
              max: 50,
              message: "Please Maximum 50 character!",
            },
          ]}
        >
          <Input placeholder="Enter your address!" />
        </Form.Item>

        <Form.Item
          label={<span className="font-semibold">Password</span>}
          name="password"
          rules={[
            { required: true, message: "Please enter your password!" },
            { min: 8, message: "Password must be at least 8 characters long!" },
            {
              max: 30,
              message: "Please Maximum 30 character password!",
            },
            {
              pattern: /^(?=.*[A-Z])|(?=.*[!@#$%^&*])/,
              message:
                "Password must contain at least one uppercase letter or one special character!",
            },
          ]}
        >
          <Input.Password placeholder="Enter your password!" />
        </Form.Item>
        <Form.Item
          label={<span className="font-semibold">Confirm password</span>}
          name="confirm_password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            {
              max: 30,
              message: "Please Maximum 30 character confirm password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match!"));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Enter your password!" />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          // rules={[
          //   {
          //     required: true,
          //     message: "You must accept our Terms & Policy!",
          //   },
          // ]}
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error("You must accept our Terms & Policy!")
                    ),
            },
          ]}
        >
          <Checkbox>I agree to the terms & policy</Checkbox>
        </Form.Item>

        <Form.Item>
          <button
            type="submit"
            className="bg-[#D2A52E] font-semibold text-white w-full p-1 rounded-xl text-[18px]  focus:bg-black duration-500"
          >
            Sign up
          </button>
        </Form.Item>
      </Form>

      <div className=" w-full pb-3">
        <Divider style={{ borderColor: "rgb(82 82 91)" }}>Or</Divider>
      </div>
      <div className="flex flex-wrap gap-3  ">
        <button className=" flex items-center justify-center flex-1 min-w-fit gap-2 font-semibold border-slate-400 border-[1px]  py-[3px] rounded-lg duration-500 focus:bg-[#D2A52E] focus:text-white text-sm p-5">
          <FcGoogle /> Sign up with Google
        </button>
        <button className=" flex-1 justify-center gap-2 min-w-fit duration-500 focus:bg-[#D2A52E] focus:text-white flex items-center font-semibold border-slate-400 border-[1px]  py-[2px] rounded-lg  text-sm p-5">
          <FaFacebook />
          Sign up with Facebook
        </button>
      </div>
      <div className="w-full mt-5 font-semibold">
        <p className="text-center text-[14px]">
          Have an account?{" "}
          <Link to={"/auth/login"} className="text-[#D2A52E]">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};
