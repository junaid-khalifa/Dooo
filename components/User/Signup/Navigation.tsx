import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { NavProps } from '../../types'
import { FiSearch } from 'react-icons/fi'

const Navigation = () => {
    const [hide, setHide] = useState<'none' | 'hidden'>('hidden')

    function toggle(): void {
        setHide('none')
    }
    return (

        <nav className="bg-[#161616] border-gray-200 px-2 sm:px-4 py-2.5 rounded lg:px-[40px] md:pt-12 dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="flex">
                    <button onClick={toggle} data-collapse-toggle="mobile-menu-4" className="md:hidden inline-flex items-center p-2 text-sm text-white">
                        <Image src='/bars.png' alt='bars' height='16px' width='21px' />
                    </button>
                    <Image src='/dooo-logo.png' height='33px' width='88px' alt='dooo' />
                </div>
                <div className="flex md:order-2">
                    <div className='mt-4 pr-6 md:mt-0 md:pr-0'>
                        <FiSearch size={25} className="md:mt-2 text-white cursor-pointer" />
                    </div>
                    <button className="text-white font-medium bg-gradient-to-r from-[#9A3EBF] via-[#C53660, #E93141] to-[#F98B51] rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">Sign Up</button>
                </div>
                <div className={`${hide} justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4`}>
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white md:p-0 ">Category</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white md:p-0 ">Tract For Business</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white md:p-0 ">Teach on Tract</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >

    )
}

export default Navigation
