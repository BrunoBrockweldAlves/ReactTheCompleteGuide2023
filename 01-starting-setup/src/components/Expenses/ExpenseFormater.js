import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function ExpenseFormater(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((item, id) => {
        return <ExpenseItem expense={item} key={id} />;
      })}
    </Card>
  );
}

export default ExpenseFormater;
