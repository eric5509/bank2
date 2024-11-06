import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import Title from "@/components/shared/Title";
import { names, status, transactionType } from "@/lib/data";
import { getFormattedDate } from "@/lib/helper";

export default function Page() {
    const date = getFormattedDate()
    return (
        <div className="h-full flex flex-col">
            <div className="px-3">
                <Title title="Transfer Funds" />
            </div>
            <div className="flex flex-1 flex-col justify-between">
                <div className="">
                    <div className="grid grid-cols-3 p-4 pt-0 gap-4">
                        <Input label="Sender Account Name" style="rounded-lg" />
                        <Input label="Sender Account Number" style="rounded-lg" />
                        <Input label="Sender Bank Name" style="rounded-lg" />
                        <Input label="Recipient Bank Name" style="rounded-lg" />
                        <Input label="Recipient Account Number " style="rounded-lg" />
                        <Input label="Recipient Account Name" style="rounded-lg" />
                    </div>
                    <div className="grid grid-cols-4 p-4 pt-0 gap-4">
                        <Input label="Amount" style="rounded-lg" />
                        <Input label="Description" style="rounded-lg" />
                        <Input label="Date" value={`${date}`} style="rounded-lg" />
                        <Input label="Status" select={true} data={status} style="rounded-lg" />
                    </div>
                </div>
                <div className="p-5 flex justify-end">
                    <Button title="Submit" style="text-white w-fit bg-emerald-500" />
                </div>
            </div>
        </div>
    )
}
