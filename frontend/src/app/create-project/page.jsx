import ProjectForm from "@/components/projects/ProjectForm";

export default function CreateProject() {

    return (

        <div className="min-h-screen bg-[#030712] p-6">
            <h1 className="text-3xl text-white font-bold mb-6">
                Create New Project
            </h1>


            <ProjectForm />


        </div>

    )

}