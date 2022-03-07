import Upload from "../components/User/Upload/Upload"
import Sidebar from "../components/User/Home/Sidebar"
import Navigation from "../components/User/Home/Navigation"

const upload = () => {
    return (
        <div className="flex flex-cols-2">
            <div className="w-[4%] border-r-[1.5px] border-black">
                <Sidebar />
            </div>
            <div className="w-[96%]">
                <Navigation />
                <Upload />
            </div>
        </div>
    )
}

export default upload
