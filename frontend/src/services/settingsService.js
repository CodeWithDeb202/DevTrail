import api from "./api";

// Update appearance (theme)
export const updateTheme = async (theme) => {
    const response = await api.put("/profile/update", { theme });
    return response.data;
};

// Update notification preferences
export const updateNotifications = async (prefs) => {
    const response = await api.put("/profile/update", prefs);
    return response.data;
};

// Update privacy settings
export const updatePrivacy = async (privacy) => {
    const response = await api.put("/profile/update", privacy);
    return response.data;
};

// Delete account permanently
export const deleteAccount = async (password) => {
    const response = await api.delete("/auth/account", { data: { password } });
    return response.data;
};
