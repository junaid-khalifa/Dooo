import Image from 'next/image'
import { AddonProps } from '../../../../types'

const Addon = (props: AddonProps) => {

    return (
        <div className='bg-white'>
            <div className={`flex ${props.bgcolor} m-4 rounded-lg shadow`}>
                <form className="flex-auto gap-1 p-6">
                    <div className="">
                        <h1 className="flex-auto text-xl">
                            <props.title />
                        </h1>

                        <p className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
                            Some text
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-start gap-2 text-sm m-auto font-medium">
                        <button type="button" className={`py-2 px-4 ${props.btncolor} text-white transition ease-in duration-200 text-center text-base rounded-lg`}>
                            {props.btntxt}
                        </button>
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                            {props.trialtxt}
                        </p>
                    </div>

                </form>
                <div className="relative w-32 h-auto md:w-48">
                    <Image src={props.imgpath} alt="image" className="absolute flex-1 object-contain" layout='fill' />
                </div>
            </div>
        </div>
    )
}

export default Addon