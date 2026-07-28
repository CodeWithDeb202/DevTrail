import api from "./api";


export const createLog = async (data) => {

    const response = await api.post(
        "/logs",
        data
    );

    return response.data;

};



export const getLogs = async (projectId) => {

    const response = await api.get(
        `/logs/project/${projectId}`
    );

    return response.data;

};


export const updateLog = async(id,data)=>{

    const response = await api.put(
        `/logs/${id}`,
        data
    );

    return response.data;

};



export const deleteLog = async(id)=>{

    const response = await api.delete(
        `/logs/${id}`
    );

    return response.data;

};