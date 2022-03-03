import Addon from "../components/Home/Addon"
import Navigation from "../components/Home/Navigation"
import Sidebar from "../components/Home/Sidebar"

const addons = () => {
    return (
        <div className='w-[95vw] float-right bg-[#FBF9F6]'>
            <Navigation />
            <Sidebar />
            <h1 className='text-center text-xl leading-7 font-[600] text-[#1E1E1F]'>Addons</h1>
            <h1 className='text-center font-[20px] text-[#1E1E1F]'>Get powerful addons to boost experience</h1>
            <div className='grid md:grid-cols-2 gap-4 mx-12 my-6'>
                <Addon />
                <Addon />
                <Addon />
                <Addon />
            </div>
        </div>
    )
}

export default addons