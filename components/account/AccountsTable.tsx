'use client'
import { motion } from "framer-motion";
import { useEffect } from "react";
import { tableData } from './data'
import { TAccount } from "./type";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { setUserDetails } from "@/redux/slices/user";
import { openBackdrop } from "@/redux/slices/backdrop";
import { openModal } from "@/redux/slices/modal";
import { loadAccount, loadAllAccounts } from "@/redux/slices/account";
type Props = {
    results: TAccount[]
}

export default function AccountsTable({ results }: Props) {
    const dispatch = useAppDispatch()
    const accounts = useAppSelector(store => store.account.allAccounts)
    useEffect(() => {
        dispatch(loadAllAccounts(results))
    }, [])
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
                    {accounts?.map((account, key) => (
                        <motion.tr
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5, delay: key * 0.05 }}
                            onClick={() => {
                                dispatch(setUserDetails(account))
                                dispatch(openBackdrop())
                                dispatch(openModal('account'))
                                dispatch(loadAccount(account))
                            }}
                            className={`from-transparent to-black ${key !== accounts.length - 1 && 'border-b-2 border-gray-900'} bg-gradient-to-br hover:from-[#15154a] hover:to-black hover:via-[#0101b4] duration-500 cursor-pointer`} key={key}>
                            <td className="px-4 py-3 flex items-center gap-2">
                                <span className="h-12 w-12 shrink-0 inline-block align-middle rounded-full border-2"></span>
                                <span className="inline-block font-semibold">{account.firstName} {account.middleName} {account.lastName}</span>
                            </td>
                            <td className="px-4 py-3">{account.email}</td>
                            <td className="px-4 py-3">{account.phone}</td>
                            <td className="px-4 py-3">{account.accountNumber}</td>
                            <td className="px-4 py-3">{account.currentBalance}</td>
                            <td className={`px-4 capitalize py-3 ${account.status === 'pending' && 'text-amber-500'} ${account.status === 'successful' && 'text-green-500'}  ${account.status === 'failed' && 'text-red-500'}`}>{account.status}</td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
