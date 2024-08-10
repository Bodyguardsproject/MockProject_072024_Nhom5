import React from 'react'
import { Table } from "flowbite-react";
export const TableCustomer = () => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Customer Name</Table.HeadCell>
          <Table.HeadCell>Address</Table.HeadCell>
          <Table.HeadCell>Types</Table.HeadCell>
          <Table.HeadCell>Number of Contract</Table.HeadCell>
          <Table.HeadCell>Total amount</Table.HeadCell>
          
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
           
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Magic Mouse 2
            </Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

export default TableCustomer