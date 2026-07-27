import Link from "next/link";

export default function ProjectCard({
    project
}) {


    return (

        <div className="
bg-[#111827]
border
border-white/10
rounded-2xl
p-5
hover:-translate-y-1
transition
">


            <h2 className="
text-xl
font-bold
text-white
">

                {project.title}

            </h2>


            <p className="
text-gray-400
mt-2
">

                {project.description}

            </p>



            <div className="
mt-4
flex
flex-wrap
gap-2
">


                {
                    project.techStack?.map((tech) => (

                        <span

                            key={tech}

                            className="
px-3
py-1
rounded-full
bg-blue-500/10
text-blue-400
text-sm
"

                        >

                            {tech}

                        </span>

                    ))
                }




            </div>



            <div className="
mt-5
text-sm
text-gray-400
">

                Progress: {project.progress}%

            </div>

            <Link

                href={`/projects/${project._id}`}

                className="
text-blue-400
mt-4
inline-block
"

            >

                Open Workspace →

            </Link>


        </div>

    )

}