import Sidebar from "../components/User/Home/Sidebar"
import Player from "../components/User/Player/Player"

const player = () => {
    return (
        <div className="flex flex-cols-2">
            <div className="w-[10%] border-r-[1.5px] border-black">
                <Sidebar />
            </div>
            <div className="w-[90%]">
                <Player />
            </div>
        </div>
    )
}

export default Player
