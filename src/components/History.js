import React, { useContext, useState } from "react";
import TransContext from "../TransContext";
import '../child.css';


//MATERIAL-UI

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    fontWeight: "bolder",

  },
}));

//MATERIAL-UI




function History() {

  const classesli = useStyles();

  let { transactions } = useContext(TransContext)

  return (
    <div>
      <div className="history_details">
        <p>History</p> 
        <ul className="history_ul">
          {
            transactions.map((transObj, ind) => {
              return (
                  
                   
                  
                  <div className={classesli.root}>
                  <Grid container  spacing={1}>
                    <Grid item xs={10}>
                      <Paper className={classesli.paper}> <li key={ind} >  {transObj.desc} <span> Rs. {transObj.amount} /- </span> </li>  </Paper>
                    </Grid>
                    </Grid>
                    </div>

              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default History;