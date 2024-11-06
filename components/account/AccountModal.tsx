'use client'
import { status } from "@/lib/data";
import { updateDetails } from "@/redux/slices/user";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { Calendar, Edit, Mail, Pen, Pencil, PhoneCall } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { BiCheck } from "react-icons/bi";
import { TbSortDescending } from "react-icons/tb";

type Props = {
}

export default function AccountModal() {
    const modal = useAppSelector(store => store.modal.value)
    const opened = modal === 'account'
    const [statusOpened, setStatusOpened] = useState(false)
    const dispatch = useAppDispatch()
    const userDetails = useAppSelector(store => store.userDetails.value)

    return (
        <div className={`grid ${opened ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} origin-top-right w-[750px] duration-500 delay-100`}>
            <div className={`border-2 text-white  w-full duration-500 bg-black/40 p-5 rounded-2xl shadow-lg shadow-black/20`}>
                <div className="flex items-center gap-4">
                    <div className="h-24 w-24 shrink-0 shadow-md shadow-black/20 rounded-full ">
                        <img src="https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=2048,f=jpeg,q=85/posts/images/684058496613784590/a7a64855-8400-4d0b-9856-0a623694deb4.jpg" className="h-full w-full rounded-full object-cover border-2 " alt="" />
                    </div>
                    <div className="w-full">
                        <div className="flex items-center justify-between">
                            <Link href={'/accounts/5'} className="text-2xl duration-300 hover:text-blue-500 hover:underline font-semibold">{userDetails.fullname}</Link>
                            <p className="font-semibold text-lg">${userDetails.currentBalance}</p>
                        </div>
                        <div className="flex justify-between mt-4 font-medium w-full">
                            <p><PhoneCall size={15} className="align-middle mr-1.5 inline" />{userDetails.phone}</p>
                            <p><Mail size={16} className="align-middle inline mr-1.5" />{userDetails.email}</p>
                            <p><Calendar size={16} className="align-middle mr-1.5 mb-0.5 inline" />{userDetails.dob}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="grid text-[15px] grid-cols-3 gap-5">
                        <div className="">
                            <p className="text-gray-300">COT</p>
                            <p className="font-semibold">{userDetails.cot}</p>
                        </div>
                        <div className="">
                            <p className="text-gray-300">IMF Number</p>
                            <p className="font-semibold">{userDetails.imf}</p>
                        </div>
                        <div className="">
                            <p className="text-gray-300">Account Type</p>
                            <p className="font-semibold capitalize">{userDetails.accountType}</p>
                        </div>
                        <div className="">
                            <p className="text-gray-300">Account Number</p>
                            <p className="font-semibold">{userDetails.accountNumber}</p>
                        </div>
                        <div className="">
                            <p className="text-gray-300">Residential Address</p>
                            <p className="font-semibold">{userDetails.street} {userDetails.city} {userDetails.state} {userDetails.postalCode}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-5">
                    <div onClick={() => setStatusOpened(!statusOpened)} className={`flex items-center relative cursor-pointer duration-500 gap-2 text-sm ${userDetails.status === "Pending" && "bg-amber-500"} ${userDetails.status === "Successful" && "bg-green-500"} ${userDetails.status === "Failed" && "bg-red-500"} rounded-full w-32 justify-center py-3`}>
                        <p>{status}</p>
                        <TbSortDescending />
                        <div className={`overflow-hidden text-sm duration-500 w-fit border-2 border-white flex bg-[darkblue] rounded-md shadow-md absolute top-14 ${statusOpened ? "opacity-100 visible left-0 " : "-left-10 invisible opacity-0"}`}

                        >
                            {status.map((value, key) => (
                                <p key={key} onClick={() => dispatch(updateDetails({status: value.toLowerCase()}))} className={`p-3 duration-500 ${key === 0 && "hover:bg-amber-500"} ${key === 1 && "hover:bg-green-500"} ${key === 2 && "hover:bg-red-500"}`}>{value}</p>
                            ))}
                        </div>
                    </div>
                    <button className="h-12 w-12 rounded-full grid duration-300 hover:scale-105 active:scale-95 group place-content-center shadow-md shadow-black/30 text-xs uppercase bg-gradient-to-tr from-[#00008b] to-black border-2 border-white text-white font-semibold "><Pencil size={18} className="group-hover:rotate-[360deg] duration-500" /> </button>
                </div>
            </div>
        </div>
    )
}
