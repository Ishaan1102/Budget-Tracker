import './App.css';
import React from 'react';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { Footer } from './components/Footer';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
       <Header />
       <div className= "container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
       </div>
       <Footer />
    </GlobalProvider>
  );
}

export default App;
