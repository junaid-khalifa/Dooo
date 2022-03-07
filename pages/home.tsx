import PremiumAddons from "../components/User/Home/Addons/PremiumAddons"
import Navigation from "../components/User/Home/Navigation"
import Sidebar from "../components/User/Home/Sidebar"
import Stats from "../components/User/Home/Stats"

const home = () => {
    return (
        <div className="flex flex-cols-2">
            <div className="w-[10%] border-r-[1.5px] border-black">
                <Sidebar />
            </div>
            <div className="w-[90%]">
                <Navigation />
                <Stats />
                <PremiumAddons />
            </div>
        </div>
    )
}

export default home
