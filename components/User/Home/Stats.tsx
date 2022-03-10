import Image from "next/image"
import { GoGraph } from 'react-icons/go'
import Date from './Date'

const Stats = () => {
    return (
        <div className='w-[95vw] float-right'>
            <div className='grid grid-cols-2 md:grid-cols-4 border-2 bg-[#373A49] mx-6 my-6'>
                <div className='flex justify-center bg-[#373A49] items-center text-white font-bold h-[120px]'>
                    <GoGraph size={22} className='mx-2' /> {"  "} Check stats
                </div>
                <div className='flex justify-center bg-white col-span-1 -skew-x-[16deg] border-white h-[120px]'>
                    <div className="m-auto skew-x-[18deg]">
                        <h1>Current Plan</h1>
                        <h1 className="text-[#1E1E1F] font-bold">Gold Member</h1>
                    </div>
                </div>
                <div className='flex justify-center bg-white col-span-1 -skew-x-[16deg] md:-ml-1 h-[120px] overflow-hidden'>
                    <div className="m-auto skew-x-[18deg]">
                        <h1>Payment Type</h1>
                        <h1 className="text-[#1E1E1F] font-bold">Onetime</h1>
                        <h1>PayPal <a className="underline">change</a></h1>
                    </div>
                </div>
                <div className='flex justify-center items-center bg-[#373A49] h-[120px]'>
                    <div className='flex px-2 h-10'>
                        <h1 className='leading-6 mx-auto text-[20px] bg-white'>[xxx]</h1>
                        <p className="mx-2 text-white font-bold">Redeem Codes</p>
                    </div>
                </div>
            </div>
            <Date />
            <div className='grid grid-cols-2 sm:flex sm:flex-row gap-4 mx-6 my-6'>
                <div className="flex flex-col justify-center items-center w-full xl:w-56 flex-grow h-[126px] bg-[#CAEBF2]">
                    <h1 className="font-semibold text-center">153 viewers watching</h1>
                    <h1 className="font-[900] text-center">Your Videos</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-full xl:w-56 flex-grow h-[126px] bg-[#CAEBF2]">
                    <h1 className="font-semibold text-center">22000</h1>
                    <h1 className="font-[900] text-center">Total Views</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-full xl:w-56 flex-grow h-[126px] bg-[#CAEBF2]">
                    <h1 className="font-semibold text-center">22</h1>
                    <h1 className="font-[900] text-center">Total Videos</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-full xl:w-56 flex-grow h-[126px] bg-[#CAEBF2]">
                    <h1 className="font-semibold text-center">671.5hrs</h1>
                    <h1 className="font-[900] text-center">Watch Time</h1>
                </div>
            </div>

        </div>
    )
}

export default Stats