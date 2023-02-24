import React from "react"

const ServerVoices = ( {server, icons,hastag,dot }) => {
    return (
        <div className="flex items-center mt-2 cursor-pointer w-full hover:bg-[#393c43]">
            <p className="text-[#696c73] font-bold text-[20px] mr-3"> {hastag}</p>
            <p className="text-white">{icons}</p>
            <p className="text-[9px] text-white">{dot}</p>
            <p className="text-[#505257] hover:text-[#fdfdfd] font-semibold w-full hover:bg-[#393c43] bregnest-100">{server}</p>
        </div>
    )
}

export default ServerVoices