import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import TransactionList from './TransactionList';

function App() {
  const [address, setAddress] = useState('');
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const response = await fetch(`https://insidergateway-backend.netlify.app/api/transactions/${address}`);
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  return (
    <Container>
      <h1>InsiderGateway</h1>
      <Form>
        <Form.Group controlId="formAddress">
          <Form.Label>Solana Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Solana address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={fetchTransactions}>Fetch Transactions</Button>
      </Form>
      {transactions.length > 0 && <TransactionList transactions={transactions} />}
    </Container>
  );
}

export default App;
