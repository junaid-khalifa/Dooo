import Upload from "../components/Upload/Upload"
import Sidebar from "../components/Home/Sidebar"
import Navigation from "../components/Home/Navigation"

const upload = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Navigation />
                <Sidebar />
                <Upload />
            </div>
        </div>
    )
}

export default upload