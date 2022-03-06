import Addons from "../components/Home/Addons/Addons"
import PremiumAddons from "../components/Home/Addons/PremiumAddons"
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
                <PremiumAddons />
            </div>
        </div>
    )
}

export default home
