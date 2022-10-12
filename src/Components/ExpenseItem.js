import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate.js';

function ExpenseItem(props) {

  const [title,updatedtitle] = useState(props.title);
 
  const ChangeTitle = () => {
    updatedtitle('updated');
    console.log(title);
  };

  return (
 
    <div className="expense-item ">
     <ExpenseDate date = {props.date}/>
      <div className="expense-item__description">
        <h2> {title}</h2>
      </div>
      <div className="expense-item__price"> ${props.amount}</div>
      <button onClick = {ChangeTitle}> Click this </button>
    </div>
    
  );
}

export default ExpenseItem;
