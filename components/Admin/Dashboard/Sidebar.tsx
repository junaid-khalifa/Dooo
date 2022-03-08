import { RiDashboardLine, RiCoupon3Line } from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import { CgLoadbarSound } from 'react-icons/cg'
import { BiEditAlt } from 'react-icons/bi'
import Link from 'next/link'
import Image from 'next/image'

const Sidebar = () => {
    return (
        <aside className="absolute top-0 bottom-0 left-0" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3">
                <div className="flex mb-5 items-center">
                    <Image src='/ellipse_1.png' className='text-black cursor-pointer' alt='dooo' height='33px' width='23px' />
                    <Image src='/ellipse_2.png' className='text-black cursor-pointer' alt='dooo' height='11px' width='11px' />
                    <Image src='/ellipse_2.png' className='text-black cursor-pointer' alt='dooo' height='11px' width='11px' />
                    <Image src='/ellipse_2.png' className='text-black cursor-pointer' alt='dooo' height='11px' width='11px' />
                </div>
                <ul className="space-y-2 flex flex-col gap-4 absolute top-32">
                    <li className='text-black flex font-semibold items-center bg-gradient-to-r from-[#14121F] to-[#8D8C92] py-3 gap-2 whitespace-nowrap'>
                        <RiDashboardLine size={20} />
                        <Link href='/dashboard' passHref>
                            Dashboard
                        </Link>
                    </li>
                    <li className='text-black flex font-semibold items-center gap-2 whitespace-nowrap'>
                        <FiUsers size={20} />
                        <Link href='/manage-users' passHref>
                            Manage Users
                        </Link>
                    </li>
                    <li className='text-black flex font-semibold items-center gap-2 whitespace-nowrap'>
                        <CgLoadbarSound size={20} />
                        <Link href='/plans' passHref>
                            Pricing Plans
                        </Link>
                    </li>
                    <li className='text-black flex font-semibold items-center gap-2 whitespace-nowrap'>
                        <RiCoupon3Line size={20} />
                        <Link href='/coupons' passHref>
                            Coupons
                        </Link>
                    </li>
                    <li className='text-black flex font-semibold items-center gap-2 whitespace-nowrap'>
                        <BiEditAlt size={20} />
                        <Link href='/notification' passHref>
                            Send Notification
                        </Link>
                    </li>
                </ul>
            </div >
        </aside >
    )
}

export default Sidebar