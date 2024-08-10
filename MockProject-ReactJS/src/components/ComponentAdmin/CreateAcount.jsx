import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {
  Checkbox,
  Divider,
  Form,
  Input,
  DatePicker,
  Select,
  Upload,
  Button,
  Space,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Radio } from "antd";
export const CreateAcount = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-start sm:px-28  mb-5">
      <span className="font-semibold text-xl mb-4">Add Account</span>

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
        <div className="flex justify-between items-center gap-4">
          <Form.Item
            label={<span className="font-semibold">First name</span>}
            name="firstname"
            required={false}
            className="w-1/2"
            rules={[
              {
                type: "firstname",
                message: "The input is not valid Firstname!",
              },
              {
                required: true,
                message: "Please input your Firstname!",
              },
            ]}
          >
            <Input placeholder="Enter your firstname" />
          </Form.Item>

          <Form.Item
            label={<span className="font-semibold">Last name</span>}
            name="lastname"
            required={false}
            className="w-1/2"
            rules={[
              {
                type: "lastname",
                message: "The input is not valid Last name!",
              },
              {
                required: true,
                message: "Please input your Firstname!",
              },
            ]}
          >
            <Input placeholder="Enter your firstname" />
          </Form.Item>
        </div>
        <Form.Item
          label={<span className="font-semibold">Email address</span>}
          name="email"
          required={false}
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <div className="mb-4">
          <p className="font-semibold  ">Gender</p>
          <Radio.Group onChange={onChange} value={value} className="ml-10">
            <Radio value={1}>Male</Radio>
            <Radio value={2}>Famale</Radio>
          </Radio.Group>
        </div>

        <div className="flex justify-between items-center gap-4">
          <Form.Item label="DatePicker">
            <DatePicker className="w-[464px]" />
          </Form.Item>

          <Form.Item
            label={<span className="font-semibold">Phone number</span>}
            name="phonenumber"
            required={true}
            className="w-1/2"
            rules={[
              {
                type: "phonenumber",
                message: "The input is not valid Phonenumber!",
              },
              {
                required: true,
                message: "Please input your Phonenumber!",
              },
            ]}
          >
            <Input placeholder="Enter your phonenumber" />
          </Form.Item>
        </div>
        <Form.Item
          label={<span className="font-semibold">Address</span>}
          name="address"
          required={true}
          rules={[
            {
              type: "address",
              message: "The input is not valid Address!",
            },
            {
              required: true,
              message: "Please input your Address",
            },
          ]}
        >
          <Input placeholder="Enter your address" />
        </Form.Item>
        <div className="flex justify-between items-center gap-4">
          <Form.Item
            className="w-1/2"
            label={<span className="font-semibold">Password</span>}
            name="password"
            rules={[
              { required: true, message: "Please enter your password!" },
              {
                min: 6,
                message: "Password must be at least 6 characters long!",
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
            className="w-1/2"
            label={<span className="font-semibold">Confirm password</span>}
            name="confirm_password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
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
        </div>
        <p className="font-semibold">Role</p>
        <Select
          showSearch
          style={{
            width: 464,
            marginBottom: 20,
          }}
          placeholder="Search to Select"
          optionFilterProp="label"
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={[
            {
              value: "1",
              label: "Not Identified",
            },
            {
              value: "2",
              label: "Closed",
            },
            {
              value: "3",
              label: "Communicated",
            },
            {
              value: "4",
              label: "Identified",
            },
            {
              value: "5",
              label: "Resolved",
            },
            {
              value: "6",
              label: "Cancelled",
            },
          ]}
        />

        <Form.Item
          name="upload"
          label={<span className="font-semibold">Upload</span>}
          valuePropName="fileList"
          // getValueFromEvent={normFile}
          extra="longgggggggggggggggggggggggggggggggggg"
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
          <p className="font-semibold">Experience</p>
        <Radio.Group onChange={onChange} value={value}>
          <Space direction="vertical">
            <Radio value={1}>Under 1 year</Radio>
            <Radio value={2}>1 year - 3 years</Radio>
            <Radio value={3}>3 years - 5 years</Radio>
            <Radio value={3}>Over 5 years</Radio>
          </Space>
        </Radio.Group>
        <Form.Item>
          <button
            type="submit"
            className="bg-[#D2A52E] font-semibold mt-10 text-white w-full p-1 rounded-xl text-[18px]  focus:bg-black duration-500"
          >
            Save
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateAcount;
