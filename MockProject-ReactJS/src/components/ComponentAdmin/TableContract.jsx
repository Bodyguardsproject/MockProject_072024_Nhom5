"use client";

import { Table } from "flowbite-react";

export function TableContract() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Contract ID</Table.HeadCell>
          <Table.HeadCell>Customer</Table.HeadCell>
          <Table.HeadCell>Type of serices</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
          <Table.HeadCell>Due Date</Table.HeadCell>
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
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell className="flex gap-2">
              <span
                onClick={() => {
                  // setShowModal(true);
                }}
                className="font-medium bg-red-500  px-4 py-2 rounded-lg  cursor-pointer"
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
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell className="flex gap-2">
              <span
                onClick={() => {
                  // setShowModal(true);
                }}
                className="font-medium bg-background-button  px-4 py-2 rounded-lg  cursor-pointer"
              >
                Edit
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
            <Table.Cell>$99</Table.Cell>
            <Table.Cell className="flex gap-2">
              <span
                onClick={() => {
                  // setShowModal(true);
                }}
                className="font-medium bg-red-500  px-4 py-2 rounded-lg  cursor-pointer"
              >
                Delete
              </span>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default TableContract;
