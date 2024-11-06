'use client'
import { useState } from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { status, transactionType } from "@/lib/data";

export default function TransactionDetail() {


  const [transaction, setTransaction] = useState({
    date: "",
    description: "",
    category: "",
    type: "",
    amount: "",
    status: "",
  })
  const onChange = (e: any) => {
    const { name, value } = e.target
    setTransaction({ ...transaction, [name]: value })
  }


  const submit = () => {

  }

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="">
        <div className="flex mb-8 justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="h-24 w-24 rounded-full border-2"></div>
            <p className="text-xl font-bold text-white">Ann Mayers Paige</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-7">
          <Input value={transaction.description} name="description" label="Description" style="rounded-lg" onChange={onChange} />
          <Input value={transaction.date} name="date" label="Date" style="rounded-lg" onChange={onChange} />
          <Input value={transaction.category} name="category" label="Category" style="rounded-lg" onChange={onChange} />
          <Input value={transaction.amount} name="amount" label="Amount" style="rounded-lg" onChange={onChange} />
          <Input value={transaction.type} select={true} data={transactionType} name="type" label="Transaction Type" style="rounded-lg" onChange={onChange} />
          <Input value={transaction.status} select={true} data={status} name="status" label="Status" style="rounded-lg" onChange={onChange} />
        </div>
      </div>
      <div className="p-5 flex justify-end">
        <Button title="Submit" style="text-white w-fit bg-emerald-500" />
      </div>
    </div>
  );
}
