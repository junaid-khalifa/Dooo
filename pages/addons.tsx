import Addons from "../components/User/Home/Addons/Addons"
import Navigation from "../components/User/Home/Navigation"
import Sidebar from "../components/User/Home/Sidebar"

const addons = () => {
    return (
        <div className="flex flex-cols-2">
            <div className="w-[4%] border-r-[1.5px] border-black relative">
                <Sidebar />
            </div>
            <div className="w-[96%]">
                <Navigation />
                <Addons />
            </div>
        </div>
    )
}

export default addons