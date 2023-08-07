import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expense.title);

  const click = () => {
    setTitle("Title updated! Current time:" + new Date().toLocaleDateString());
    console.log(new Date().toISOString());
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2> {title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
      <button onClick={click}>Do something</button>
    </Card>
  );
}

export default ExpenseItem;
