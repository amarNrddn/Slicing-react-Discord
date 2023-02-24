import { IoIosArrowDown } from 'react-icons/io'
import { BsStars } from 'react-icons/bs'
import { GiFireFlower } from 'react-icons/gi'
import { RiBookOpenFill } from 'react-icons/ri'
import { FaRobot } from 'react-icons/fa'
import { GoTools } from 'react-icons/go'
import { AiOutlinePlus } from 'react-icons/ai'
import { VscCircleFilled } from 'react-icons/vsc'
import { BiHash } from 'react-icons/bi'
import { HiSpeakerWave } from 'react-icons/hi2'
import { HiMusicalNote, HiMicrophone } from 'react-icons/hi2'
import { FaHeadphonesAlt } from 'react-icons/fa'
import { IoSettingsSharp } from 'react-icons/io5'
import { FcCrystalOscillator } from 'react-icons/fc'
import { GiNightSleep } from 'react-icons/gi'
import ServerVoices from './ServerVoices'
import VoiceServer from './VoiceServer'
import profil from '../assets/profil.png'

const Discover = () => {
    const serverVoice = [
        {
            dot: <VscCircleFilled />,
            hastag: <BiHash />,
            server: 'Welcome',
            icons: <BsStars />
        },
        {
            dot: <VscCircleFilled />,
            hastag: <BiHash />,
            server: 'random',
            icons: <GiFireFlower />
        },
        {
            dot: <VscCircleFilled />,
            hastag: <BiHash />,
            server: 'belajar',
            icons: <RiBookOpenFill />
        },
        {
            dot: <VscCircleFilled />,
            hastag: <BiHash />,
            server: 'bot-command',
            icons: <FaRobot />
        },
        {
            dot: <VscCircleFilled />,
            hastag: <BiHash />,
            server: 'kerja-roodi',
            icons: <GoTools />
        },
    ];

    const voice = [
        {
            hastag: <BiHash />,
            server: 'voice-text',
        },
        {
            hastag: <BiHash />,
            server: 'music-bot',
        },

        {
            voice: <HiSpeakerWave />,
            music: <HiMusicalNote />,
            serverVoice: 'General',
        },
        {
            voice: <HiSpeakerWave />,
            music: <FcCrystalOscillator />,
            serverVoice: 'Comfy-alone',
        },
        {
            voice: <HiSpeakerWave />,
            music: <GiNightSleep />,
            serverVoice: 'AFK',
        },
    ]

    return (
        <div className="hidden lmd:flex flex-col bg-[#2f3137] xl:flex w-[15rem] sticky h-screen top-0 shrink-0 justify-between ">
            {/* title server */}
            <div className="w-[15rem] h-[50px] border-b-2 border-black hover:bg-[#393c43] bregnest-100" >
                <p className="text-white font-bold text-[15px] px-4 py-3">CODE ANTUSIAST</p>
                <IoIosArrowDown className='text-[#fff] text-[18px] font-bold absolute top-[0.9rem] left-[12.6rem] ' />
            </div>
            <div className='flex text-center  px-3 mt-[-5rem] text-white w-[15rem] '>
                <IoIosArrowDown className='text-[11px] mt-1' />
                <p className='text-[11px] ml-2 mr-[9rem] font-semibold'>CHAT</p>
                <AiOutlinePlus className='font-bold text-[1rem]' />
            </div>

            <div className='mt-[-6rem] px-6'>
                {serverVoice.map((serverVoices) => (
                    <ServerVoices server={serverVoices.server} icons={serverVoices.icons} hastag={serverVoices.hastag} dot={serverVoices.dot} />
                ))}
            </div>

            <div className='flex text-center  px-3 mt-[-4rem]  text-white w-[15rem] '>
                <IoIosArrowDown className='text-[11px] mt-1' />
                <p className='text-[11px] ml-2 mr-[8.8rem] font-semibold'>VOICE</p>
                <AiOutlinePlus className='font-bold text-[1rem]' />
            </div>

            <div className="mt-[-6rem] px-6">
                {voice.map((voices) => (
                    <VoiceServer server={voices.server} hastag={voices.hastag} voice={voices.voice} music={voices.music} serverVoice={voices.serverVoice} />
                ))}
            </div>

            <div className="h-[3.8rem] bg-[#292b2f] flex items-center  text-white pl-2 justify-between ">
                <div className="flex items-center">
                    <img src={profil} className='w-9 h-9 rounded-full' />
                    <div className="pl-2">
                        <p className=' text-[16px]'>Fajar</p>
                        <p className='text-[10px] text-[#737578]'>#3323</p>
                    </div>
                </div>
                <div className="flex pr-3 space-x-3 text-[#737578]">
                    <HiMicrophone />
                    <FaHeadphonesAlt />
                    <IoSettingsSharp />
                </div>
            </div>
        </div>
    )
}

export default Discover