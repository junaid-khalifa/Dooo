import React, { ChangeEvent, useState } from 'react'
import { BiCamera, BiEditAlt } from 'react-icons/bi'
import { BsCheckCircleFill, BsFillPlusCircleFill, BsFillStarFill, BsPencilFill } from 'react-icons/bs'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RiDeleteBin5Line, RiShoppingCartLine } from 'react-icons/ri'
import Input from '../Input/Input'
import Image from 'next/image'
import { VscArrowSwap } from 'react-icons/vsc'
import { AiFillEye } from 'react-icons/ai'
import ActiveUsers from './ActiveUsers'
import Dropdown from '../Dropdown/Dropdown'
import Select from '../Input/Select'
import { FaCcMastercard, FaCcPaypal } from 'react-icons/fa'
import Resolution from './Resolution'
import Toggle from '../Toggle'
import { CgDanger } from 'react-icons/cg'
import Optimization from './Optimization'
import AddButton from './AddButton'
import SaveButton from './SaveButton'
import { ImUpload3 } from 'react-icons/im'
import Zone from './Zone'
import SideNav from '../SideNav'
import Link from 'next/link'

const Settings = () => {
    const [nav, setNav] = useState(false)

    function showSideNav() {
        setNav(!nav)
    }

    const styleValue = nav ? 'none' : 'hidden'

    function handleChange(e: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.')
    }

    return (
        <div className='mx-2 sm:mx-0 relative'>
            <SideNav stylevalue={styleValue} />
            {/* Nav */}
            <div className='flex flex-row items-center gap-1 float-left absolute top-2 left-0 sm:hidden'>
                <div onClick={showSideNav} className='flex sm:hidden'>
                    <Image src='/home-bar.png' alt='bars' height='16px' width='21px' />
                </div>
                <div className='flex sm:hidden'>
                    <Link href='/home' passHref>
                        <Image src='/Logo.png' className='object-contain' height='26px' width='26px' alt='dooo' />
                    </Link>
                </div>
            </div >

            {/* Header settings page */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center my-8'>
                <h1 className='flex justify-center text-2xl leading-9 m-auto text-[#1E1E1F] font-[700]'>Account Settings</h1>
                <button className='px-8 bg-[#E1FFF2] w-full sm:w-auto text-center rounded py-2 text-[#31B37D] text-[900] mr-2'>SAVE</button>
            </div>

            <div className='flex flex-col lg:grid lg:grid-cols-3'>
                {/* //Left */}
                <div className='col-span-1 gap-2 border-x-[1px] border-black'>
                    {/* Enabled resolutions */}
                    <div className=''>
                        <div className='flex justify-between items-center bg-black p-2'>
                            <h1 className='font-[700] text-lg text-white'>Enabled Resolutions</h1>
                            <MdKeyboardArrowRight className='text-white' size={25} />
                        </div>
                        <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3'>
                            <Resolution value1={'240p (352 x 240)'} value2={'600 Kbps'} checked={true} />
                            <Resolution value1={'360p (640 x 360)'} value2={'800 Kbps'} checked={true} />
                            <Resolution value1={'480p (842 x 480)'} value2={'1400 Kbps'} checked={true} />
                            <Resolution value1={'720p (1280 x 720)'} value2={'2800 Kbps'} checked={true} />
                            <hr className='my-2 sm:col-span-2 lg:col-span-3 border-gray-600 border-t-[1px]' />
                            <div className='flex justify-between col-span-2 lg:col-span-3'>
                                <Resolution value1={'1080p (1920 x 1080)'} value2={'5000 Kbps'} checked={true} />
                                <div className='bg-[#EDD038] h-9 w-9'>
                                </div>
                            </div>
                            <Resolution value1={'1440p (2560 x 1440)'} value2={'8000 Kbps'} checked={false} />
                            <Resolution value1={'240p (3842 x 2160)'} value2={'13,000 Kbps'} checked={false} />

                        </div>
                    </div>
                    {/* Optimization and Security options */}
                    <div>
                        <div className='flex justify-between items-center bg-black p-2'>
                            <h1 className='font-[700] text-lg text-white'>Optimization & Security Options</h1>
                            <MdKeyboardArrowRight className='text-white' size={25} />
                        </div>
                        <div className='sm:grid sm:grid-cols-2 lg:flex lg:flex-col'>
                            <Optimization text='Keep Original Files' />
                            <Optimization text='Enable MP4 Fallback' />
                            <hr className='my-2 col-span-2 lg:col-span-3 border-gray-600 border-t-[1px]' />
                            <Optimization text='CDN Token Authentication' />
                            <Optimization text='Block Direct URL File Access' />
                            <Optimization text='Embed View Token Authentication' />
                            <Optimization text='MediaCage Basic DRM' />
                            <Optimization text='Enable Direct Play' />
                            <Optimization text='Watchtime heatmap' />
                        </div>
                    </div>
                    {/* Blocked and Allowed Domains */}
                    <div>
                        <div className='flex justify-between items-center bg-black p-2'>
                            <h1 className='font-[700] text-lg text-white'>Blocked & Allowed Domains</h1>
                            <MdKeyboardArrowRight className='text-white' size={25} />
                        </div>
                        <div className='sm:grid sm:grid-cols-2 lg:flex lg:flex-col relative my-4'>
                            <div>
                                <h1 className='font-[700] m-2'>Blocked Domains</h1>
                                <p className='text-xs ml-2 mr-4 text-[#787C87]'>
                                    The list of domains that will be blocked from accessing the videos.
                                    <br />
                                    Any domain not on the list will be allowed to play the videos.</p>
                                <AddButton />
                            </div>
                            <div>
                                <h1 className='font-[700] m-2'>Blocked Domains</h1>
                                <p className='text-xs ml-2 mr-4 text-[#787C87]'>
                                    The list of domains that are allowed to access the videos. <br />
                                    If no hostnames are listed all requests will be allowed,
                                </p>
                                <AddButton />
                            </div>
                            <div className='bg-[#EDD038] h-9 w-9 absolute top-0 right-0 m-2'>
                            </div>
                        </div>
                    </div>
                    {/* Advertisement Options */}
                    <div>
                        <div className='flex justify-between items-center bg-black p-2'>
                            <h1 className='font-[700] text-lg text-white'>Advertisement Options</h1>
                            <MdKeyboardArrowRight className='text-white' size={25} />
                        </div>

                        <div className='sm:grid sm:grid-cols-2 relative my-4 lg:flex lg:flex-col'>
                            <div className='flex flex-col px-2 col-span-1'>
                                <div className='flex items-center gap-3'>
                                    <h1 className='font-bold'>VAST tag URL</h1>
                                    <CgDanger />
                                </div>
                                <SaveButton placeholder={'Enter VAST tag URL here'} />
                                <p className='text-xs text-[#787C87]'>to automatically display VAST based ads in your videos.</p>
                            </div>

                            <div className='flex flex-col justify-between mt-4 px-2 col-span-1'>
                                <div className='flex items-center gap-3'>
                                    <h1 className='font-bold'>VI.AI publisher ID</h1> <CgDanger size={15} />
                                </div>
                                <SaveButton placeholder={'Enter VI.AI publisher id here'} />
                            </div>
                            <div className='bg-[#EDD038] h-9 w-9 absolute right-0 top-0 m-2'>
                            </div>
                        </div>

                    </div>
                    {/* Add Watermark */}
                    <div className='mt-4'>
                        <div className='flex justify-between items-center bg-black p-2'>
                            <h1 className='font-[700] text-lg text-white'>Add Watermark</h1>
                            <MdKeyboardArrowRight className='text-white' size={25} />
                        </div>
                        <div className='flex justify-between m-2 px-2'>
                            <button className='whitespace-nowrap bg-gradient-to-r from-[#FD6D4E] to-[#FDA34F] flex justify-center gap-2 text-sm rounded items-center px-3 py-1 text-white'>
                                <ImUpload3 className='text-white' size={15} />UPLOAD WATERMARK</button>
                            <div className='bg-[#EDD038] h-9 w-9'>
                            </div>
                        </div>
                    </div>
                    {/* Storage Zones */}
                    <div className='my-4'>
                        <div className='flex justify-between items-center bg-black p-2'>
                            <h1 className='font-[700] text-lg text-white'>Storage zones</h1>
                            <MdKeyboardArrowRight className='text-white' size={25} />
                        </div>
                        <div className='grid grid-cols-4 my-2'>
                            <div className='col-span-3'>
                                <Zone zone={'US East (New York)'} storage={''} checked={true} />
                                <Zone zone={'US West (Los Angeles)'} storage={''} checked={true} />
                                <Zone zone={'Asia (Singapore)'} storage={'+ $0.005/GB'} checked={false} />
                                <Zone zone={'Oceania (Sydney)'} storage={'+ $0.005/GB'} checked={false} />
                            </div>
                            <div className='col-span-1'>
                                <div className='bg-[#EDD038] h-9 w-9'>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* //Right */}
                <div className='col-span-2 gap-2'>
                    {/* Team Accounts */}
                    <div>
                        <div className='flex justify-between items-center bg-[#CAEBF2] p-2'>
                            <h1 className='font-[700] text-lg'>Team Accounts</h1>
                            <MdKeyboardArrowRight size={25} />
                        </div>
                        <div className='p-2'>
                            <div className='flex'>
                                <div className='m-2 w-[80%] sm:w-[60%]'>
                                    <div className='flex justify-between relative mb-2'>
                                        <h1>yousaf@gmail.com</h1>
                                        <h1>xxxxxx</h1>
                                        <BiEditAlt className='bg-[#EDF5FF]' size={25} />
                                        <RiDeleteBin5Line className='items-center absolute right-16 sm:-right-10 top-[148px] sm:top-0 cursor-pointer' size={25} />
                                        <h1 className='font-[700] text-xs absolute right-0 sm:-right-24 top-[148px] sm:top-0'>Primary <br />Account</h1>
                                    </div>
                                    <div className='flex flex-col sm:flex-row justify-between gap-1 relative'>
                                        <Input name={''} placeholder={'Enter email address'} type={'text'} onChange={handleChange} id={''} value={''} />
                                        <Input name={''} placeholder={'Enter password'} type={'text'} onChange={handleChange} id={''} value={''} />
                                        <RiDeleteBin5Line className='items-center absolute -right-10 sm:top-3 top-[68px] cursor-pointer' size={25} />
                                    </div>
                                    <div className='flex justify-start sm:justify-end'>
                                        <button className='px-4 py-2 text-[#6075DA] bg-[#EDF5FF] font-[900] rounded'>+ Add more</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Google analytics */}
                    <div>
                        <div className=''>
                            <div className='flex justify-between items-center bg-[#CAEBF2] p-2'>
                                <h1 className='font-[700] text-lg'>Google Analytics, Retargeting Pixels & Google Tag Manager</h1>
                                <MdKeyboardArrowRight size={25} />
                            </div>
                            <div className='flex justify-end p-4'>
                                <div className='bg-[#EDD038] h-9 w-9'>

                                </div>
                            </div>
                            <div className='grid grid-cols-4 gap-2 px-4'>
                                <div className='col-span-3 gap-2'>
                                    <Input name={''} placeholder={'Enter Google Analytics script'} type={'text'} onChange={handleChange} id={''} value={''} />
                                    <Input name={''} placeholder={'Enter GTM or retargeting pixel script'} type={'text'} onChange={handleChange} id={''} value={''} />

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Setup custom domain */}
                    <div>
                        <div className='flex justify-between items-center bg-[#CAEBF2] p-2'>
                            <h1 className='font-[700] text-lg'>Setup custom domain by adding cNAME</h1>
                            <MdKeyboardArrowRight size={25} />
                        </div>
                        <div className='flex justify-end p-4'>
                            <div className='bg-[#EDD038] h-9 w-9'>

                            </div>
                        </div>
                        <div className='px-4'>
                            <div className='flex items-center gap-2'>
                                <Input name={''} placeholder={'Enter your domain'} type={'text'} onChange={handleChange} id={''} value={''} />
                                <button className='px-4 py-2 text-[#6075DA] bg-[#EDF5FF] font-[700] rounded'>Add</button>
                            </div>
                            <h1 className='text-sm text-[#6075DA]'>Please allow up to 24 hours for your sub-domain to propagate.</h1>
                        </div>
                    </div>
                    {/* Autoresponder connections*/}
                    <div className='mt-8'>
                        <div className='flex justify-between items-center bg-[#CAEBF2] p-2'>
                            <h1 className='font-[700] text-lg'>Autoresponder Connections</h1>
                            <MdKeyboardArrowRight size={25} />
                        </div>
                        <div className='flex flex-col justify-center sm:justify-start items-center sm:items-start gap-4 py-4 px-4 relative'>
                            <div className="w-[80%] sm:w-[40%] h-[116px] bg-[#EBEBEB] border-[2px] border-[#323232] border-dashed flex justify-center">
                                <div className='flex flex-col justify-center items-center'>
                                    <BsFillPlusCircleFill size={30} />
                                    <p className="text-xs text-center">Add new autoresponder connection</p>
                                </div>
                            </div>

                            <div className='flex justify-center w-[80%] sm:w-[40%] flex-col'>
                                <h1 className='text-sm font-bold'>Active Connections</h1>
                                <div className='h-116px border'>
                                    <div className="h-[58px] bg-[#2C62DF] flex justify-center items-center">
                                        <Image src='/stroke.png' height='53px' width='36px' alt='stroke' />
                                    </div>
                                    <div className='flex justify-between py-2'>
                                        <h1 className='text-xs mx-2 font-bold'>ActiveCampaign</h1>
                                        <div className='flex justify-between gap-2 items-center'>
                                            <VscArrowSwap />
                                            <BsPencilFill />
                                            <RiDeleteBin5Line />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-[#EDD038] h-9 w-9 absolute top-0 right-0 m-2'>
                            </div>
                        </div>
                    </div>
                    {/* White label agency */}
                    <div className='mt-2'>
                        <div className='flex justify-between items-center bg-[#CAEBF2] p-2'>
                            <h1 className='font-[700] text-lg'> White label for agency</h1>
                            <MdKeyboardArrowRight size={25} />
                        </div>
                        <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start gap-2 my-4 px-4 md:mx-4 relative'>
                            <div className="w-full sm:w-[226px] h-[58px] bg-[#EBEBEB] border-[2px] border-[#323232] border-dashed flex justify-center">
                                <div className='flex flex-row justify-center m-auto items-center gap-2'>
                                    <p className='text-center'><BsFillPlusCircleFill size={30} /></p>
                                    <p className="text-xs text-center">Upload Logo</p>
                                </div>
                            </div>
                            <div className="w-full sm:w-[226px] h-[58px] bg-[#EBEBEB] border-[2px] border-[#323232] border-dashed flex justify-center">
                                <div className='flex flex-row justify-center m-auto items-center gap-2'>
                                    <p className='text-center'><BsFillPlusCircleFill size={30} /></p>
                                    <p className="text-xs text-center">Add Plan</p>
                                </div>
                            </div>
                            <div className="w-full sm:w-[226px] h-[58px] bg-[#EBEBEB] border-[2px] border-[#323232] border-dashed flex justify-center">
                                <div className='flex flex-row justify-center m-auto items-center gap-2'>
                                    <p className='text-center'><BsFillPlusCircleFill size={30} /></p>
                                    <p className="text-xs text-center">Add User</p>
                                </div>
                            </div>
                            <div className='bg-[#EDD038] h-9 w-9 absolute top-0 right-0 m-2'>

                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row justify-between gap-2 px-4 my-8'>
                            <div className='border border-sky-600 px-3 py-2 flex justify-between items-center w-full'>
                                <h1>Interface - 1 </h1><AiFillEye />
                            </div>
                            <div className='border border-sky-600 px-3 py-2 flex justify-between items-center w-full'>
                                <h1>Interface - 2 </h1><AiFillEye />
                            </div>
                            <div className='border border-sky-600 px-3 py-2 flex justify-between items-center w-full'>
                                <h1>Interface - 3 </h1><AiFillEye />
                            </div>
                        </div>
                        <div className='px-4 flex flex-col gap-2 my-8 w-full'>
                            <div className=''>
                                <h1 className='font-bold text-md'>Active Pricing Plans</h1>
                                <hr className='w-[30%] border-t-black border-t-2 mt-2' />
                            </div>
                            <div className='flex flex-row  w-full gap-2 items-center'>
                                <h1 className='text-[#C5C7CD]'>Gold plan (100GB) - <span className='text-[#4954CB]'>$59/onetime</span></h1>
                                <Toggle />
                                <BsPencilFill size={20} />
                                <RiDeleteBin5Line size={20} />
                                <RiShoppingCartLine size={20} />
                            </div>
                        </div>
                        <div className='flex flex-row gap-2 justify-between my-8 items-center mx-4'>
                            <div className='bg-black h-2 bg-gradient-to-l from-black to-white w-full rounded' />
                            <BsFillStarFill size={75} />
                            <div className='bg-black h-2 bg-gradient-to-r from-black to-white rounded w-full' />
                        </div>
                        <div className='px-4 flex flex-col my-8'>
                            <div>
                                <h1 className='font-bold text-md'>Active Users</h1>
                                <hr className='w-[30%] border-t-black border-t-2 mt-2' />
                            </div>
                            <div className='flex flex-col sm:flex-row my-2 gap-2 items-center'>
                                <div className='flex gap-2 items-center w-full'>
                                    <Input name={''} placeholder={'Enter video ID to find owner'} type={'text'} onChange={handleChange} id={''} value={''} />
                                    <button className='px-4 py-2 text-[#6075DA] bg-[#EDF5FF] font-[700] rounded'>Search</button>
                                </div>
                                <div className='flex gap-2 items-center w-full'>
                                    <Input name={''} placeholder={'Search users by name or email'} type={'text'} onChange={handleChange} id={''} value={''} />
                                    <button className='px-4 py-2 text-[#6075DA] bg-[#EDF5FF] font-[700] rounded'>Search</button>
                                </div>
                                <div className='items-center w-full'>
                                    <button className='px-4 py-2 w-full text-[#6075DA] bg-[#EDF5FF] font-[700] rounded'>Download</button>
                                </div>
                            </div>
                            <ActiveUsers />
                            <div className='flex flex-row gap-2 justify-between my-8 items-center mx-4'>
                                <div className='bg-black h-2 bg-gradient-to-l from-black to-white w-full rounded' />
                                <BsFillStarFill size={75} />
                                <div className='bg-black h-2 bg-gradient-to-r from-black to-white rounded w-full' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <div className='flex flex-col sm:flex sm:flex-row gap-4 items-center'>
                                    <h1 className='sm:col-span-1 font-bold'>Login URL for agency customers</h1>
                                    <h1 className='px-4 py-2 bg-[#F4F7F9] text-[#787C87] rounded'>https://CustomerDomain.com/login</h1>
                                </div>
                                <div className='flex flex-col sm:flex sm:flex-row gap-4 items-center'>
                                    <h1 className='sm:col-span-1 font-bold'>Logout URL for agency customers</h1>
                                    <h1 className='px-4 py-2 bg-[#F4F7F9] text-[#787C87] rounded'>https://CustomerDomain.com/login</h1>
                                </div>
                            </div>
                            <div className='flex flex-col mt-8'>
                                <div>
                                    <h1 className='font-bold text-md'>Add User</h1>
                                    <hr className='w-[30%] border-t-black border-t-2 mt-2' />
                                </div>
                                <form className='grid grid-cols-3 relative'>
                                    <div className='col-span-3 w-[90%]'>
                                        <div className='flex sm:flex-row flex-col gap-2 justify-between'>
                                            <Input name={''} placeholder={'Enter email address'} type={'text'} onChange={handleChange} id={''} value={''} />
                                            <Input name={''} placeholder={'Enter password'} type={'text'} onChange={handleChange} id={''} value={''} />
                                        </div>
                                        <div className='flex sm:flex-row flex-col gap-2 justify-between'>
                                            <Select name={'Storage quota'} />
                                            <Select name={'Free Trial(7 days)'} />
                                        </div>
                                        <div className='flex sm:flex-row flex-col gap-2 justify-between'>
                                            <Input name={''} placeholder={'Enter price     ($)'} type={'text'} onChange={handleChange} id={''} value={''} />
                                            <Select name={'Every month/ Onetime'} />
                                        </div>
                                        <div className='flex sm:flex-row flex-col justify-end'>
                                            <button className='px-4 py-2 text-[#6075DA] bg-[#EDF5FF] font-[700] rounded'>Add</button>
                                        </div>
                                    </div>
                                    <RiDeleteBin5Line className='mt-3 ml-3 cursor-pointer absolute top-0 right-0 m-2' size={25} />
                                </form>
                            </div>
                            <div className='flex flex-col'>
                                <div>
                                    <h1 className='font-bold text-md'>Add Pricing Plan</h1>
                                    <hr className='w-[30%] border-t-black border-t-2 mt-2' />
                                </div>
                                <form className='grid grid-cols-3 relative'>
                                    <div className='col-span-3 w-[90%] sm:w-[50%]'>
                                        <div className='flex sm:flex-row flex-col gap-2'>
                                            <Input name={''} placeholder={'Enter plan name'} type={'text'} onChange={handleChange} id={''} value={''} />
                                        </div>
                                        <div className='sm:flex-row flex-col gap-2'>
                                            <div className='col-span-1'>
                                                <Input name={''} placeholder={'Enter price $'} type={'text'} onChange={handleChange} id={''} value={''} />
                                            </div>
                                            <div className='col-span-2'>
                                                <Select name={'Every month / OneTime'} />
                                            </div>
                                        </div>
                                        <div className='flex sm:flex-row flex-col gap-2'>
                                            <Input name={''} placeholder={'Enter price     ($)'} type={'text'} onChange={handleChange} id={''} value={''} />
                                        </div>
                                        <div className='flex sm:flex-row flex-col gap-2'>
                                            <Select name={'Free Trial (7 Days)    YES/NO'} />
                                        </div>
                                        <div className='flex sm:flex-row flex-col justify-end'>
                                            <button className='px-6 py-2 text-[#6075DA] bg-[#EDF5FF] font-[700] rounded'>Add</button>
                                        </div>
                                    </div>

                                    <BiCamera className='mt-3 ml-3 cursor-pointer absolute top-0 right-0 m-2' size={25} />

                                </form>
                            </div>
                            <div className='flex flex-col'>
                                <div>
                                    <h1 className='font-bold text-md'>Setup Payment Gateways</h1>
                                    <hr className='w-[30%] border-t-black border-t-2 mt-2' />
                                </div>
                                <form className='grid grid-cols-3' action="">
                                    <div className='col-span-3 sm:col-span-2'>
                                        <Input name={''} placeholder={'Enter PayPal email to enable PayPal on checkout page'} type={'text'} onChange={handleChange} id={''} value={''} />
                                        <Input name={''} placeholder={'Enter Stripe Secret Key to enable Stripe on checkout page'} type={'text'} onChange={handleChange} id={''} value={''} />
                                        <Input name={''} placeholder={'Enter 2checkout key to enable 2Checkout on checkout page'} type={'text'} onChange={handleChange} id={''} value={''} />
                                    </div>
                                    <div className='flex flex-col-reverse col-span-3 sm:col-span-2 sm:flex justify-between items-center gap-4'>
                                        <div className='flex gap-4 items-center w-full'>
                                            <input type="checkbox" className="checkbox w-4 h-4 cursor-pointer" />
                                            <h1>Enable sandbox/testing node</h1>
                                        </div>
                                        <button className='px-6 py-2 text-[#6075DA] w-full bg-[#EDF5FF] font-[700] rounded'>Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* Usage stats */}
                    <div className='mt-4'>
                        <div className='flex justify-between items-center bg-[#CAEBF2] p-2'>
                            <h1 className='font-[700] text-lg'>Usage Stats</h1>
                            <MdKeyboardArrowRight size={25} />
                        </div>
                        <div className='flex my-8 px-4'>
                            <div>
                                <h1 className='font-bold'>Total Videos</h1>
                                <h1 className='font-bold'>Bandwidth Used</h1>
                                <h1 className='font-bold'>Storage Used</h1>
                                <h1 className='font-bold'>Current Plan</h1>
                            </div>
                            <div className='border bg-black mx-4'></div>
                            <div>
                                <h1 className='text-[#6089DA] font-bold'>35</h1>
                                <h1 className='text-[#6089DA] font-bold'>80GB of Unmetered</h1>
                                <h1 className='text-[#6089DA] font-bold'>70GB out of 100GB</h1>
                                <h1 className='text-[#6089DA] font-bold'>Gold Plan</h1>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-2 px-4 relative'>
                            <div className='col-span-1'>
                                <Select name={'Switch your plan'} />
                            </div>
                            <div className='col-span-1'>
                                <button className='px-6 py-2 text-white w-full sm:w-auto bg-[#1E1E1F] font-[600] rounded mt-1'>Change</button>
                            </div>
                            <p className='text-xs text-[#6997DC] sm:col-span-1 col-span-2'>If you will downgrade your plan, then all latest videos exceeding the storage
                                limit of your new plan will automatically get removed. So remove un-wanted
                                videos before changing the plan to avoid any inconvenience.
                            </p>
                        </div>

                        <div className='grid grid-cols-3 my-4 px-4'>
                            <div className='border p-2 col-span-3 sm:col-span-2 flex justify-between'>
                                <div className='items-center'>
                                    <h1 className=''>Payment</h1>
                                    <div className='my-4'>
                                        <h1 className='flex gap-1 items-center'><FaCcMastercard size={20} /><span>xxxxxxxxx9599 09/24</span></h1>
                                        <h1 className='flex gap-1 items-center'><FaCcPaypal size={20} /> <span>zzxxx19@gmail.com</span></h1>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5 items-center'>
                                    <button className='px-6 py-2 text-white bg-[#1E1E1F] font-[600] rounded mt-1'>Change</button>
                                    <h1 className='text-[#787C87]'>(Cancel)</h1>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 px-4'>
                            <div className='col-span-2 sm:col-span-1'>
                                <h1 className='font-bold'>Active Pricing Plan & Addons:</h1>
                                <div className='flex justify-between'>
                                    <h1>- Gold plan @ $30/month</h1>
                                    <p className='underline text-[#6089DA]'>cancel</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>- HD Resolutions Addon @ $20/month</h1>
                                    <p className='underline text-[#6089DA]'>cancel</p>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>- Universal Player @ $44.50/month</h1>
                                    <p className='underline text-[#6089DA]'>cancel</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 mt-8 px-4'>
                            <div className='col-span-2 sm:col-span-1'>
                                <h1 className='font-bold'>Total payment:</h1>
                                <h1>$94.50/Month <span className='text-[#6089DA]'>(Addons payment is included in this amount)</span></h1>
                                <h1>Your plan will renew on Jan.16, 2022.</h1>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 px-4'>
                            <hr className='my-8 col-span-3 sm:col-span-2 border-gray-600 border-t-[2px]' />
                        </div>
                        <div className='grid grid-cols-3 px-4'>
                            <div className='col-span-3 sm:col-span-2 flex flex-col sm:flex-row items-start gap-3'>
                                <h1 className='whitespace-nowrap font-bold items-center mt-3'>API KEY</h1>
                                <div>
                                    <div className='border border-black bg-[#F4F7F9] rounded px-3 py-2 flex justify-between items-center w-full'>
                                        <h1>----------------------- </h1><AiFillEye size={20} />
                                    </div>
                                    <p className='text-sm my-2'>This is the key that you can use to programmatically upload or delete the audio/video files and to get URL of uploaded video/audio files. <a className='underline text-sky-400'>API Documentation</a></p>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 px-4'>
                            <hr className='my-8 col-span-3 sm:col-span-2 border-gray-600 border-t-[2px]' />
                        </div>
                        <div className='grid grid-cols-3 mb-8 px-4'>
                            <div className='flex flex-col col-span-3 sm:col-span-2 items-center sm:items-start gap-4'>
                                <button className='px-6 py-2 w-full sm:w-auto text-white bg-[#1E1E1F] font-[600] rounded mt-1 items-center whitespace-nowrap'>Delete account permanently</button>
                                <p className='text-sm my-2'><span className='text-[#EE4A4F] font-bold'>Warning message:</span> I understand that all of my videos will be permanently removed. (show this as a popup)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Settings