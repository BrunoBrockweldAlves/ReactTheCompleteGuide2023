import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "./Card";

function ExpenseFormater(props){
    return(
        <Card className='expenses'>{props.expenses.map(item => {
            return(
                <ExpenseItem expense={item}/>
            )
        })}</Card>
    )
}

export default ExpenseFormater;