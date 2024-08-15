import React, { useState } from "react";
import { Checkbox, Table } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Button, Modal } from "antd";
import { EditAccount } from "../../components/ComponentAdmin/index";
export const TableAccount = () => {
  const [editAccount, setEditAccount] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Role</Table.HeadCell>
          <Table.HeadCell>Members</Table.HeadCell>
          <Table.HeadCell>Update</Table.HeadCell>
          <Table.HeadCell>Permissions</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
          <Table.HeadCell>Actions2</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell className="flex gap-4">
              <span
                onClick={() => {
                  setShowModal(true);
                  
                }}
                className="font-medium bg-background-button text-text-admin px-4 py-2 rounded-lg  cursor-pointer"
              >
                Edit
              </span>
              <span
                onClick={() => {
                  // setShowModal(true);
                  
                }}
                className="font-medium bg-background-button-second normal-case text-text-admin px-4 py-2 rounded-lg  cursor-pointer"
              >
                Delete
              </span>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell className="flex gap-4">
              <span
                onClick={() => {
                  setShowModal(true);
                  
                }}
                className="font-medium bg-background-button text-text-admin px-4 py-2 rounded-lg  cursor-pointer"
              >
                Edit
              </span>
              <span
                onClick={() => {
                  // setShowModal(true);
                  
                }}
                className="font-medium bg-background-button-second normal-case text-text-admin px-4 py-2 rounded-lg  cursor-pointer"
              >
                Delete
              </span>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Magic Mouse 2
            </Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell className="flex gap-4">
              <span
                onClick={() => {
                  setShowModal(true);
                  
                }}
                className="font-medium bg-background-button text-text-admin px-4 py-2 rounded-lg  cursor-pointer"
              >
                Edit
              </span>
              <span
                onClick={() => {
                  // setShowModal(true);
                  
                }}
                className="font-medium bg-background-button-second normal-case text-text-admin px-4 py-2 rounded-lg  cursor-pointer"
              >
                Delete
              </span>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      {/* Modaal Edit  */}
      <Modal
        title="Permission role"
        centered
        open={showModal}
        onOk={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
        width={1000}
        height={650}
      >
        <Table>
          <Table.Head>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell>Admin</Table.HeadCell>
            <Table.HeadCell>Manager</Table.HeadCell>
            <Table.HeadCell>Staff</Table.HeadCell>
            <Table.HeadCell>Supervisor</Table.HeadCell>
            <Table.HeadCell>BodyGuard</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {'Apple MacBook Pro 17"'}
              </Table.Cell>
              <Table.Cell className="p-4  ">
                <Checkbox className="w-[20px] h-[20px] ml-5 border-2 border-current " />
              </Table.Cell>
              <Table.Cell className="p-4  ">
                <Checkbox className="w-[20px] h-[20px] ml-5 border-2 border-current " />
              </Table.Cell>
              <Table.Cell className="p-4  ">
                <Checkbox className="w-[20px] h-[20px] ml-5 border-2 border-current " />
              </Table.Cell>
              <Table.Cell className="p-4  ">
                <Checkbox className="w-[20px] h-[20px] ml-5 border-2 border-current " />
              </Table.Cell>
              <Table.Cell className="p-4  ">
                <Checkbox className="w-[20px] h-[20px] ml-5 border-2 border-current " />
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Microsoft Surface Pro
              </Table.Cell>
              <Table.Cell className="p-4  ">
                <Checkbox className="w-[20px] h-[20px] ml-5 border-2 border-current " />
              </Table.Cell>
              <Table.Cell className="p-4  ">
                <Checkbox className="w-[20px] h-[20px] ml-5 border-2 border-current " />
              </Table.Cell>
              <Table.Cell className="p-4  ">
                <Checkbox className="w-[20px] h-[20px] ml-5 border-2 border-current " />
              </Table.Cell>
              <Table.Cell className="p-4  ">
                <Checkbox className="w-[20px] h-[20px] ml-5 border-2 border-current " />
              </Table.Cell>
              <Table.Cell className="p-4  ">
                <Checkbox className="w-[20px] h-[20px] ml-5 border-2 border-current " />
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Magic Mouse 2
              </Table.Cell>
              <Table.Cell className="p-4  ">
                <Checkbox className="w-[20px] h-[20px] ml-5 border-2 border-current " />
              </Table.Cell>
              <Table.Cell className="p-4  ">
                <Checkbox className="w-[20px] h-[20px] ml-5 border-2 border-current " />
              </Table.Cell>
              <Table.Cell className="p-4  ">
                <Checkbox className="w-[20px] h-[20px] ml-5 border-2 border-current " />
              </Table.Cell>
              <Table.Cell className="p-4  ">
                <Checkbox className="w-[20px] h-[20px] ml-5 border-2 border-current " />
              </Table.Cell>
              <Table.Cell className="p-4  ">
                <Checkbox className="w-[20px] h-[20px] ml-5 border-2 border-current " />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Modal>
    </div>
  );
};

export default TableAccount;
