
import React, { useState } from "react";
import './ExpenceForm.css';

const ExpenceForm = (props) => {


// **************************** CALLING STATES ONE BY ONE *************************************

    const [enterTitle,setEnterTitle] = useState('');
    const [enterAmount,setEnterAmount] = useState('');
    const [enterDate,setEnterDate] = useState('');
    

const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  }

  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
  }


//  *************************** CALLING STATES all together in an OBJECT *************************

// const [inputVal, setInputVal] = useState({

//     enterTitle: '',
//     enterAmount: '',
//     enterDate: '',
// });

// const titleChangeHandler = (event) => {
// setInputVal({
//     ...inputVal,
//     enterTitle:event.target.value,
// });
// };
//******************** CALLING FOR SET VALUE CAN BE DONE LIKE THIS *********************** */\\

// const titleChangeHandler = (event) => {
//     setInputVal((prevState) => {
//         return {...prevState, enterTitle:event.target.value};
//     });
// };

// // ***********************************************************************************************

// const amountChangeHandler = (event) => {
//     setInputVal({
//         ...inputVal,
//         enterAmount:event.target.value,
//     });
// };

// const dateChangeHandler = (event) => {
//     setInputVal({
//         ...inputVal,
//         enterDate:event.target.value,
//     });
// };

const submitHandler = (event) => {
    event.preventDefault();

    const formEnteredData = {
        title : enterTitle,
        amount : enterAmount,
        date : new Date(enterDate)
    };

    props.onAddExpence(formEnteredData);
    setEnterTitle('');
    setEnterAmount('');
    setEnterDate('');
};

    return (
    <form onSubmit ={submitHandler}> 
        <div className="new-expense__controls ">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value ={enterTitle} onChange ={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>amount</label>
                <input type='number' value = {enterAmount} onChange = {amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" value = {enterDate} onChange = {dateChangeHandler}/>
            </div>
            <div className="new-expence__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expences</button>
            </div>
        </div>
    </form>
    );

}

export default ExpenceForm;