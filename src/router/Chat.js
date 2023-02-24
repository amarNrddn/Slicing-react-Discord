import { BiHash } from 'react-icons/bi'
import { BsFillPencilFill } from 'react-icons/bs'
import {BsPlusLg} from 'react-icons/bs'
import {HiGift} from 'react-icons/hi'
import {RiFileGifFill} from 'react-icons/ri'
import {BsFillFileEarmarkMinusFill} from 'react-icons/bs'
import {BsEmojiSmileUpsideDownFill} from 'react-icons/bs'

const Chat = () => {

    return (
        <div className='w-full h-screen '>
            <div className="flex  w-full flex-col ">
                {/* chat */}
                <div className="w-full h-[17rem]">

                </div>

                <div className="pl-4">
                    <BiHash className='w-[5rem] h-[5rem] rounded-full bg-[#4f535c] text-white' />
                    <h2 className='text-[25px] pt-2 font-bold text-white'>Welcome To #Voice Text!</h2>
                    <p className='text-[#696c73] text-[16px]'>This is the start of the #Voice Text Chennel</p>
                    <p className='flex text-[#00b0f3] pt-3'>
                        <BsFillPencilFill className='text-[18px] mr-2' />
                        <p className='mt-[-6px] text-[17px]'>Edit Chanel</p>
                    </p>

                </div>
                <div className="pr-4 pl-4 pt-[2.7rem] relative">
                    <input type='text' placeholder='Massage #Voice Text' className='w-full pl-11 h-10 rounded-[5px] outline-none  bg-[#40454b] text-[#696c73]' />
                    <div className="pl-3">
                        <BsPlusLg className='w-6 h-6 bg-[#b5bac0] p-2 rounded-full absolute bottom-[0.5rem]'/>
                        <BsEmojiSmileUpsideDownFill className='w-5 h-6 text-[#b5bac0] absolute bottom-[0.5rem] right-[1.8rem]'/>
                        <BsFillFileEarmarkMinusFill className='w-5 h-6  absolute bottom-[0.5rem] right-[3.6rem] text-[#b5bac0] '/>
                        <RiFileGifFill className='w-6 h-6  absolute bottom-[0.5rem] right-[5.5rem] text-[#b5bac0] '/>
                        <HiGift className='w-6 h-6  absolute bottom-[0.5rem] right-[7.6rem] text-[#b5bac0] '/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat