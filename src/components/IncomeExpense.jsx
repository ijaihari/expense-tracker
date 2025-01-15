import { useContext } from "react";
import { GlobalContext } from "./Transaction";

function IncomeExpense() {
    const { transactions } = useContext(GlobalContext);
    const Amount = transactions.map(transactions => transactions.amount);
    const Income = Amount.filter(item => item > 0).reduce(((acc, current)=> acc +current),0)
    const Expenses = Amount.filter(item => item <0).reduce(((acc, current)=> acc + current),0)
    
    return (
        <div className="flex justify-center  gap-2">
            <div className="w-[170px] text-white rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 py-2 text-center">
                <h2>Income</h2>
                <h1 className="font-bold text-xl">+₹{Income}</h1>
            </div>
            <div className="w-[170px] text-white rounded-2xl bg-gradient-to-r from-red-500 to-yellow-500 py-2 text-center">
                <h2>Expense</h2>
                <h1 className="font-bold text-xl">-₹{Math.abs(Expenses)}</h1>
            </div>
        </div>
    );
}

export default IncomeExpense;