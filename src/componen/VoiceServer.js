import React from "react"

const VoiceServer = ({ hastag, server, voice, music, serverVoice }) => {
    return (
        <div className="flex text-center mt-2 text-[#fff] cursor-pointer hover:bg-[#393c42] w-full ">
                <p className="text-[#696c73] mr-3 text-[20px] font-bold">{hastag}</p>
                <p className="text-[#505257] font-semibold] mt-[-3px] hover:text-[#fdfdfd] hover:bg-[#393c42]">{server}</p>
                <p className="text-[#696c73] ml-[-13px] text-[20px] mr-2 ">{voice}</p>
                <p className="text-[#fff] mt-[4px] mr-1">{music}</p>
                <p className="font-semibold hover:bg-[#393c42]  flex">{serverVoice}</p>
        </div>
    )
}

export default VoiceServer