import Nav from './Nav'
import Overview from './Overview'
import Sidebar from './Sidebar'

const Dashboard = () => {
    return (
        <div className="flex flex-cols-2">
            <div className="w-[20%] border-black">
                <Sidebar />
            </div>
            <div className="w-[80%]">
                <Nav />
                <Overview />
            </div>
        </div>
    )
}

export default Dashboard
