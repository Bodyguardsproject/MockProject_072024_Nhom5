import React from "react";
import { Table } from "flowbite-react";
export const TableRecruitment = () => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Infomation</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell>
              <a href="/" className="text-[#0984e3]">Link</a>
            </Table.Cell>

            <Table.Cell className="flex gap-4">
              <span
                onClick={() => {
                  // setShowModal(true);
                }}
                className="font-medium bg-background-button text-text-admin px-4 py-2 rounded-lg  cursor-pointer"
              >
                Accept
              </span>
              <span
                onClick={() => {
                  // setShowModal(true);
                }}
                className="font-medium bg-background-button-second normal-case text-text-admin px-4 py-2 rounded-lg  cursor-pointer"
              >
                Denny
              </span>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>
              <a href="/" className="text-[#0984e3]">Link</a>
            </Table.Cell>

            <Table.Cell className="flex gap-4">
              <span
                onClick={() => {
                  // setShowModal(true);
                }}
                className="font-medium bg-background-button text-text-admin px-4 py-2 rounded-lg  cursor-pointer"
              >
                Accept
              </span>
              <span
                onClick={() => {
                  // setShowModal(true);
                }}
                className="font-medium bg-background-button-second normal-case text-text-admin px-4 py-2 rounded-lg  cursor-pointer"
              >
                Denny
              </span>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Magic Mouse 2
            </Table.Cell>
            <Table.Cell>
              <a href="/" className="text-[#0984e3]">Link</a>
            </Table.Cell>

            <Table.Cell className="flex gap-4">
              <span
                onClick={() => {
                  // setShowModal(true);
                }}
                className="font-medium bg-background-button text-text-admin px-4 py-2 rounded-lg  cursor-pointer"
              >
                Accept
              </span>
              <span
                onClick={() => {
                  // setShowModal(true);
                }}
                className="font-medium bg-background-button-second normal-case text-text-admin px-4 py-2 rounded-lg  cursor-pointer"
              >
                Denny
              </span>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default TableRecruitment;
