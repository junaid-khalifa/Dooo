import Link from 'next/link'
import Category from './Inputs/Category'
import Playlist from './Inputs/Playlist'
import Search from './Inputs/Search'
import TableData from './TableData'
import EmbedButton from './Inputs/EmbedButton'
import { useRouter } from 'next/router'

const VideosList = () => {
    const router = useRouter()

    return (
        <>
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex gap-2 items-center">
                    <div className="cursor-pointer">
                        <Link href='/manage-videos' passHref>
                            <h1 className="font-semibold text-lg text-black">Manage Videos</h1>
                        </Link>
                    </div>
                    <div className="">
                        <h3 className="font-bold text-lg text-sky-600">|</h3>
                    </div>
                    <div className="cursor-pointer">
                        <Link href='/playlist' passHref>
                            <h1 className="font-semibold text-lg text-black">Manage Playlist</h1>
                        </Link>
                    </div>
                    <div className="">
                        <h3 className="font-bold text-lg text-sky-600">|</h3>
                    </div>
                    <div className="cursor-pointer">
                        <Link href='/playlist' passHref>
                            <h1 className="font-semibold text-lg text-black">Manage Popups</h1>
                        </Link>
                    </div>
                </div>
            </div>

            <section className="relative py-12 bg-blueGray-50">
                <div className="w-full mb-12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
                        <div className="flex justify-between rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex gap-2 items-center">
                                <div className="">
                                    <Search />
                                </div>
                                <div className=" ">
                                    <Category />
                                </div>
                                <div className="">
                                    {router.pathname === '/playlist' && (<Playlist />)}
                                </div>

                            </div>
                            <div className=''>
                                {router.pathname === '/playlist' && (<EmbedButton />)}
                            </div>
                        </div>
                        <div className="block w-full overflow-x-auto ">
                            <table className="items-center w-full bg-transparent border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black">Move</th>
                                        <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black">Videos(3 Total)</th>
                                        <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black">Views</th>
                                        <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black">Avg view duration</th>
                                        <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black">Avg % viewed</th>
                                        <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black"></th>
                                        <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <TableData id={1} thumbnail={'/space.png'} title={'Killer player sales Video'} date={'Feb 17, 2021'} views={231} avgViewDuration={'0:11 (67.2%)'} avgPercentViewed={'0:20 (87.3%)'} />
                                    <TableData id={8} thumbnail={'/space.png'} title={'Killer player sales Video'} date={'Feb 17, 2021'} views={231} avgViewDuration={'0:11 (67.2%)'} avgPercentViewed={'0:20 (87.3%)'} />

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default VideosList
