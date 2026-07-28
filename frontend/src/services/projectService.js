import api from "./api";


export const createProject = async (data) => {

    const response = await api.post(
        "/projects",
        data
    );

    return response.data;

};



export const getProjects = async () => {

    const response = await api.get(
        "/projects"
    );

    return response.data;

};

export const getProjectById = async (id) => {

    const response = await api.get(
        `/projects/${id}`
    );


    return response.data;

};


// Update Project
export const updateProject = async (id, data) => {

    const response = await api.put(
        `/projects/${id}`,
        data
    );

    return response.data;

};



// Delete Project
export const deleteProject = async (id) => {

    const response = await api.delete(
        `/projects/${id}`
    );

    return response.data;

};


export const toggleLike = async (id) => {

    const response = await api.post(
        `/projects/${id}/like`
    );

    return response.data;

};