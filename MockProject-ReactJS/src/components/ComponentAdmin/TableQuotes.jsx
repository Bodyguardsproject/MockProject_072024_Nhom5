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
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
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
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
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
              Magic Mouse 2
            </Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
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
