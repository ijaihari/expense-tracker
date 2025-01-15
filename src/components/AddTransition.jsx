import { useContext, useState } from "react";
import { GlobalContext } from "./Transaction";

function AddTransition() {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(null);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }
    return (
        <div>

            <h2 className="font-bold text-xl text-white">Add New Transaction</h2> <hr  className="border-slate-600 my-1" />
            <form className="my-2" onSubmit={onSubmit}>
                <div className="my-2">
                    <label className="font-semibold text-white" for="category">Category</label> <br />
                    <input className=" text-white bg-transparent w-full my-1 py-1 px-2 rounded-lg border border-slate-600 focus:outline-none " value={text} onChange={(event) => setText(event.target.value)} id="category" type="text" placeholder="Enter category" />
                                
                    <label className="font-semibold text-white" for="amount">Amount</label>
                    <input className=" text-white bg-transparent w-full my-1 py-1 px-2 rounded-lg border border-slate-600 focus:outline-none " value={amount} onChange={(event) => setAmount(event.target.value)} id="amount" type="text" placeholder="Enter amount -> ( Income ) or ( -Expense) " />
                </div>
                <button type="submit" className=" font-bold my-1 rounded-lg w-full bg-white text-black  py-1 px-2">Add Transaction</button>
            </form>
        </div>
    );
}

export default AddTransition;