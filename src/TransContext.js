import React , {createContext, useReducer} from "react";
import TransReducer from "./TransReducer";



const initialTransaction = [  ]


const TransContext = createContext(initialTransaction);

export const TransactionProvider = ({children}) =>{

    
    let [state , dispatch] = useReducer(TransReducer , initialTransaction )

    
    function addTransaction(transObj){
        dispatch({
            type: "ADD",
            payload: {
                amount: transObj.amount , 
                desc: transObj.desc
            },
        })
    }
    
    return(
        <TransContext.Provider value={
            {
                transactions: state,
                addTransaction: addTransaction 
            }
        }>
            {children}

        </TransContext.Provider>
    )



}


export default TransContext;
