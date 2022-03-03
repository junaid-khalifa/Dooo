import React from 'react'
import Addon from './Addon'
import { FiArrowUpRight } from 'react-icons/fi'

const Addons = () => {
    return (
        <div className='w-[95vw] float-right bg-[#FBF9F6]'>
            <h1 className='text-center font-bold'>Addons</h1>
            <h1 className='text-center text-dark'>Get powerful addons to boost experience</h1>
            <div className='grid md:grid-cols-2 gap-4 mx-6 my-6'>
                <Addon />
                <Addon />
                <Addon />
                <Addon />
            </div>
            <div className='flex justify-center'>
                <button className='flex'>More<FiArrowUpRight /></button>
            </div>
        </div>
    )
}

export default Addons