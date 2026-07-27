"use client";

import { createContext, useContext, useState, useEffect } from "react";


import api from "@/services/api";


const AuthContext = createContext();

const getProfile = async () => {

    try {

        const response = await api.get(
            "/users/profile"
        );


        setUser(response.data.user);


    } catch (error) {

        console.log(error);

    }

};


export const AuthProvider = ({ children }) => {

    


    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(false);



    const signup = async (data) => {

        const response = await api.post(
            "/auth/signup",
            data
        );


        return response.data;

    };



    const login = async (data) => {

        const response = await api.post(
            "/auth/login",
            data
        );


        localStorage.setItem(
            "token",
            response.data.token
        );


        setUser(response.data.user);


        return response.data;

    };



    const logout = () => {

        localStorage.removeItem(
            "token"
        );

        setUser(null);

    };

    useEffect(() => {

        const token = localStorage.getItem("token");


        if (token) {

            getProfile();
            setLoading(false);

        }

    }, []);



    return (

        <AuthContext.Provider

            value={{
                user,
                loading,
                signup,
                login,
                logout
            }}

        >

            {children}

        </AuthContext.Provider>

    );

};



export const useAuth = () => {

    return useContext(AuthContext);

};