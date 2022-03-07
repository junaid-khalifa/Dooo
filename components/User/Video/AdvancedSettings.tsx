import { useState } from "react"
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md"
import DropdownItem from "./DropdownItem"

const AdvancedSettings = () => {
    const [isList, setIsList] = useState(false)

    return (
        <div>
            <div onClick={() => setIsList(!isList)} className="p-3 shadow rounded-full bg-gradient-to-b from-[#F7F7F7] to-[#D6D7D9] border-[1px] border-[#787C87] text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer">
                Advanced Settings
                {isList ? (
                    <div>
                        <MdKeyboardArrowDown size={20} />
                    </div>
                ) : (
                    <div>
                        <MdKeyboardArrowRight size={20} />
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

export default AdvancedSettings
