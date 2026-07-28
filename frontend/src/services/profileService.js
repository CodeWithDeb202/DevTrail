import api from "./api";

// Login User Profile
export const getMyProfile = async () => {
    const response = await api.get("/profile/me");
    return response.data;
};

// Public Profile
export const getPublicProfile = async (username) => {
    const response = await api.get(`/profile/${username}`);
    return response.data;
};

// Update Profile
export const updateProfile = async (data) => {
    const response = await api.put("/profile/update", data);
    return response.data;
};

// Follow User
export const followUser = async (id) => {
    const response = await api.post(`/profile/follow/${id}`);
    return response.data;
};

// Unfollow User
export const unfollowUser = async (id) => {
    const response = await api.post(`/profile/unfollow/${id}`);
    return response.data;
};

export const toggleLike = async (id) => {

    const response = await api.post(
        `/projects/${id}/like`
    );

    return response.data;

};