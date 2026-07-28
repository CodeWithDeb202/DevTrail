"use client";

export default function SkillsCard({ user }) {

    return (

        <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-5">

                Skills

            </h2>

            {

                user?.skills?.length ? (

                    <div className="flex flex-wrap gap-3">

                        {

                            user.skills.map((skill) => (

                                <span
                                    key={skill}
                                    className="
                                    px-4
                                    py-2
                                    rounded-full
                                    bg-blue-500/10
                                    text-blue-400
                                    "
                                >

                                    {skill}

                                </span>

                            ))

                        }

                    </div>

                ) : (

                    <p className="text-gray-400">

                        No skills added.

                    </p>

                )

            }

        </div>

    );

}