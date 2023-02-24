const Card = ({ bg, profile, title, description, size }) => {
    return (
        // bener
        <div className="w-full">
            <div className=" flex w-full">
                <img src={bg} className="rounded-t-[1rem] object-cover w-full mt-[-3px] h-[9rem]" />
            </div>

            {/* profil */}
            <div className="relative bg-[#292b2f] h-[9rem] rounded-b-[9px] pl-[1rem]">
                <div className="absolute -top-8 left-4 w-12 flex p- bg-[#292b2f] rounded-[9px] h-12">
                    <img src={profile} className="object-cover rounded-[0.4rem]" />
                </div>
                <div className="text-white font-bold text-[16px]">
                    <p className="pt-7">{title}</p>
                </div>

                <p className="mr-4 text-white/40 text-[12px]">{description}</p>

                <p className="pt-3 mr-4 text-white/40 text-[12px]">{size}</p>
            </div>
        </div>
    )
}

export default Card