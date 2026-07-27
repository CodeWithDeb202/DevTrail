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
        `/logs/${projectId}`
    );

    return response.data;

};