import React from "react"
import LogoContenServer from '../assets/logo1.png'
import { GoSearch } from 'react-icons/go'

const Hero = () => {
    return (
        <div className="relative h-[12rem] mt-3 lg:h-[17rem] rounded-[0.5rem] ">
            <div className=" absolute  flex w-full ">
                <img src={LogoContenServer} className="object-cover w-full rounded-[0.5rem] h-[12rem] lg:h-[17rem]" />
            </div>

            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
                <p className="font-bold text-[1.1rem]">Find your community on Discord</p>
                <p className="text-[11px] text-white/70">From gaming, to music, to learning, there's a placec for you</p>
                <div className="relative flex items-center xs:w-[60vh] w-[55vh] lg:w-[90vh] s:w-[30vh] ">
                    <input type='search' placeholder="Explore community" className="mt-3 rounded-[0.3rem] outline-blue-500 placeholder:italic placeholder:text-slate-400 placeholder:text-[14px] py-[4px] px-[10px] w-full max-w-[100vh] text-black flex items-center lg:h-[40px] s:w-[10rem]" />
                    <GoSearch className="absolute right-4 text-[20px] text-slate-400 mt-4 " />
                </div>
            </div>
        </div>
    )
}

export default Hero