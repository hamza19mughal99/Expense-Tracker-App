import React, { useContext, useState } from "react";
import TransContext from "../TransContext";
import '../child.css';



//MATERIAL UI

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "3%",
    marginLeft: "4px"
  },
  paper: {
    padding: theme.spacing(0.1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontWeight: "bolder"
  },
}));

//MATERIAL UI


function Header() {
  const classesheader = useStyles();





  let { transactions } = useContext(TransContext)

  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) {
        income += parseInt(transactions[i].amount);
      }
    }
    return income;
  }
  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) {
        expense += parseInt(transactions[i].amount);
      }
    }
    return expense;
  }

  return (
    <div>

      <div className="main_heading">
        <h2>Expense Tracker </h2>
      </div>

      <div className={classesheader.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classesheader.paper}>

              {/* <div className="main_balance"> */}
                <h3>Your Balance</h3>
                <p style={{fontSize: "20px"}} > Rs <span>{getIncome() + getExpense()}</span> /- </p>
              {/* </div> */}
            </Paper>
          </Grid>
        </Grid>

      </div>


    </div>


  );
}

export default Header;