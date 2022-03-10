import Sidebar from "../components/User/Home/Sidebar"
import Player from "../components/User/Player/Player"

const player = () => {
    return (
        <div className="flex relative">
            <div className="w-[4%] border-r-[1.5px] border-black">
                <Sidebar />
            </div>
            <div className="w-[96%]">
                <Player />
            </div>
        </div>
    )
}

export default player
