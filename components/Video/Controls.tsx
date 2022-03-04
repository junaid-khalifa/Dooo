import { useState } from "react"
import DropdownItem from "./DropdownItem"
import { FiPlus } from "react-icons/fi"

const Controls = () => {
    const [isList, setIsList] = useState(false)

    return (
        <div className="my-2">
            <div onClick={() => setIsList(!isList)} className="p-4 shadow rounded-full bg-gradient-to-b from-[#F7F7F7] to-[#D6D7D9] border-[1px] border-[#787C87] text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer">
                Show these controls
                {isList ? (
                    <div>
                        <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z" fill="#1F2937" />
                        </svg>
                    </div>
                ) : (
                    <div>
                        <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z" fill="#1F2937" />
                        </svg>
                    </div>
                )}
            </div>
            {isList && (
                <div className="absolute overflow-auto mt-2 p-4 bg-white shadow rounded">
                    <DropdownItem category={"Preset 1"} />
                    <DropdownItem category={"Preset 2"} />
                    <DropdownItem category={"Preset 3"} />
                </div>
            )}
            <style>
                {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
            </style>
        </div>
    )
}

export default Controls
