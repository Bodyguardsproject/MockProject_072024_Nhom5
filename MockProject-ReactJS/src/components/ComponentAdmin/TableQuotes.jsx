import React from "react";
import { Table } from "flowbite-react";
export const TableQuotes = () => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Id</Table.HeadCell>
          <Table.HeadCell>Customer</Table.HeadCell>
          <Table.HeadCell>Created</Table.HeadCell>
          <Table.HeadCell>Services</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              1
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>2023-01-15</Table.Cell>
            <Table.Cell>Personal Security</Table.Cell>
            <Table.Cell>
              <span
                onClick={() => {
                  // setShowModal(true);
                }}
                className="font-medium bg-background-button text-text-admin px-4 py-2 rounded-lg  cursor-pointer"
              >
                In Progress
              </span>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             2
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>2023-01-15</Table.Cell>
            <Table.Cell>Personal Security</Table.Cell>
            <Table.Cell>
              <span
                onClick={() => {
                  // setShowModal(true);
                }}
                className="font-medium bg-background-button-second text-text-admin px-4 py-2 rounded-lg  cursor-pointer"
              >
                Completed
              </span>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              3
            </Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>2023-01-15</Table.Cell>
            <Table.Cell>Personal Security</Table.Cell>
            <Table.Cell>
              <span
                onClick={() => {
                  // setShowModal(true);
                }}
                className="font-medium bg-background-button text-text-admin px-4 py-2 rounded-lg  cursor-pointer"
              >
                In Progress
              </span>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default TableQuotes;
