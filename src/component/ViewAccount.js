import React, { useState } from 'react';
import axios from 'axios';

const ViewAccount = () => {
  const [id, setId] = useState('');
  const [account, setAccount] = useState(null);
  const [message, setMessage] = useState('');

  const handleView = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/accounts/${id}`);
      setAccount(response.data);
      setMessage('');
    } catch (error) {
      setMessage('Account not found');
      setAccount(null);
    }
  };

  return (
    <div>
      <h2>View Account</h2>
      <label>
        Account ID:
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
      </label>
      <button onClick={handleView}>View Account</button>
      {message && <p>{message}</p>}
      {account && (
        <div>
          <p>Account Holder: {account.accountHolderName}</p>
          <p>Balance: {account.balance}</p>
        </div>
      )}
    </div>
  );
};

export default ViewAccount;