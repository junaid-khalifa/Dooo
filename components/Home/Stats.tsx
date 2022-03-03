import Image from "next/image"
import { GoGraph } from 'react-icons/go'
import Addons from "./Addons"

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
            <div className='grid grid-cols-4 gap-4 h-[120px] mx-6 my-6'>
                <div className="container mx-auto text-center p-4 bg-[#CAEBF2]">
                    <h1>153 viewers watching</h1>
                    <h1>Your Videos</h1>
                </div>
                <div className="container mx-auto text-center p-4 bg-[#CAEBF2]">
                    <h1 className="">22000</h1>
                    <h1 className="">Total Views</h1>
                </div>
                <div className="container mx-auto text-center p-4 bg-[#CAEBF2]">
                    <h1>22</h1>
                    <h1>Total Videos</h1>
                </div>
                <div className="container mx-auto text-center p-4 bg-[#CAEBF2]">
                    <h1>671.5hrs</h1>
                    <h1>Watch Time</h1>
                </div>
            </div>

        </div>
    )
}

export default Stats