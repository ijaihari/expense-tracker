import { useContext, useState } from "react";
import { GlobalContext } from "./Transaction";

function History() {
    const { transactions, deleteTransaction } = useContext(GlobalContext);
    
    return (
        <div className="my-4">
            <h2 className="font-bold text-xl text-white">History</h2>
            <hr className="border-slate-600 my-1"/>
            <ul>
                { transactions?.length >0 ? 
                    (transactions.map(transaction =>
                    (<li style={{ borderLeftColor: transaction.amount > 0 ? 'teal' : 'red' }} key={transaction.id} className="flex justify-between rounded-md my-2 px-2 py-2  border-l-4 bg-white ">
                        <span className="font-semibold">{transaction.text} </span>
                        <span className="text-right ">{transaction.amount < 0 ? '-' : '+'}₹{Math.abs(transaction.amount)}
                            <button onClick={() => deleteTransaction(transaction.id)} className="ml-3 rounded-md px-2 bg-black font-bold text-white">Del</button></span>
                    </li>))) : <h1 className="text-center my-3 text-slate-300">No Transaction History</h1>
                }
            </ul>
        </div>
    );
}

export default History;