import Sidebar from "../components/User/Home/Sidebar"
import VideosList from "../components/User/Videos"

const playlist = () => {
    return (
        <div className="flex flex-cols-2">
            <div className="w-[10%] border-r-[1.5px] border-black">
                <Sidebar />
            </div>
            <div className="w-[90%]">
                <VideosList />
            </div>
        </div>
    )
}

export default playlist