import { useState } from "react"
import { MdDeleteForever } from 'react-icons/md'
import { FiPlus } from "react-icons/fi"
import { AiOutlineMinus } from 'react-icons/ai'
import DropdownItem from "../DropdownItem"

const Addcard = () => {
    const [isList, setIsList] = useState(false);

    return (
        <div>
            <div onClick={() => setIsList(!isList)} className="w-full py-2 rounded bg-white border-[#787C87] text-sm font-medium leading-none text-black flex items-center cursor-pointer">
                {isList ? (
                    <div>
                        <AiOutlineMinus size={25} />
                    </div>
                ) : (
                    <div>
                        <FiPlus size={25} />
                    </div>
                )}
                Add Card/Annotation
            </div>
            {isList && (
                <div className="w-64 h-72 absolute overflow-auto mt-2 p-4 bg-white shadow rounded">
                    <DropdownItem category={"Category 1"} />
                    <DropdownItem category={"Category 2"} />
                    <DropdownItem category={"Category 3"} />
                    <DropdownItem category={"Category 4"} />
                    <DropdownItem category={"Category 5"} />
                    <DropdownItem category={"Category 6"} />
                    <div>
                        <button className="flex justify-start text-xs bg-gray rounded-md mt-6 font-medium py-2 w-full leading-3 text-dark items-center"><FiPlus className="mx-2" size={20} />Create new category</button>
                    </div>
                </div>
            )}
            <style>
                {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
            </style>

        </div>
    );
};
export default Addcard
