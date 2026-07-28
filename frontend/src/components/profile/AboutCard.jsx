"use client";

export default function AboutCard({ user }) {

    return (

        <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-4">

                About

            </h2>

            <p className="text-gray-400 leading-7">

                {
                    user?.bio?.trim()
                        ? user.bio
                        : "No bio added yet."
                }

            </p>

        </div>

    );

}