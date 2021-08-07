import React, { useContext, useState } from "react";
import Header from "./components/Header";
import History from "./components/History";
import IncomeExpense from "./components/IncomeExpense";
import Transaction from "./components/Transaction";
import './child.css';

function Child() {


  return (
    <>
      <div className="main_expenseTracker">

        <Header />

        <IncomeExpense />


        

        <History />
        
        <Transaction />


      </div>
    </>
  )
}

export default Child;
