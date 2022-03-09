import React from 'react'
import { BsPencilFill } from 'react-icons/bs'
import { RiDeleteBin5Line, RiShoppingCartLine } from 'react-icons/ri'
import Input from '../../User/Input/Input'
import Toggle from '../../User/Toggle'

const PricingPlans = () => {
    const handleChange = () => {
        //...
    }
    return (
        <div className='mt-8'>
            <div>
                <h1 className='font-[600] text-2xl text-center'>Pricing Plans</h1>
            </div>
            <div className='grid grid-cols-2'>
                <div className='flex justify-center col-span-1'>
                    <div className=''>
                        <div>
                            <h1 className='font-bold text-md'>Setup Payment Gateways</h1>
                            <hr className='w-40 text-black' />
                        </div>
                        <form className='flex justify-center flex-col' action="">
                            <div className=''>
                                <Input name={''} placeholder={'Enter PayPal email to enable PayPal on checkout page'} type={'text'} onChange={handleChange} id={''} value={''} />
                                <Input name={''} placeholder={'Enter Stripe Secret Key to enable Stripe on checkout page'} type={'text'} onChange={handleChange} id={''} value={''} />
                                <Input name={''} placeholder={'Enter 2checkout key to enable 2Checkout on checkout page'} type={'text'} onChange={handleChange} id={''} value={''} />
                            </div>
                            <div className='flex justify-between items-center'>
                                <button className='px-6 py-2 text-[#6075DA] bg-[#EDF5FF] font-[700] rounded'>Save</button>
                                <div className='flex gap-1 items-center'>
                                    <input type="checkbox" className="checkbox w-4 h-4 cursor-pointer" />
                                    <h1>Enable sandbox/testing node</h1>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div>
                    <div className='flex justify-center'>
                        <div>
                            <h1 className='font-bold text-md'>Active Pricing Plans</h1>
                            <hr className='w-40 text-black mt-2' />
                        </div>
                        <div className='flex justify-between gap-2 items-center'>
                            <h1 className='text-[#C5C7CD]'>Gold plan (100GB) - <span className='text-[#4954CB]'>$59/onetime</span></h1>
                            <div className='flex justify-between items-center gap-2'>
                                <Toggle />
                                <BsPencilFill size={20} />
                                <RiDeleteBin5Line size={20} />
                                <RiShoppingCartLine size={20} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className='font-bold text-md'>Active Addons</h1>
                            <hr className='w-40 text-black mt-2' />
                        </div>
                        <div className='flex justify-between gap-2 items-center'>
                            <h1 className='text-[#C5C7CD]'>HD Resolutions - <span className='text-[#4954CB]'>$59/onetime</span></h1>
                            <div className='flex items-center justify-between gap-2'>
                                <Toggle />
                                <BsPencilFill size={20} />
                                <RiDeleteBin5Line size={20} />
                                <RiShoppingCartLine size={20} />
                            </div>
                        </div>
                    </div>
                    <hr className='w-full mt-4' />
                    <div className='flex justify-end gap-4 items-center my-2'>
                        <button className='text-[#1E1E1F] bg-[#F5F8FA] rounded-md py-2 px-4'>+ Add Addon</button>
                        <button className='text-[#1E1E1F] bg-[#F5F8FA] rounded-md py-2 px-4'>+ Add Plan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingPlans