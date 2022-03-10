import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <aside className="hidden sm:flex absolute top-0 bottom-0 left-0" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 md:px-1">
                <div className="flex mb-5">
                    <Link href='/home' passHref>
                        <Image src='/Logo.png' className='object-contain cursor-pointer' alt='dooo' height='23px' width='23px' />
                    </Link>
                </div>
                <ul className="space-y-2 absolute top-48">
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
                    <li>
                        <Link href='/settings' passHref>
                            <Image src='/settings.png' className='text-black cursor-pointer' alt='logo' height='23px' width='23px' />
                        </Link>
                    </li>
                </ul>
            </div >
        </aside >
    )
}

export default Sidebar