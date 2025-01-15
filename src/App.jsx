import AddTransition from "./components/AddTransition";
import Balance from "./components/Balance";
import Header from "./components/Header";
import History from "./components/History";
import IncomeExpense from "./components/IncomeExpense";

export default function App() {
  return (
    <div className="flex  justify-center m-10 h-full">
      <div className=" w-[340px]  bg-slate-800 rounded-[1.5rem] p-4">
        <Header />
        <Balance />
        <IncomeExpense />
        <History />
        <AddTransition />
      </div>
    </div>

  )
}