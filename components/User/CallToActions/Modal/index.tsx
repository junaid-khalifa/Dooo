import { ModalProps } from "../../../../types"
import Dropdown from "../../Dropdown/Dropdown"
import Image from 'next/image'
import Input from "./Input"
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi"

const Modal = (props: ModalProps) => {

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        //---
    }

    return (
        <div className={`${props.modalStyle} py-12 bg-[#383838] opacity-95 transition duration-150 ease-in-out z-10 absolute left-0 right-0 top-0 bottom-0`} id="modal">
            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-2xl">
                <div className="relative py-8 px-5 md:px-12 bg-white shadow-md rounded border border-gray-400">
                    <div className="mt-4">
                        <Dropdown name={"Select your goal   Promote Link / Grow Email List "} />
                    </div>
                    <div className="flex justify-between">
                        <div className="w-[120px] h-[84px] relative"><Image src='/space.png' className="absolute object-fill" alt="space" layout="fill" /></div>
                        <div className="w-[120px] h-[84px] relative"><Image src='/rocket.png' className="absolute object-fill" alt="rocket" layout="fill" /></div>
                        <div className="w-[120px] h-[84px] relative"><Image src='/rocket.png' className="absolute object-fill" alt="rocket" layout="fill" /></div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <Input name={""} placeholder={"Background Color"} type={"text"} onChange={handleChange} id={""} value={""} />
                        <button className="bg-[#616A71] m-auto col-span-1 items-center w-full text-sm text-white py-2.5 rounded px-2"> or upload background Image</button>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="col-span-2">
                            <Input name={""} placeholder={"Enter your headline here"} type={"text"} onChange={handleChange} id={""} value={""} />
                        </div>
                        <div className="col-span-1">
                            <Input name={""} placeholder={"FFFFFF"} type={"text"} onChange={handleChange} id={""} value={""} />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="col-span-2">
                            <Input name={""} placeholder={"Enter your text here"} type={"text"} onChange={handleChange} id={""} value={""} />
                        </div>
                        <div className="col-span-1">
                            <Input name={""} placeholder={"FFFFFF"} type={"text"} onChange={handleChange} id={""} value={""} />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="col-span-2">
                            <Input name={""} placeholder={"Enter your button text here"} type={"text"} onChange={handleChange} id={""} value={""} />
                        </div>
                        <div className="col-span-1">
                            <Input name={""} placeholder={"FFFFFF"} type={"text"} onChange={handleChange} id={""} value={""} />
                        </div>
                    </div>
                    <div>
                        <Input name={""} placeholder={"Display popup after ___seconds"} type={"text"} onChange={handleChange} id={""} value={""} />
                    </div>
                    <Dropdown name={"Show close button"} />
                    <div>
                        <Input name={""} placeholder={"Enter button URL here"} type={"text"} onChange={handleChange} id={""} value={""} />
                    </div>
                    <Dropdown name={"Choose email autoresponder connection"} />
                    <div>
                        <Input name={""} placeholder={"Enter name to save this CTA"} type={"text"} onChange={handleChange} id={""} value={""} />
                    </div>
                    <div className="flex justify-end">
                        <button className="py-2 px-8 bg-[#EDF5FF] font-[700] rounded text-xl text-[#3444D5]" onClick={props.handleModal}>Save</button>
                    </div>
                    <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onClick={props.handleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                    </div>
                    <div className="flex absolute top-32 right-0 items-center gap-0.5">
                        <HiOutlineArrowSmLeft className="cursor-pointer" size={20} />
                        <HiOutlineArrowSmRight className="cursor-pointer" size={20} />
                    </div>
                    <div className="flex absolute top-[27rem] left-0 items-center gap-0.5">
                        <AiOutlineMinus className="cursor-pointer" size={20} />
                        <AiOutlinePlus className="cursor-pointer" size={20} />
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Modal
