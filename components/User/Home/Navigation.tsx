import React, { useState } from 'react'
import Image from 'next/image'
import { HiPuzzle } from 'react-icons/hi'
import { BiBell } from 'react-icons/bi'
import { GoGraph } from 'react-icons/go'
import { useRouter } from 'next/router'
import Modal from './Modal'
import Link from 'next/link'

const Navigation = () => {
    const router = useRouter();
    const [hide, setHide] = useState(true)

    function modalHandler() {
        setHide(!hide)
    }
    const modalStyle = hide ? 'hidden' : 'none'

    return (
        <div className='overflow-hidden mx-8 w-11/12'>
            <nav className='flex my-4 justify-between'>
                <div className='float-left'>
                    <div className='md:hidden'>
                        <Image src='/bars.png' alt='bars' height='16px' width='21px' />
                    </div>
                    <div className='md:hidden'>
                        <Image src='/Logo.png' height='26px' width='26px' alt='dooo' />
                    </div>

                </div >
                <div className='flex justify-end'>
                    {router.pathname === '/home' && (
                        <div className='md:float-right'>
                            <button className='text-white text-lg bg-black py-2 px-3 rounded-md'>+ Upload Video</button>
                        </div>
                    )}
                    <div className='flex justify-end md:float-right'>
                        {router.pathname === '/upload' || '/addons' && (
                            <div className='text-black mt-2 px-2 border-[#1E1E1F] cursor-pointer'>
                                <Link href='/player' passHref>
                                    <Image src='/internet.png' alt='world' height='30px' width='30px' />
                                </Link>
                            </div>
                        )}
                        <div className='text-[#1E1E1F] px-2 mt-3 cursor-pointer'>
                            <Link href='/addons' passHref><HiPuzzle size={25} /></Link>
                        </div>
                        <div className='mt-3 px-2 cursor-pointer'>
                            <Link href='/statistics' passHref><GoGraph size={25} /></Link>
                        </div>
                        <div className='text-black mt-2 px-2 h-10 cursor-pointer' onClick={() => modalHandler()}>
                            <h1 className='leading-6 mx-auto text-[25px]'>[xxx]</h1>
                        </div>
                        <div className='text-gray-600 mt-3 px-2 cursor-pointer'>
                            <BiBell size={25} />
                        </div>
                        <div className='text-[30px] px-2 text-gray-600'>|</div>
                        <div className="flex items-center px-2 justify-end">
                            <h1 className='mb-1 mr-1 text-bold'>Shekh Al Raihan</h1>
                            <div className="block">
                                <Image alt="profil" src="/Ellipse-2.png" className="mx-auto object-cover rounded-full" height='46px' width='46px' />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Modal modalStyle={modalStyle} handleModal={modalHandler} />
        </div>
    )
}

export default Navigation
