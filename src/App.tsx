import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import ListComponent from "./components/ListComponent";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import Like from "./components/Like";
import Game from "./components/Game";
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";


// const expenseList = [
//     {
//         id: 1,
//         description: 'milk',
//         amount: 5,
//         category: "Groceries"
//     }, {
//         id: 2,
//         description: 'gas',
//         amount: 35,
//         category: "Utilities"
//     }, {
//         id: 3,
//         description: 'movie',
//         amount: 45,
//         category: "Entertainment"
//     }, {
//         id: 4,
//         description: 'eggs',
//         amount: 55,
//         category: "Groceries"
//     },
//
// ]

function App() {

    const [expenseList, setExpenseList] = useState([
            {
                id: 1,
                description: 'milk',
                amount: 5,
                category: "Groceries"
            }, {
                id: 2,
                description: 'gas',
                amount: 35,
                category: "Utilities"
            }, {
                id: 3,
                description: 'movie',
                amount: 45,
                category: "Entertainment"
            }, {
                id: 4,
                description: 'eggs',
                amount: 55,
                category: "Groceries"
            },

        ]
    )
    let sum = 0;
    expenseList.map(e => sum += e.amount);

    return (
        <>
            <Form expenseList={expenseList} setExpenseList={setExpenseList}></Form>
            <ExpenseList expenseList={expenseList} setExpenseList={setExpenseList} total={sum}/>
        </>

    );
}

export default App;