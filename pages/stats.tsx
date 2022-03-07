import Sidebar from "../components/User/Home/Sidebar"
import Stats from "../components/User/Statistics"

const stats = () => {
    return (
        <div className="flex flex-cols-2">
            <div className="w-[4%] border-r-[1.5px] border-black">
                <Sidebar />
            </div>
            <div className="w-[90%]">
                <Stats />
            </div>
        </div>
    )
}

export default stats
