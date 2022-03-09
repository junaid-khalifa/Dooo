import { RiDashboardLine, RiCoupon3Line } from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import { CgLoadbarSound } from 'react-icons/cg'
import { BiEditAlt } from 'react-icons/bi'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Sidebar = () => {
    const router = useRouter()
    let bg = 'bg-gradient-to-r text-white'

    return (
        <aside className="absolute bottom-0 top-0 left-0 shadow-2xl w-[15%]">
            <div className="overflow-y-auto py-4 px-3">
                <div className="flex mb-5 items-center">
                    <Image src='/ellipse_1.png' className='text-black cursor-pointer' alt='dooo' height='33px' width='23px' />
                    <Image src='/ellipse_2.png' className='text-black cursor-pointer' alt='dooo' height='11px' width='11px' />
                    <Image src='/ellipse_2.png' className='text-black cursor-pointer' alt='dooo' height='11px' width='11px' />
                    <Image src='/ellipse_2.png' className='text-black cursor-pointer' alt='dooo' height='11px' width='11px' />
                </div>
                <ul className="space-y-2 flex flex-col gap-4 absolute top-32">
                    <li className={`flex font-semibold items-center ${router.pathname === '/dashboard' ? bg : 'text-black'} from-[#14121F] to-[#8D8C92] px-1 py-3 gap-2 whitespace-nowrap`}>
                        <RiDashboardLine size={20} />
                        <Link href='/dashboard' passHref>
                            Dashboard
                        </Link>
                    </li>
                    <li className={`flex ${router.pathname === '/manage-users' ? bg : 'text-black'} from-[#14121F] to-[#8D8C92] font-semibold items-center px-1 py-3 gap-2 whitespace-nowrap`}>
                        <FiUsers size={20} />
                        <Link href='/manage-users' passHref>
                            Manage Users
                        </Link>
                    </li>
                    <li className={`flex font-semibold ${router.pathname === '/pricing' ? bg : 'text-black'} from-[#14121F] to-[#8D8C92] items-center px-1 py-3 gap-2 whitespace-nowrap`}>
                        <CgLoadbarSound size={20} />
                        <Link href='/pricing' passHref>
                            Pricing Plans
                        </Link>
                    </li>
                    <li className={`flex font-semibold ${router.pathname === '/coupons' ? bg : 'text-black'} from-[#14121F] to-[#8D8C92] items-center px-1 py-3 gap-2 whitespace-nowrap`}>
                        <RiCoupon3Line size={20} />
                        <Link href='/coupons' passHref>
                            Coupons
                        </Link>
                    </li>
                    <li className={`flex font-semibold ${router.pathname === '/notifications' ? bg : 'text-black'} from-[#14121F] to-[#8D8C92] items-center px-1 py-3 gap-2 whitespace-nowrap`}>
                        <BiEditAlt size={20} />
                        <Link href='/notifications' passHref>
                            Send Notification
                        </Link>
                    </li>
                </ul>
            </div >
        </aside >
    )
}

export default Sidebar