import Link from 'next/link'
import Image from 'next/image'
import { SideNavProp } from '../../../types'

const SideNav = (props: SideNavProp) => {
    return (
        <ul className={`${props.stylevalue} space-y-2 absolute top-16 p-2 bg-gray-300 w-[40%]`}>
            <li className='text-black'>
                <Link href='/upload' passHref>
                    <Image src='/upload-1.png' className='text-black cursor-pointer' alt='logo' height='23px' width='23px' />
                </Link>
            </li>
            <li className='text-black'>
                <Link href='/manage-videos' passHref>
                    <Image src='/manage.png' className='text-black cursor-pointer' alt='logo' height='23px' width='23px' />
                </Link>
            </li>
            <li className=''>
                <Link href='/settings' passHref>
                    <Image src='/settings.png' className='text-black cursor-pointer' alt='logo' height='23px' width='23px' />
                </Link>
            </li>
        </ul>
    )
}

export default SideNav
