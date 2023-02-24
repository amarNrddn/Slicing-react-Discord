import Discover from "../componen/Discover"
import Groups from "../componen/Groups"
import MainComponen from "../componen/MainComponen"

const Home = () => {
    return (
        <div className="flex justify-end bg-[#35383e]">
            <Groups />
            <Discover />
            <MainComponen />
        </div>
    )
}

export default Home