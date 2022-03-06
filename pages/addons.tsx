import Addons from "../components/Home/Addons/Addons"
import Navigation from "../components/Home/Navigation"
import Sidebar from "../components/Home/Sidebar"

const addons = () => {
    return (
        <div className='w-[95vw] float-right bg-[#FBF9F6]'>
            <Navigation />
            <Sidebar />
            <div className='grid md:grid-cols-2 gap-4 mx-12 my-6'>
                <Addons />
            </div>
        </div>
    )
}

export default addons