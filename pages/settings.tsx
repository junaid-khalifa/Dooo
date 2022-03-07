import Sidebar from "../components/User/Home/Sidebar"
import Settings from "../components/User/Settings/Settings"

const settings = () => {
    return (
        <div className="flex flex-cols-2">
            <div className="w-[10%] border-r-[1.5px] border-black">
                <Sidebar />
            </div>
            <div className="w-[90%]">
                <Settings />
            </div>
        </div>
    )
}

export default settings