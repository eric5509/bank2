'use client'
import { TiArrowSortedDown } from "react-icons/ti";

type Props = {
  value: string;
  label: string;
  error?: string;
  name: string;
  style?: string;
  select?: boolean
  data?: string[]
  onChange: (e: any) => void;
};

export default function Input({ value, label, name, error, select, data, onChange, style }: Props) {
  return <div>
    <div className="">
      <p className="text-white mb-1 text-[15px] ">{label}</p>
      <div className="h-12 relative">
        {!select ? <input type="text" name={name} value={value} onChange={onChange} className={`h-full text-[15px] ${style} pl-3 outline-none w-full border-2 ${error ? "border-red-500" : "border-gray-300"} duration-300`} />
          : <select name={name} onChange={onChange} className={`h-full cursor-pointer appearance-none pl-2 text-[15px] capitalize ${style} relative outline-none w-full border-2 ${error ? "border-red-500" : "border-gray-300"} duration-300`}>
            {data?.map((el, key) => (
              <option key={key} value={el} className="capitalize">{el}</option>
            ))}
          </select>
        }
        {select && <TiArrowSortedDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none cursor-pointer"/>}
      </div>
      <p className={`${error ? 'h-5 opacity-100' : 'h-0 opacity-0'} overflow-hidden duration-300 text-red-500`}>{error}</p>
    </div>
  </div>;
}
