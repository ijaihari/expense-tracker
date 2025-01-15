import { createContext, useReducer } from "react";

const initialState = {
   transactions:[ /* {
        id:1,
        text: 'Food',
        amount: -300
    },
    {
        id:2,
        text: 'Salary',
        amount: 1000
    },
    {
        id:3,
        text: 'Camera',
        amount: -500
    } */]};

function AppReducer (state, action){
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state, transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state, transactions: [action.payload,...state.transactions]
            }
        default:
            return state
    }
    }
export const GlobalContext = createContext(initialState);

function GlobalState({ children }) {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:id
        })}
        
        function addTransaction(transaction){
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            })}
    return (
        <GlobalContext.Provider value={{transactions: state.transactions,deleteTransaction,addTransaction}}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalState;

