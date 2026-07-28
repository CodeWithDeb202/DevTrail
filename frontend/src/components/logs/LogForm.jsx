// "use client";

// import { useState, useEffect } from "react";
// import { createLog, updateLog } from "@/services/logService";

// export default function LogForm({ projectId, logs, setLogs, editLog, setEditLog }) {

//     const [title, setTitle] = useState("");

//     const [description, setDescription] = useState("");

//     const [status, setStatus] = useState("Development");

//     useEffect(() => {

//         if (editLog) {

//             setTitle(editLog.title);

//             setDescription(editLog.description);

//             setStatus(editLog.status);

//         }

//     }, [editLog]);

//     const submit = async (e) => {

//         e.preventDefault();


//         try {


//             if (editLog) {


//                 const formData = new FormData();


//                 formData.append(
//                     "title",
//                     title
//                 );


//                 formData.append(
//                     "description",
//                     description
//                 );


//                 formData.append(
//                     "status",
//                     status
//                 );


//                 const result = await updateLog(
//                     editLog._id,
//                     formData
//                 );


//                 const updatedLog = result.log;


//                 setLogs(
//                     logs.map((log) =>
//                         log._id === updatedLog._id
//                             ? updatedLog
//                             : log
//                     )
//                 );


//                 setEditLog(null);


//             }
//             else {


//                 const formData = new FormData();


//                 formData.append(
//                     "project",
//                     projectId
//                 );


//                 formData.append(
//                     "title",
//                     title
//                 );


//                 formData.append(
//                     "description",
//                     description
//                 );


//                 formData.append(
//                     "status",
//                     status
//                 );


//                 const result = await createLog(formData);


//                 setLogs([
//                     result.log,
//                     ...logs
//                 ]);

//             }



//             setTitle("");

//             setDescription("");

//             setStatus("Development");


//         }
//         catch (error) {

//             console.log(
//                 error.response?.data || error.message
//             );

//         }

//     };

//     return (

//         <form

//             onSubmit={submit}

//             className="bg-[#111827] rounded-2xl border border-white/10 p-6"

//         >

//             <h2 className="text-2xl font-bold mb-5">

//                 Add Build Log

//             </h2>

//             <input

//                 value={title}

//                 onChange={(e) => setTitle(e.target.value)}

//                 placeholder="Title"

//                 className="auth-input mb-4"

//             />

//             <textarea

//                 value={description}

//                 onChange={(e) => setDescription(e.target.value)}

//                 placeholder="What did you build today?"

//                 className="auth-input min-h-32 mb-4"

//             />

//             <select

//                 value={status}

//                 onChange={(e) => setStatus(e.target.value)}

//                 className="auth-input mb-4"

//             >

//                 <option>Planning</option>

//                 <option>Development</option>

//                 <option>Testing</option>

//                 <option>Deployment</option>

//                 <option>Completed</option>

//             </select>

//             <button

//                 className="bg-blue-600 w-full py-3 rounded-xl"

//             >

//                 {editLog ? "Update Log" : "Save Log"}

//             </button>

//         </form>

//     )

// }


"use client";

import { useState, useEffect } from "react";
import { createLog, updateLog } from "@/services/logService";

export default function LogForm({
    projectId,
    logs,
    setLogs,
    editLog,
    setEditLog,
}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Development");

    useEffect(() => {
        if (editLog) {
            setTitle(editLog.title);
            setDescription(editLog.description);
            setStatus(editLog.status);
        }
    }, [editLog]);

    const submit = async (e) => {
        e.preventDefault();

        try {

            if (!projectId && !editLog) {
                return console.log("Project ID Missing");
            }

            if (editLog) {

                const data = {
                    title,
                    description,
                    status,
                };

                const result = await updateLog(
                    editLog._id,
                    data
                );

                const updatedLog = result.log;

                setLogs((prev) =>
                    prev.map((log) =>
                        log._id === updatedLog._id
                            ? updatedLog
                            : log
                    )
                );

                setEditLog(null);

            } else {

                const data = {
                    project: projectId,
                    title,
                    description,
                    status,
                };

                const result = await createLog(data);

                console.log("Create Result:", result);

                setLogs((prev) => [
                    result.log,
                    ...prev,
                ]);
            }

            setTitle("");
            setDescription("");
            setStatus("Development");

        } catch (error) {
            console.log("Status:", error.response?.status);
            console.log("Response:", error.response?.data);
            console.log(error);
        }
    };

    return (
        <form
            onSubmit={submit}
            className="bg-[#111827] rounded-2xl border border-white/10 p-6"
        >
            <h2 className="text-2xl font-bold mb-5">
                {editLog ? "Update Build Log" : "Add Build Log"}
            </h2>

            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="auth-input mb-4"
                required
            />

            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What did you build today?"
                className="auth-input min-h-32 mb-4"
                required
            />

            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="auth-input mb-4"
            >
                <option value="Planning">Planning</option>
                <option value="Development">Development</option>
                <option value="Testing">Testing</option>
                <option value="Deployment">Deployment</option>
                <option value="Completed">Completed</option>
            </select>

            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition w-full py-3 rounded-xl"
            >
                {editLog ? "Update Log" : "Save Log"}
            </button>
        </form>
    );
}