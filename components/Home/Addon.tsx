import Image from 'next/image'

const Addon = () => {
    return (
        <div className='bg-white'>
            <div className="flex bg-[#FFF8DE] m-4 rounded-lg shadow">
                <form className="flex-auto p-6">
                    <div className="flex flex-wrap">
                        <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">
                            Password Protect Videos
                        </h1>

                        <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
                            Some text
                        </div>
                    </div>
                    <div className="flex items-baseline mt-4 mb-6 text-gray-700">
                        <div className="space-x-2 flex">

                        </div>

                    </div>
                    <div className="flex mb-4 text-sm m-auto font-medium">
                        <button type="button" className="py-2 px-4 bg-[#21ABF9] text-white transition ease-in duration-200 text-center text-base rounded-lg ">
                            $9/month
                        </button>
                        <p className="text-sm text-gray-500 ml-2 mt-2 dark:text-gray-300">
                            (7 Dov free trial available)
                        </p>
                    </div>

                </form>
                <div className="relative w-32 md:w-48">
                    <Image src="/3d-icon.png" alt="image" className="absolute object-fill" layout='fill' />
                </div>
            </div>
        </div>
    )
}

export default Addon