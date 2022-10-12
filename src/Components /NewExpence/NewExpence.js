import React, {useState} from "react";
import ExpenceForm from "./ExpenceForm"
import  './NewExpence.css';



const NewExpence = (props) => {
    const [isShow, setIsShown] = useState(false);
  
    const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString(),
      };
      props.onAddExpense(expenseData);
      setIsShown(false);
    };
  
    const startEditingHandler = () => {
        setIsShown(true);
    };
  
    const stopEditingHandler = () => {
        setIsShown(false);
    };
  
    return (
      <div className='new-expense'>
        {!isShow && (
          <button onClick={startEditingHandler}>Add New Expense</button>
        )}
        {isShow && (
          <ExpenceForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    );
  };
    

export default NewExpence;