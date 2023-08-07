import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState("");
  const [amount, setAmount] = React.useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredDate: "",
  //     enteredAmount: "",
  //   });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // setUserInput((previousState) => {
    //   return { ...previousState, enteredTitle: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2000-01-01"
            max="2030-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <buttom type="submit">Add Expense</buttom>
      </div>
    </form>
  );
};

export default ExpenseForm;
