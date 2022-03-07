import CallToActions from "../components/User/CallToActions/CallToAction"
import Sidebar from "../components/User/Home/Sidebar"

const call_to_actions = () => {
    return (
        <div className="flex flex-cols-2">
            <div className="w-[4%] border-r-[1.5px] border-black">
                <Sidebar />
            </div>
            <div className="w-[96%]">
                <CallToActions />
            </div>
        </div>
    )
}

export default call_to_actions
