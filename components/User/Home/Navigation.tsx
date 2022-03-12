import React, { useState } from 'react'
import Image from 'next/image'
import { HiPuzzle } from 'react-icons/hi'
import { BiBell } from 'react-icons/bi'
import { GoGraph } from 'react-icons/go'
import { useRouter } from 'next/router'
import Modal from './Modal'
import Link from 'next/link'
import SideNav from '../SideNav'

const Navigation = () => {
    const router = useRouter();
    const [hide, setHide] = useState(true)
    const [nav, setNav] = useState(false)

    function showSideNav() {
        setNav(!nav)
    }

    function modalHandler() {
        setHide(!hide)
    }

    const modalStyle = hide ? 'hidden' : 'none'
    const styleValue = nav ? 'none' : 'hidden'

    return (
        <div className='overflow-hidden mx-auto md:mx-8 sm:mx-2 w-11/12'>
            <nav className='flex my-4 justify-between'>
                <div className='flex flex-row items-center gap-1 float-left'>
                    <div onClick={showSideNav} className='flex sm:hidden cursor-pointer'>
                        <Image src='/home-bar.png' alt='bars' height='16px' width='21px' />
                    </div>
                    <div className='flex sm:hidden cursor-pointer'>
                        <Link href='/home' passHref>
                            <Image src='/Logo.png' className='object-contain' height='26px' width='26px' alt='dooo' />
                        </Link>
                    </div>
                    <SideNav stylevalue={styleValue} />
                </div >
                <div className='flex justify-end'>
                    {router.pathname === '/home' && (
                        <div className='md:float-right hidden sm:flex'>
                            <Link href='/upload' passHref>
                                <button className='text-white md:text-lg whitespace-nowrap bg-black py-2 px-3 rounded-md'>+ Upload Video</button>
                            </Link>
                        </div>
                    )}
                    <div className='flex justify-end items-center md:float-right'>
                        {router.pathname === '/upload' || '/addons' && (
                            <div className='text-black mt-2 px-2 border-[#1E1E1F] cursor-pointer'>
                                <Link href='/player' passHref>
                                    <Image src='/internet.png' alt='world' height='26px' width='26px' />
                                </Link>
                            </div>
                        )}
                        <div className='text-[#1E1E1F] px-1 sm:px-2 cursor-pointer flex justify-center items-center'>
                            <Link href='/addons' passHref><HiPuzzle size={25} /></Link>
                        </div>
                        <div className='px-1 sm:px-2 cursor-pointer flex justify-center items-center'>
                            <Link href='/statistics' passHref><GoGraph size={25} /></Link>
                        </div>
                        <div className='text-black px-1 sm:px-2 cursor-pointer flex justify-center text-center items-center' onClick={() => modalHandler()}>
                            <h1 className='flex justify-center h-6 text-center items-center leading-6 text-2xl mb-2'>
                                &#91;<span className='text-center text-sm'>xxx</span>&#93;
                            </h1>
                        </div>
                        <div className='text-gray-600 px-1 sm:px-2 cursor-pointer flex justify-center items-center'>
                            <BiBell size={25} />
                        </div>
                        <div className='px-1 sm:px-2 flex justify-center items-center'>
                            <span className="w-[1px] h-6 rounded-lg bg-gray-600">
                            </span>
                        </div>
                        <div className="flex items-center px-1 sm:px-2 justify-end">
                            <h1 className='mb-1 mr-1 whitespace-nowrap font-bold hidden sm:flex'>Shekh Al Raihan</h1>
                            <div className="flex justify-center items-center">
                                <Image alt="profil" src="/Ellipse-2.png" className="object-contain rounded-full" height='46px' width='46px' />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {router.pathname === '/home' && (
                <div className='sm:hidden'>
                    <Link href='/upload' passHref>
                        <button className='text-white text-lg bg-black w-full py-2 px-3 rounded-md'>+ Upload Video</button>
                    </Link>
                </div>
            )}
            <Modal modalStyle={modalStyle} handleModal={modalHandler} />
        </div>
    )
}

export default Navigation
