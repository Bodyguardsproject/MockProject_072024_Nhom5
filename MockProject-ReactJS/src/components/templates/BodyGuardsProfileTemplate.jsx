import {
  Form,
  Input,
  Button,
  Radio,
  DatePicker,
  Checkbox,
  Upload,
  Row,
  Col,
  Space,
} from "antd";
import { useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";

export const BodyGuardsProfileTemplate = () => {
  const props = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const [componentDisabled, setComponentDisabled] = useState(true);
  const onFinish = (values) => {
    console.log("Success:", values);
    setComponentDisabled(true);
  };

  return (
    <div className=" max-w-7xl  m-auto py-14 px-5 sm:px-0">
      <h1 className="text-2xl font-bold">My profile</h1>
      <p className="">Manage profile information to secure your account</p>
      <div className=" grid grid-cols-1 sm:grid-cols-3 gap-5  mt-10 ">
        <div className="col-span-2 px-4 py-4 border-[1px] rounded-3xl border-gray-400">
          <Form
            layout="vertical"
            disabled={componentDisabled}
            onFinish={onFinish}
          >
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  label={<span className="font-semibold">Firstname</span>}
                  name="first_name"
                  required
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={<span className="font-semibold">Lastname</span>}
                  name="last_name"
                  required
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              label={<span className="font-semibold">Email</span>}
              name="email"
              required
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
              <Input />
            </Form.Item>
            <Form.Item
              label={<span className="font-semibold">Gender</span>}
              required
            >
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">female</Radio>
              </Radio.Group>
            </Form.Item>

            <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  label={<span className="font-semibold">Date of birth</span>}
                >
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={<span className="font-semibold">Phone number</span>}
                  name="phone_number"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                    {
                      len: 10,
                      message: "Number must be at least 10 characters long!",
                    },
                    {
                      pattern: /^[0-9]+$/,
                      message:
                        "Phone number must only contain digits from 0 to 9!",
                    },
                  ]}
                >
                  <Input placeholder="Enter your phone number" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              label={<span className="font-semibold">Address</span>}
              name="address"
              rules={[
                { required: true, message: "Please input your Address!" },
              ]}
            >
              <Input placeholder="Enter your address!" />
            </Form.Item>

            <Form.Item
              label={<span className="font-semibold">Services</span>}
              name="services"
              valuePropName="checked"
              required
            >
              <Checkbox.Group>
                <Space direction="vertical">
                  <Checkbox value={0}>Personal Security</Checkbox>
                  <Checkbox value={1}>Event Security</Checkbox>
                  <Checkbox value={2}>Asset Security</Checkbox>
                  <Checkbox value={3}>Excort Security</Checkbox>
                </Space>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item
              label={<span className="font-semibold">Certificate</span>}
            >
              <Upload {...props}>
                <Button icon={<AiOutlineUpload className="text-xl" />}>
                  Click to Upload
                </Button>
              </Upload>
            </Form.Item>

            <Form.Item
              label={<span className="font-semibold">Experience</span>}
              name="experience"
            >
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value="0">Under 1 year</Radio>
                  <Radio value="1">1 year - 3 years</Radio>
                  <Radio value="2">3 year - 5 years</Radio>
                  <Radio value="3">Over 5 years</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
            {componentDisabled === true ? (
              <Form.Item>
                <div className=" flex justify-end">
                  <p
                    className="cursor-pointer bg-primary-color font-semibold text-black py-1 px-6 rounded-lg text-[18px]  focus:bg-black duration-500"
                    onClick={() => setComponentDisabled(false)}
                  >
                    Edit
                  </p>
                </div>
              </Form.Item>
            ) : (
              <Form.Item>
                <div className=" flex justify-end gap-5">
                  <button
                    type="reset"
                    className="cursor-pointer bg-primary-color font-semibold text-black py-1 px-6 rounded-lg text-[18px]  focus:bg-black duration-500"
                    onClick={() => setComponentDisabled(true)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="cursor-pointer bg-primary-color font-semibold text-black py-1 px-6 rounded-lg text-[18px]  focus:bg-black duration-500 focus:text-white"
                  >
                    Save
                  </button>
                </div>
              </Form.Item>
            )}
          </Form>
        </div>
        <div className="p-4  border-[1px]  rounded-3xl border-gray-400 h-[300px] order-first sm:order-1">
          <div className="flex items-center gap-4 pb-5">
            <img
              src="https://fastguardservice.com/wp-content/uploads/2024/06/IMG_4607.jpg"
              alt="avata"
              className=" h-[100px] w-[100px] rounded-full "
            />

            <p className="font-bold text-lg">John Smith</p>
          </div>
          <p className=" font-medium text-lg text-gray-600">
            johnsmith@example.com
          </p>
        </div>
      </div>
    </div>
  );
};
