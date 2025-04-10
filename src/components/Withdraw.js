import React, { useState } from 'react';
import axios from 'axios';

const Withdraw = () => {
  const [id, setId] = useState('');
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState('');

  const handleWithdraw = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/api/accounts/${id}/withdraw`, {
        amount,
      });
      setMessage(`Withdrawal successful! New Balance: ${response.data.balance}`);
    } catch (error) {
      setMessage('Error withdrawing funds');
    }
  };

  return (
    <div>
      <h2>Withdraw</h2>
      <label>
        Account ID:
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>
      <br />
      <button onClick={handleWithdraw}>Withdraw</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Withdraw;