import Image from 'next/image'

const Sidebar = () => {
    return (

        <aside className="w-[5vw] border-r-[1.5px] border-black absolute top-0 bottom-0 left-0" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3">
                <div className="flex mb-5">
                    <Image src='/Logo.png' alt='dooo' height='33px' width='23px' />
                </div>
                <ul className="space-y-2 absolute top-48">
                    <li className='text-black'>
                        <Image src='/upload-1.png' alt='logo' height='23' width='23px' />
                    </li>
                    <li className='text-black'>
                        <Image src='/manage.png' className='text-black' alt='logo' height='23' width='23px' />
                    </li>
                    <li>
                        <Image src='/settings.png' alt='logo' height='23' width='23px' />
                    </li>
                </ul>
            </div>
        </aside>

    )
}

export default Sidebar