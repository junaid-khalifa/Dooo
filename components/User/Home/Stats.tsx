import Image from "next/image"
import { GoGraph } from 'react-icons/go'
import Date from './Date'

const Stats = () => {
    return (
        <div className='w-[95vw] float-right'>
            <div className='grid grid-cols-4 h-[113px] border-2 bg-[#373A49] mx-6 my-6'>
                <div className='flex justify-center text-white m-auto font-bold'>
                    <GoGraph size={22} className='mx-2' /> {"  "} Check stats
                </div>
                <div className='flex justify-center bg-white col-span-2'>
                    <div className="m-auto">
                        <h1>Current Plan</h1>
                        <h1 className="text-[#1E1E1F] font-bold">Gold Member</h1>
                    </div>
                    <div className="m-auto">
                        <h1>Payment Type</h1>
                        <h1 className="text-[#1E1E1F] font-bold">Onetime</h1>
                        <h1>PayPal <a className="underline">change</a></h1>
                    </div>
                </div>
                <div className='flex justify-center m-auto bg-[#373A49]'>
                    <div className='flex px-2 h-10'>
                        <h1 className='leading-6 mx-auto text-[20px] bg-white'>[xxx]</h1>
                        <p className="mx-2 text-white font-bold">Redeem Codes</p>
                    </div>
                </div>
            </div>
            <Date />
            <div className='flex flex-row gap-4 mx-6 my-6'>
                <div className="flex flex-col justify-center items-center w-24 flex-grow h-[126px] bg-[#CAEBF2]">
                    <h1 className="font-semibold">153 viewers watching</h1>
                    <h1 className="font-[900]">Your Videos</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-24 flex-grow h-[126px] bg-[#CAEBF2]">
                    <h1 className="font-semibold">22000</h1>
                    <h1 className="font-[900]">Total Views</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-24 flex-grow h-[126px] bg-[#CAEBF2]">
                    <h1 className="font-semibold">22</h1>
                    <h1 className="font-[900]">Total Videos</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-24 flex-grow h-[126px] bg-[#CAEBF2]">
                    <h1 className="font-semibold">671.5hrs</h1>
                    <h1 className="font-[900]">Watch Time</h1>
                </div>
            </div>

        </div>
    )
}

export default Stats