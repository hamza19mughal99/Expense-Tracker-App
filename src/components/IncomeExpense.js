import React, { useContext, useState } from "react";
import TransContext from "../TransContext";
import '../child.css';


//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0.5),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    color: "black",
    fontWeight:"bolder",
    paddingTop: "15px",
  
  },
}));
//Material-UI







function IncomeExpense() {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:320px)');




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
      <div className="main_expense_income">
        <div className={classes.root}>
          <Grid container spacing={4}>

            <Grid item xs={6}>
              
              <Paper className={classes.paper} style={{color: "#5DBB63" , width:"100%"  }} >INCOME <p> Rs <span>{getIncome()}</span> /- </p></Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} style={{color: "#FA8073"}} >EXPENSE <p> Rs <span>{getExpense()}</span> /- </p></Paper>
            </Grid>
          </Grid>


        </div>
      </div>
    </div>


  );
}

export default IncomeExpense;