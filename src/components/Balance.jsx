import { useContext } from "react";
import { GlobalContext } from "./Transaction";

function Balance() {
    const { transactions } = useContext(GlobalContext)

    const Amount = transactions.map(transactions => transactions.amount);

    const TotalAmount = Amount.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return (
        <div className="py-2 px-5 shadow-md my-2 text-left bg-gradient-to-r from-purple-500 to-pink-500 border-none rounded-2xl">
            <h2 className="text-xl text-white my-1" >Your Balance</h2>
            <h1 className="font-bold text-white py-1 text-3xl">₹{TotalAmount}</h1>
        </div>
    );
}

export default Balance;