import Sidebar from "../components/User/Home/Sidebar"
import Video from "../components/User/Video/Video"

const video = () => {
    return (
        <div className="flex flex-cols-2">
            <div className="w-[4%] border-r-[1.5px] border-black">
                <Sidebar />
            </div>
            <div className="w-[96%]">
                <Video />
            </div>
        </div>
    )
}

export default video