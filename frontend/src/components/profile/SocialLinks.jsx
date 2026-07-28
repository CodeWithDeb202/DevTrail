"use client";

import {

    FaGithub,

    FaLinkedin,

    FaInstagram,

    FaGlobe

} from "react-icons/fa";

export default function SocialLinks({ user }) {

    return (

        <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-5">

                Social Links

            </h2>

            <div className="space-y-4">

                <SocialItem

                    icon={<FaGithub size={22}/>}

                    link={user?.github}

                    title="Github"

                />

                <SocialItem

                    icon={<FaLinkedin size={22}/>}

                    link={user?.linkedin}

                    title="LinkedIn"

                />

                <SocialItem

                    icon={<FaInstagram size={22}/>}

                    link={user?.instagram}

                    title="Instagram"

                />

                <SocialItem

                    icon={<FaGlobe size={22}/>}

                    link={user?.website}

                    title="Website"

                />

            </div>

        </div>

    );

}

function SocialItem({

    icon,

    link,

    title

}){

    return(

        <a

            href={link || "#"}

            target="_blank"

            className={`

            flex

            items-center

            gap-4

            p-3

            rounded-xl

            transition

            ${

                link

                ?

                "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"

                :

                "bg-gray-800 text-gray-500 cursor-not-allowed"

            }

            `}

        >

            {icon}

            <span>

                {title}

            </span>

        </a>

    )

}