'use client'
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { tableData } from './data'
type Props = {
    setOpened: Dispatch<SetStateAction<boolean>>
    setData: any
}

export default function AccountsTable({ setData, setOpened }: Props) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] rounded-md bg-black/20 text-white text-sm">
                <thead className="">
                    <tr className=" border-b-2">
                        <th className=" px-4 py-5 font-medium text-start flex items-center gap-3 text-base">
                            Fullname
                        </th>
                        <th className="px-4 py-5 font-medium text-start ">Email</th>
                        <th className="px-4 py-5 font-medium text-start ">Phone</th>
                        <th className="px-4 py-5 font-medium text-start ">Account Number</th>
                        <th className="px-4 py-5 font-medium text-start ">Balance</th>
                        <th className="px-4 py-5 font-medium text-start ">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, key) => (
                        <motion.tr
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5, delay: key * 0.05 }}
                            onClick={() => {
                                setData(row)
                                setOpened(true)
                            }}
                            className={`from-transparent to-black ${key !== tableData.length - 1 && 'border-b-2 border-gray-900'} bg-gradient-to-br hover:from-[#15154a] hover:to-black hover:via-[#0101b4] duration-500 cursor-pointer`} key={key}>
                            <td className="px-4 py-3 flex items-center gap-2">
                                <span className="h-12 w-12 shrink-0 inline-block align-middle rounded-full border-2"></span>
                                <span className="inline-block font-semibold">{row.fullName}</span>
                            </td>
                            <td className="px-4 py-3">{row.email}</td>
                            <td className="px-4 py-3">{row.phoneNumber}</td>
                            <td className="px-4 py-3">{row.accountNumber}</td>
                            <td className="px-4 py-3">{row.balance}</td>
                            <td className={`px-4 py-3 ${row.status === 'Pending' && 'text-amber-500'} ${row.status === 'Verified' && 'text-green-500'}  ${row.status === 'Failed' && 'text-red-500'}`}>{row.status}</td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
