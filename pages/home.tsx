import Addons from "../components/Home/Addons"
import Navigation from "../components/Home/Navigation"
import Sidebar from "../components/Home/Sidebar"
import Stats from "../components/Home/Stats"
const home = () => {
    return (
        <div className="">
            <div>
                <Sidebar />
                <Navigation />
                <Stats />
                <Addons />
            </div>
        </div>
    )
}

export default home
