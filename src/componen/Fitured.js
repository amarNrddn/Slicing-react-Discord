import React from "react"
import Card from './Card'
import genshin1 from '../assets/genshinBg.jpg'
import genshin2 from '../assets/genshinProfil.jpg'
import valoran1 from '../assets/valoran1.jpg'
import valoran2 from '../assets/valorant2.webp'
import apex1 from '../assets/apex1.jpg'
import apex2 from '../assets/apex2.jpg'
import roblox1 from '../assets/roblox1.jpg'
import roblox2 from '../assets/roblox2.jpg'
import py1 from '../assets/py1.png'
import py2 from '../assets/py2.jpg'
import linux1 from '../assets/linux1.png'
import linux2 from '../assets/linux2.png'
import minicraf1 from '../assets/minicraf1.jpg'
import minicraf2 from '../assets/minicraft2.png'
import js1 from '../assets/js1.png'
import js2 from '../assets/js2.png'
import irukanjiprofil from '../assets/irukanjiprofil.jpg'
import irukanji from '../assets/irukanji.png'
import react from '../assets/react.png'
import codm from '../assets/codm.jpg'
import codmprofil from '../assets/codmprofil.png'
import hek from '../assets/hek.jpg'
import hekprofil from '../assets/hekprofil.png'

const Fitured = () => {
    const cards = [
        {
            bg: genshin1,
            profile: genshin2,
            title: "Genshin Impact Official",
            description: "Welcome to Teyvat, Treveler! This is the place to discuss with others about : Ghensin Impact!",
            size: <p>322,476 Online &#x2022; 1,000,001</p>
        },
        {
            bg: valoran1,
            profile: valoran2,
            title: "VALORANT",
            description: "Welcome to Teyvat, Treveler! This is the place to discuss with others about : Ghensin Impact!",
            size: <p>322,476 Online &#x2022; 1,000,001</p>
        },
        {
            bg: apex1,
            profile: apex2,
            title: "Apex Legends",
            description: "Welcome to Teyvat, Treveler! This is the place to discuss with others about : Ghensin Impact!",
            size: <p>322,476 Online &#x2022; 1,000,001</p>
        },
        {
            bg: roblox1,
            profile: roblox2,
            title: "ROBLOX",
            description: "Welcome to Teyvat, Treveler! This is the place to discuss with others about : Ghensin Impact!",
            size: <p>322,476 Online &#x2022; 1,000,001</p>
        },
        {
            bg: py1,
            profile: py2,
            title: "PYTHON",
            description: "Welcome to Teyvat, Treveler! This is the place to discuss with others about : Ghensin Impact!",
            size: <p>322,476 Online &#x2022; 1,000,001</p>
        },
        {
            bg: linux1,
            profile: linux2,
            title: "LINUX",
            description: "Welcome to Teyvat, Treveler! This is the place to discuss with others about : Ghensin Impact!",
            size: <p>322,476 Online &#x2022; 1,000,001</p>
        },
        {
            bg: minicraf1,
            profile: minicraf2,
            title: "MINICRAFT",
            description: "Welcome to Teyvat, Treveler! This is the place to discuss with others about : Ghensin Impact!",
            size: <p>322,476 Online &#x2022; 1,000,001</p>
        },
        {
            bg: js1,
            profile: js2,
            title: "JavaScript",
            description: "Welcome to Teyvat, Treveler! This is the place to discuss with others about : Ghensin Impact!",
            size: <p>322,476 Online &#x2022; 1,000,001</p>
        },
        {
            bg: react,
            profile: react,
            title: "REACT",
            description: "Welcome to Teyvat, Treveler! This is the place to discuss with others about : Ghensin Impact!",
            size: <p>322,476 Online &#x2022; 1,000,001</p>
        },
        {
            bg: irukanji,
            profile: irukanjiprofil,
            title: "IRUKANJI",
            description: "Welcome to Teyvat, Treveler! This is the place to discuss with others about : Ghensin Impact!",
            size: <p>322,476 Online &#x2022; 1,000,001</p>
        },
        {
            bg: codm,
            profile: codmprofil,
            title: "CODM",
            description: "Welcome to Teyvat, Treveler! This is the place to discuss with others about : Ghensin Impact!",
            size: <p>322,476 Online &#x2022; 1,000,001</p>
        },
        {
            bg: hek,
            profile: hekprofil,
            title: "HECKBE",
            description: "Welcome to Teyvat, Treveler! This is the place to discuss with others about : Ghensin Impact!",
            size: <p>322,476 Online &#x2022; 1,000,001</p>
        },
    ]

    return (
        <div className="">
            <div className="pt-6 mb-4">
                <p className="text-white font-bold text-[18px]">Featured communities</p>
            </div>

            <div className=" grid grid-cols-1 xs:grid-cols-2 gap-y-5 gap-x-3 lmd:grid-cols-3 lg:grid-cols-4 flex-wrap">
                {cards.map((card) => (
                    <Card bg={card.bg} profile={card.profile} title={card.title} description={card.description} size={card.size} key={card.description} />

                ))}
            </div>
        </div>
    )
}

export default Fitured