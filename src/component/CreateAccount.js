import React, { useState } from 'react';
import axios from 'axios';

const CreateAccount = () => {
  const [accountHolderName, setAccountHolderName] = useState('');
  const [balance, setBalance] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/accounts', {
        accountHolderName,
        balance,
      });
      setMessage(`Account created successfully! ID: ${response.data.id}`);
    } catch (error) {
      setMessage('Error creating account');
    }
  };

  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Account Holder Name:
          <input
            type="text"
            value={accountHolderName}
            onChange={(e) => setAccountHolderName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Initial Balance:
          <input
            type="number"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Create Account</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateAccount;