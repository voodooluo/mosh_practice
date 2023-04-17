import React, {FormEvent, useRef, useState} from 'react';
import {FieldValue, useForm} from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import ExpenseList from "./ExpenseList";

interface Props {
    setExpenseList: any;
    expenseList: any;
}


const schema = z.object({
    category: z.string(),
    description: z.string().min(3),
    amount: z.string().min(1),
});

type FormData = z.infer<typeof schema>;

const Form = ({setExpenseList, expenseList}: Props) => {

    const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormData>({resolver: zodResolver(schema)});
    const onSubmit = (data: FieldValue<any>) => {
        console.log(data);
        setExpenseList([...expenseList, data])
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className={"mb-3"}>
                <label htmlFor={"category"} className={"form-label"}>Category</label>
                <select className="form-select" id={"category"}   {...register('category')} >

                    <option value="Groceries">Groceries</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
                {errors.category && (<p className={"text-danger"}>{errors.category.message}</p>)}
            </div>

            <div className={"mb-3"}>
                <label htmlFor={"description"} className={"form-label"}>Description</label>
                <input id={"description"} type="text" className="form-control" {...register('description')}/>
                {errors.description && (<p className={"text-danger"}>{errors.description.message}</p>)}
            </div>
            <div className={"mb-3"}>
                <label htmlFor={"amount"} className={"form-label"}>Amount</label>
                <input id={"amount"} type="number" className="form-control" {...register('amount')}/>
                {errors.amount && (<p className={"text-danger"}>{errors.amount.message}</p>)}
            </div>

            <button className="btn btn-primary" type="submit">Submit</button>

        </form>
    );
};

export default Form;