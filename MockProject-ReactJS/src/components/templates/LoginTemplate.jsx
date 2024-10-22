import { Checkbox, Divider, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import { authServices } from "../../services/authService";

export const LoginTemplate = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  //messLoginError
  const showMessage = ({ type, message }) => {
    messageApi.open({
      type: type,
      content: message,
    });
  };

  const onFinish = async (values) => {
    console.log("Success:", values);
    //call api

    try {
      const res = await authServices.login(values);

      Cookies.set("token", res.data.data.tokens.accessToken, { expires: 7 });

      const decoded = jwtDecode(res.data.data.tokens.accessToken);
      decoded.scope[0].role === "ROLE_USER"
        ? navigate("/")
        : navigate("/admin");
    } catch (error) {
      console.log(error);
      showMessage({
        type: "error",
        message: "Login failed. Incorrect email or password",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-start sm:px-28 px-10 mb-5">
      {contextHolder}
      <h1 className="font-semibold text-[32px]">WelComeback!</h1>
      <h3 className="mt-2 mb-5  ">
        Enter your Credentials to access your account
      </h3>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        style={{ width: "100%" }}
      >
        <Form.Item
          label={<span className="font-semibold">Email address</span>}
          name="email"
          required={false}
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
        <div className="flex justify-between my-[12px] font-semibold">
          <span>Password</span>
          <p
            className="text-[#e3c472] cursor-pointer"
            onClick={() => navigate("/auth/forgotpassword")}
          >
            Forgot password?
          </p>
        </div>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            {
              max: 30,
              message: "Please Maximum 30 character!",
            },
            {
              validator: (_, value) =>
                !value.includes(" ")
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error("Password cannot include spaces!")
                    ),
            },
          ]}
        >
          <Input.Password placeholder="Please enter your password!" />
        </Form.Item>

        <Form.Item valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <button
            type="submit"
            className="bg-[#D2A52E] font-semibold text-white w-full p-1 rounded-xl text-[18px]  focus:bg-black duration-500"
          >
            Login
          </button>
        </Form.Item>
      </Form>
      <div className=" w-full pb-3">
        <Divider style={{ borderColor: "rgb(82 82 91)" }}>Or</Divider>
      </div>
      <div className="flex flex-wrap gap-3 flex-1 min-w-fit">
        <button className=" flex items-center justify-center flex-1 min-w-fit gap-2 font-semibold border-slate-400 border-[1px]  py-[3px] rounded-lg duration-500 focus:bg-[#D2A52E] focus:text-white text-sm p-5">
          <FcGoogle /> Sign in with Google
        </button>
        <button className=" flex-1 justify-center gap-2 min-w-fit duration-500 focus:bg-[#D2A52E] focus:text-white flex items-center font-semibold border-slate-400 border-[1px]  py-[2px] rounded-lg  text-sm p-5">
          <FaFacebook />
          Sign in with Facebook
        </button>
      </div>
      <div className="w-full mt-5 font-semibold">
        <p className="text-center text-[14px]">
          Do not have an account?{" "}
          <Link to="/auth/register" className="text-[#D2A52E]">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginTemplate;
