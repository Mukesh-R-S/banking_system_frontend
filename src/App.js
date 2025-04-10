import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import ViewAccount from './components/ViewAccount';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Create Account</Link></li>
            <li><Link to="/view">View Account</Link></li>
            <li><Link to="/deposit">Deposit</Link></li>
            <li><Link to="/withdraw">Withdraw</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route path="/view" element={<ViewAccount />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;