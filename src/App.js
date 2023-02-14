import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React from "react";

const App = () => {
  const expenses = [
    { title: "Toilet Paper", amount: "94.12", date: new Date(2020, 7, 14) },
    { title: "New TV", amount: "799.49", date: new Date(2021, 2, 12) },
    { title: "Car Insurance", amount: "294.67", date: new Date(2021, 2, 28) },
    { title: "New Desk (Wooden)", amount: "450", date: new Date(2021, 5, 12) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expenses);
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
};

export default App;
