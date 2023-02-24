import React from "react"
import {BsPlusLg} from 'react-icons/bs'
import { FaCompass } from 'react-icons/fa'
import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.png'
import logoDc from '../assets/logodc.png'

const Groups = () => {
    const grups = [avatar1, avatar2, avatar3, avatar1, avatar2, avatar3]
    return (
        <div>
            <div className="hidden sm:flex bg-[#202226] w-[5rem] h-screen pt-5 sticky top-0 ">
                <div className=" flex flex-col items-center w-full gap-3">

                    {/* logo dc */}
                    <div className=" rounded-full bg-[#2f3137] hover:bg-[#5165f6] hover:rounded-[15px] hover:duration-75">
                        <div className="flex items-center w-12 h-12 hover:hover:brightness-200">
                            <img src={logoDc} className=' rounded-full' />
                        </div>
                    </div>

                    {/* logo server */}
                    {grups.map((grup) => (
                        <div className="h-12 w-12 flex gap-8 hover:rounded-20 hover:duration-75">
                            <img src={grup} className='object-cover rounded-full hover:rounded-[15px]' />
                        </div>
                    ))}

                    {/* plus */}
                    <div className=" bg-[#36393f] p-4 rounded-full hover:bg-[#3ba55d] hover:text-[#fff] text-[#3ba55d] hover:rounded-[18px] hover:duration-75">
                        <BsPlusLg className="text-[19px] font-bold" />
                    </div>

                    {/* compas */}
                    <div className="bg-[#36393f] rounded-full hover:bg-[#3ba55d] hover:text-[#fff] p-4 text-[#3ba55d] hover:rounded-[18px] hover:duration-75 ">
                        <FaCompass className="text-[20px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Groups