import React from 'react';
import { Table } from 'react-bootstrap';

function TransactionList({ transactions }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Token</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Date</th>
          <th>USD Value</th>
          <th>SOL Value</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((tx, index) => (
          <tr key={index}>
            <td>{tx.token}</td>
            <td>{tx.amount}</td>
            <td>{tx.type}</td>
            <td>{new Date(tx.date).toLocaleString()}</td>
            <td>{tx.usdValue}</td>
            <td>{tx.solValue}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TransactionList;
