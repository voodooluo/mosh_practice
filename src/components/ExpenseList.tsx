import React, {ChangeEvent, FormEvent} from 'react';
import {useState} from "react";


interface expense {
    id: number;
    description: string;
    amount: number;
    category: string;

}

interface Props {
    expenseList: expense[];
    total: number;
    setExpenseList: any;
}

const ExpenseList = ({expenseList, setExpenseList, total}: Props) => {
    const onDelete = (event: any) => {
        expenseList.splice(event.currentTarget.value);
        setExpenseList([...expenseList]);

    }
    const [category, setCategory] = useState("1");
    const rows = expenseList.map((row, index) => {
        if (category === "1") {
            return (<>
                <tr>
                    <td>{row.description}</td>
                    <td>{row.amount}</td>
                    <td>{row.category}</td>
                    <button value={index} className="btn btn-outline-danger" onClick={onDelete}>Delete</button>
                </tr>
            </>)
        } else {
            if (row.category === category)
                return (<>
                    <tr>
                        <td>{row.description}</td>
                        <td>{row.amount}</td>
                        <td>{row.category}</td>
                        <button className="btn btn-outline-danger">Delete</button>
                    </tr>
                </>)

        }
    })

    return (
        <>
            <select className="form-select" aria-label="Default select example" value={category}
                    onChange={(event) => setCategory(event.currentTarget.value)}>
                <option value="1">All categories</option>
                <option value="Groceries">Groceries</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainment</option>
            </select>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Category</th>
                    <th scope="col"></th>
                </tr>


                </thead>
                <tbody>
                {rows}
                <tr>
                    <td><b>Total</b></td>
                    <td>{total}</td>
                    <td></td>
                    <td></td>
                </tr>

                </tbody>
            </table>


        </>
    );
};

export default ExpenseList;