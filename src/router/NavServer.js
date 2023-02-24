import Member from './Member'
import Chat from './Chat'
import { BiHash } from 'react-icons/bi'
import { IoMdNotifications } from 'react-icons/io'
import { AiTwotonePushpin } from 'react-icons/ai'
import { IoMdPersonAdd } from 'react-icons/io'
import { BsImage } from 'react-icons/bs'
import { AiFillQuestionCircle } from 'react-icons/ai'

const NavServer = () => {

    return (
        <div className='flex flex-col h-screen w-full overflow-hidden' >
            <div className='w-full h-[50px] bg-[#35383e] border-b-2 border-black flex justify-end p-3'>
                <p className='flex ml-[0.6rem] w-full'>
                    <BiHash className='text-[#696c73] font-bold text-[22px] ' />
                    <p className='mt-[-1px] text-white '>Voice Text</p>
                </p>

                <nav className='flex text-[#696c73] '>
                    <ul className='flex text-[rgb(105,108,115)] font-bold text-[22px] '>
                        <li className='mr-2'>
                            <BiHash />
                        </li>
                        <li className='mr-2'>
                            <IoMdNotifications />
                        </li>
                        <li className='mr-2'>
                            <AiTwotonePushpin />
                        </li>
                        <li className='mr-2'>
                            <IoMdPersonAdd />
                        </li>
                        <li className='mr-2 mt-[-8px]'>
                            <input type='search' placeholder='search' className='w-[10rem] text-[13px] h-5 rounded-[4px] outline-0 bg-[#212226] pl-2' />
                        </li>
                        <li className='mr-2'>
                            <BsImage />
                        </li>
                        <li className='mr-2'>
                            <AiFillQuestionCircle />
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='flex'>
                <Chat />
                <Member />
            </div>
        </div>

    )
}

export default NavServer