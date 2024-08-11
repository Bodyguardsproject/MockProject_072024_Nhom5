import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

import { TableService } from "../../components/ComponentAdmin/index";
import { IoMdAdd } from "react-icons/io";
import { FaRegFileAlt } from "react-icons/fa";
import { Button, Form, Input, Modal, Upload } from "antd";
import { FaRegUser } from "react-icons/fa";
import { FileInput } from "flowbite-react";
export const AdminServices = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="">
      <div className="p-4 flex justify-between items-center">
        <span className="tex-3xl font-bold">Services</span>
        <div
          onClick={() => {
            setShowModal(true);
          }}
          className="flex justify-center items-center gap-2 bg-background-button p-2 rounded-lg cursor-pointer"
        >
          <IoMdAdd />
          Add Service
        </div>
      </div>
      <TableService />
      <Modal
        title="Creating New Service"
        centered
        open={showModal}
        onOk={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
        width={1000}
      >
        <div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col w-1/2">
              <div className="flex justify-center items-center gap-4 mb-3">
                <FaRegUser />

                <Input placeholder="Enter your address" />
              </div>
              <div className="flex justify-center items-center gap-4">
                <FaRegFileAlt />

                <Input placeholder="Enter your address" />
              </div>
            </div>
            <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
              <FileInput
                type="file"
                accept="image/*"
                // onChange={handleFileChange}
              />
              <Button
                type="button"
                gradientDuoTone="purpleToBlue"
                size="sm"
                outline
                // onClick={handleUploadImage}
                // disabled={imageUploadProgress}
              >
                Upload Image
              </Button>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#D2A52E] font-semibold mt-10 text-white w-full p-1 rounded-xl text-[18px]  focus:bg-black duration-500"
          >
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminServices;
