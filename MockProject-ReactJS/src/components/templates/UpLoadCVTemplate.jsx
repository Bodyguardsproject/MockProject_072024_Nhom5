import { Form, Input, Button, Checkbox, Upload, Row, Col, Select } from "antd";
import { useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { Country, State, City } from "country-state-city";

export const UpLoadCVTemplate = () => {
  const [initialAdress, setInitialAdress] = useState({
    country: "",
    state: "",
  });

  // start upload file //
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
  // end upload file //

  // start submit form //
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  // end submit form //

  // start initvalue select adress//

  const optionCountrySelect = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  const optionStateSelect = State.getStatesOfCountry(initialAdress.country).map(
    (state) => ({
      value: state.isoCode,
      label: state.name,
    })
  );
  const optionCitySelect = City.getCitiesOfState(
    initialAdress.country,
    initialAdress.state
  ).map((city) => ({
    value: city.name,
    displayValue: city.name,
  }));
  //  end initvalue select adress  //

  // start funtion onchang select//
  const onChangeSelect = (e, name) => {
    setInitialAdress((preState) => ({
      ...preState,
      [name]: e,
    }));
  };
  // end funtion onchang select//

  console.log(initialAdress);

  return (
    <div className="max-w-7xl m-auto py-10 px-4 sm:px-0">
      <div className="px-4 py-4 border-[1px] rounded-3xl border-gray-400">
        <h1 className="uppercase text-xl font-bold"> apply now</h1>

        <Form layout="vertical" onFinish={onFinish}>
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
          <Row gutter={24}>
            <Col span={12}>
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
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label={<span className="font-semibold">Country</span>}
                required
                name="country"
              >
                <Select
                  showSearch
                  optionFilterProp="label"
                  options={optionCountrySelect}
                  onChange={(e) => onChangeSelect(e, "country")}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<span className="font-semibold">State/province</span>}
                required
                name="state"
              >
                <Select
                  showSearch
                  optionFilterProp="label"
                  options={optionStateSelect}
                  onChange={(e) => onChangeSelect(e, "state")}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label={<span className="font-semibold">City</span>}
                required
                name="city"
              >
                <Select options={optionCitySelect} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="street"
                label={<span className="font-semibold">Street Address</span>}
                required
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label={<span className="font-semibold">Zip code</span>}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<span className="font-semibold">Certificate</span>}
              >
                <Upload {...props}>
                  <Button icon={<AiOutlineUpload className="text-xl" />}>
                    Click to Upload
                  </Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col sm={{ span: 12 }}>
              <Form.Item
                label={<span className="font-semibold">Privacy</span>}
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    required: true,
                    message: "You need to read and agree to the agreement!",
                  },
                ]}
              >
                <div className="border-[1px]  border-black p-5">
                  <a href="" target="_blank">
                    Click here our Pricacy Policy
                  </a>
                  <p className="text-red-700">
                    By click the checkbox below,you agree to the terms of our
                    privacy policy.
                  </p>
                  <Checkbox />
                </div>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <div className=" flex justify-center">
              <button
                type="submit"
                className="bg-[#D2A52E] font-semibold text-white  py-1 px-5 rounded-xl text-[18px]  focus:bg-black duration-500"
              >
                Sign up
              </button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
