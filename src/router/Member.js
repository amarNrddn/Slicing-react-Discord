import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.png'

const Member = () => {
    //Online
    const members = [
        {
            profil: avatar1,
            name: <p className='text-[#42b288]'>Siapa saya</p>,
        },
        {
            profil: avatar2,
            name:<p className='text-[#42b288]'>Peler Kuda</p>,
        },
        {
            profil: avatar3,
            name: <p className='text-[#42b288]'>Sidane p</p>,
        },
        {
            profil: avatar1,
            name: <p className='text-[#977bbc]'>Leon#112</p>,
        },
        {
            profil: avatar2,
            name: <p className='text-[#977bbc]'>Eva</p>,
        },
        {
            profil: avatar3,
            name: <p className='text-[#505257]'>Fajar Galau</p>,
        },
    ]

    return(
        <div className='h-screen '>
        <div className="w-[15rem] shrink-0 bg-[#2f3137] items-center h-full pt-3">
            <p className='pl-5 text-[#505257]'>Online - 3</p>
              {members.map((member) => (
                <div className='rounded-full flex items-center pl-5 pt-3'>
                    <img src={member.profil} className='w-9 h-9 rounded-full ' />
                    <p className='pl-2 '>{member.name}</p>
                </div>
            ))}
        </div>

        </div>
        
    )
}

export default Member