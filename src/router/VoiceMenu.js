import Discover from "../componen/Discover"
import Groups from "../componen/Groups"
import NavServer from "./NavServer"

const VoiceMenu = () => {
    return (
        <div className="flex sticky  bg-[#35383e] h-screen ">
            <Groups />
            <Discover />
            <NavServer />
        </div>
    )
}

export default VoiceMenu