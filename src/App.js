import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ExpenseContainer from './features/expense/ExpenseContainer';

function App() {
  return (
    <div className="App">
      <ExpenseContainer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />

      </header>
    </div>
  );
}

export default App;
