import Input from "./Input"
import Image from 'next/image'
import { BsPlay } from 'react-icons/bs'
import Category from "./Categories"
import Playlist from "./PlayList"
import { FiPlus, FiUpload } from "react-icons/fi"
import { MdOutlineContentCopy } from 'react-icons/md'
import Presets from "./Presets"
import AdvancedSettings from "./AdvancedSettings"
import Controls from "./Controls"
import PutLogo from "./PutLogo"
import LogoPosition from "./LogoPosition"
import { RiDeleteBin6Line } from 'react-icons/ri'
import Addcard from "./Addcard"
import AddCaption from "./Addcaption"
import Addchapter from "./Addchapter"
import AddCallToAction from "./AddCallToAction"

const Video = () => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        //...
    }

    return (
        <div className="mt-8">
            {/* Header --> Loader and camcel button */}
            <div className="grid justify-items-stretch">
                <div className="flex items-center justify-around">
                    <div className="w-[35%] rounded-full justify-self-center items-center">
                        <div className=" bg-[#000000] text-xs font-medium text-white text-center p-2 leading-none rounded-full">Uploading 45%...30 seconds left!</div>

                    </div>

                    <div className="justify-self-start">
                        <button className="rounded-full border-[1px] border-[#787C87] text-[#1E1E1F] py-1 px-6 my-3 bg-gradient-to-b from-[#F7F7F7] to-[#D6D7D9]">Cancel</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-cols-2 mt-4">
                {/* COLUMN 1 --> Left */}
                <div className="mx-auto">
                    <div className="">
                        <Input name={""} placeholder={"Enter video title here"} type={"text"} onChange={handleChange} id={""} value={""} />
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="w-[120px] h-[66px] border-[1px] border-dashed mx-auto">
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
                        <div className="w-auto h-[66px] border-[1px] border-dashed mx-auto">
                            <p className="text-xs text-center"><BsPlay /></p>
                        </div>
                        <div className="w-auto h-[66px] border-[1px] border-dashed mx-auto">
                            <p className="text-xs text-center"><BsPlay /></p>
                        </div>
                        <div className="w-auto h-[66px] border-[1px] border-dashed mx-auto">
                            <p className="text-xs text-center"><BsPlay /></p>
                        </div>
                        <div className="w-auto h-[66px] border-[1px] border-dashed mx-auto">
                            <p className="text-xs text-center"><BsPlay /></p>
                        </div>
                        <div className="w-auto h-[66px] border-[1px] border-dashed mx-auto">
                            <p className="text-xs text-center"><BsPlay /></p>
                        </div>
                    </div>
                    <div>
                        <Input name={""} placeholder={"Enter password to protect the video(s) (Optional)"} type={"password"} onChange={handleChange} id={""} value={""} />
                    </div>
                    <div className="flex flex-row gap-2">
                        <Category />
                        <Playlist />
                    </div>
                    <div className="grid grid-flow-row gap-2 mt-4">
                        <div className="flex justify-between">
                            <Addcard />
                            <label htmlFor="toggle-example" className="flex items-center mb-4 cursor-pointer">
                                <input type="checkbox" id="toggle-example" className="sr-only" checked />
                                <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
                            </label>
                        </div>
                        <div className="flex justify-between">
                            <AddCaption />
                            <label htmlFor="toggle-example" className="flex items-center mb-4 cursor-pointer">
                                <input type="checkbox" id="toggle-example" className="sr-only" />
                                <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
                            </label>
                        </div>
                        <div className="flex justify-between">
                            <Addchapter />
                            <label htmlFor="toggle-example" className="flex items-center mb-4 cursor-pointer">
                                <input type="checkbox" id="toggle-example" className="default:ring-2 sr-only" />
                                <div className="w-11 h-6 bg-gray-200 rounded-full border-[1px] border-gray-200 toggle-bg"></div>
                            </label>
                        </div>
                        <div className="flex justify-between">
                            <AddCallToAction />
                            <label htmlFor="toggle-example" className="flex items-center mb-4 cursor-pointer">
                                <input type="checkbox" id="toggle-example" className="sr-only appearance-none checked:bg-blue-500" />
                                <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg"></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="border-2 border-[#1E1E1F]"><hr /></div>
                {/* COLUMN 2 ---> Right */}
                <div className="mx-auto">
                    <div className="bg-[#F8F8F8]">
                        <video height='270px' width='482px' src="" controls></video>
                        <div className="flex justify-between pt-2 px-2">
                            <h1>Video link</h1>
                            <MdOutlineContentCopy />
                        </div>
                        <a href="" className="px-2 text-sky-500 underline">
                            https://dooo/md/watch
                        </a>
                        <div className="p-2">
                            <p>Filename</p>
                            <h1 className="text-black font-bold">Update.mp4</h1>
                        </div>
                    </div>
                    <div className="m-auto w-full">
                        <Presets />
                    </div>
                    <div className="flex flex-col-2 gap-2 mt-2">
                        <div>
                            <h1 className="text-dark font-bold">Control bar color</h1>
                            <div className="flex relative ">
                                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-[#2b2a2a] text-gray-500 text-sm">
                                </span>
                                <input type="text" id="color-with-icon" className="rounded-r-lg flex-1  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400" name="text" placeholder="#2b2a2a" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-dark font-bold">Play button color</h1>
                            <div className="flex">
                                <span className="items-center px-3 bg-[#6d6a6a] border-gray-300 text-gray-500 text-sm">
                                </span>
                                <input type="text" id="color-with-icon" className="flex-1 border-0 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base" name="text" placeholder="#6d6a6a" />
                            </div>
                        </div>
                    </div>
                    <div className="my-2">
                        <Controls />
                        <AdvancedSettings />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="text-[#1E1E1F] border-transparent border-gray-300 w-full px-4 bg-[#F5F8FA] placeholder-gray-400 flex items-center shadow-sm text-base focus:border-transparent py-2 my-3">
                            <FiUpload size={20} className="mr-2" />
                            During muted autoplay show this image on top of video
                        </button>
                        <RiDeleteBin6Line size={20} className="mx-1" />
                    </div>
                    <div className="flex flex-col-2 gap-2 justify-between">
                        <PutLogo />
                        <LogoPosition />
                    </div>
                    <div className="flex justify-between gap-2 mt-2 mb-4">

                        <input
                            type="text"
                            id="settings-preset"
                            className="rounded-lg border-transparent border-gray-300 w-full px-4 bg-[#F5F8FA] text-gray-700 placeholder-gray-400 shadow-sm text-base focus:border-transparent"
                            placeholder="Enter name to save these settings as a new preset"
                        />
                        <button className="rounded-md font-bold border-[1px] border-[#787C87] text-[#4954CB] py-2 px-2 bg-[#F7F7F7]">Save</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Video