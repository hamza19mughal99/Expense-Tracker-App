import React, { useContext, useState } from "react";
import TransContext from "../TransContext";
import '../child.css';


//Material-UI

//Text-Field
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '46%',
    },
  },
}));

const button = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: "96%"
  },
}));


//Text-Field

//Material-UI



function Transaction() {

  //Material-UI

  const classes = useStyles();
  const classes1 = button();

  //Material-UI

  let { addTransaction } = useContext(TransContext)
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState();


  const handleAddition = (event) => {
    event.preventDefault();
    addTransaction({
      amount: newAmount,
      desc: newDesc
    })

  }


  return (
    <div>
      <div className="transaction_details">
        <p>Transaction </p>
        <form className={classes.root} noValidate autoComplete="off"  onSubmit={handleAddition}>   
          <TextField type="text"  onChange={(ev) => setDesc(ev.target.value)}  id="standard-basic" label="Enter Description" variant="standard" />
          <TextField type="text"  onChange={(ev) => setAmount(ev.target.value)}  id="standard-basic" label="Enter Amount" variant="standard" />
          
          <Button type="submit" variant="contained" color="primary" className={classes1.button} style={{marginBottom: "10px"}} > Send </Button>
        </form>
      </div>

    </div>
  );
}

export default Transaction;