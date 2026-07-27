"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import api from "@/services/api";


export default function ProfilePage() {

    const { username } = useParams();

    const [profile, setProfile] = useState(null);



    useEffect(() => {

        const fetchProfile = async () => {

            const res = await api.get(
                `/profile/${username}`
            );

            setProfile(res.data);

        };


        fetchProfile();


    }, [username]);



    if (!profile) {

        return <div>Loading...</div>

    }



    return (

        <div className="
min-h-screen
bg-[#030712]
text-white
p-8
">


            <h1 className="
text-4xl
font-bold
">

                {profile.user.name}

            </h1>


            <p className="
text-gray-400
mt-3
">

                {profile.user.bio}

            </p>



            <div className="
mt-10
grid
md:grid-cols-3
gap-6
">


                {
                    profile.projects.map((project) => (


                        <div

                            key={project._id}

                            className="
bg-[#111827]
rounded-2xl
p-5
border
border-white/10
"

                        >


                            <h2 className="font-bold">

                                {project.title}

                            </h2>


                            <p className="text-gray-400">

                                {project.description}

                            </p>


                        </div>


                    ))
                }


            </div>


        </div>

    )

}