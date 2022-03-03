import Input from "./Input"
import Image from 'next/image'
import { BsPlay } from 'react-icons/bs'
import Category from "./Categories"
import Playlist from "./PlayList"
import { FiPlus } from "react-icons/fi"

const Video = () => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        //...
    }

    return (
        <div className="">
            <div className="">
                <div className="relative left-[576px] top-10 w-[35%] bg-gray-200 rounded-full">
                    <div className=" bg-[#000000] text-xs font-medium text-white text-center p-0.5 leading-none rounded-full">Uploading 45%...30 seconds left!</div>
                </div>
                <h1 className="absolute left-[870px] text-xs top-14">7 out of 10 videos processed</h1>
                <div className="">
                    <button className="relative top-0 left-[1124px] rounded-full border-[1px] border-[#787C87] text-[#1E1E1F] py-2 px-2 my-3 bg-[#F7F7F7]">Cancel</button>
                </div>
            </div>

            <div className="grid grid-cols-2 divide-x-2">
                <div className="grid grid-flow-row mx-auto">
                    <div className="">
                        <Input name={""} placeholder={"Enter video title here"} type={"text"} onChange={handleChange} id={""} value={""} />
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="w-[120px] h-[66px] border-[1px] border-dashed m-auto">
                            <p className="text-center mt-2"><Image src="/thumbnail-vector.png" height='18px' width='18px' alt='thumbnail' /></p>
                            <p className="text-xs text-center">Upload thumbnail</p>
                        </div>
                        <div className="w-[120px] h-[66px] relative"><Image src='/space.png' className="absolute object-fill" alt="space" layout="fill" /></div>
                        <div className="w-[120px] h-[66px] relative"><Image src='/rocket.png' className="absolute object-fill" alt="rocket" layout="fill" /></div>
                        <div className="w-[120px] h-[66px] border-[1px] border-dashed">
                            <p className="text-center mt-2"><Image className="items-center" src="/thumbnail-vector.png" height='18px' width='18px' alt='thumbnail' /></p>
                            <p className="text-xs text-center">Use Current Frame</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="w-auto h-[66px] border-[1px] border-dashed m-auto">
                            <p className="text-xs text-center"><BsPlay /></p>
                        </div>
                        <div className="w-auto h-[66px] border-[1px] border-dashed m-auto">
                            <p className="text-xs text-center"><BsPlay /></p>
                        </div>
                        <div className="w-auto h-[66px] border-[1px] border-dashed m-auto">
                            <p className="text-xs text-center"><BsPlay /></p>
                        </div>
                        <div className="w-auto h-[66px] border-[1px] border-dashed m-auto">
                            <p className="text-xs text-center"><BsPlay /></p>
                        </div>
                        <div className="w-auto h-[66px] border-[1px] border-dashed mx-auto">
                            <p className="text-xs text-center"><BsPlay /></p>
                        </div>
                    </div>
                    <div>
                        <Input name={""} placeholder={"Enter password to protect the video()"} type={"password"} onChange={handleChange} id={""} value={""} />
                    </div>
                    <div className="flex flex-row gap-2">
                        <Category />
                        <Playlist />
                    </div>
                    <div className="grid grid-flow-row gap-2 mt-4">
                        <div className="flex justify-between">
                            <h1 className="flex items-center"><FiPlus className="mx-1" size={20} />Add Card/Annotation</h1>
                            <label htmlFor="toggle-example" className="flex items-center mb-4 cursor-pointer">
                                <input type="checkbox" id="toggle-example" className="sr-only" checked />
                                <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
                            </label>
                        </div>
                        <div className="flex justify-between">
                            <h1 className="flex items-center"><FiPlus className="mx-1" size={20} />Add Caption</h1>
                            <label htmlFor="toggle-example" className="flex items-center mb-4 cursor-pointer">
                                <input type="checkbox" id="toggle-example" className="sr-only" />
                                <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
                            </label>
                        </div>
                        <div className="flex justify-between">
                            <h1 className="flex items-center"><FiPlus className="mx-1" size={20} />Add a chapter/moment</h1>
                            <label htmlFor="toggle-example" className="flex items-center mb-4 cursor-pointer">
                                <input type="checkbox" id="toggle-example" className="sr-only" />
                                <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
                            </label>
                        </div>
                        <div className="flex justify-between">
                            <h1 className="flex items-center"><FiPlus className="mx-1" size={20} />Add Call-to-action</h1>
                            <label htmlFor="toggle-example" className="flex items-center mb-4 cursor-pointer">
                                <input type="checkbox" id="toggle-example" className="sr-only" />
                                <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="m-auto">
                    <video height='270px' width='482px' src="" controls></video>
                </div>
            </div>

        </div>
    )
}

export default Video