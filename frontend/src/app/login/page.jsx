"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

import AuthCard from "@/components/auth/AuthCard";


export default function LoginPage() {


    const {
        register,
        handleSubmit
    } = useForm();


    const {
        login
    } = useAuth();


    const router = useRouter();


    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);



    const onSubmit = async (data) => {


        try {

            setLoading(true);


            await login(data);


            toast.success(
                "Welcome back to DevTrail 🚀"
            );


            router.push("/dashboard");


        } catch (error) {


            toast.error(
                "Invalid email or password"
            );


        }
        finally {

            setLoading(false);

        }


    }



    return (

        <AuthCard

            title="Welcome Back"

            description="Continue your developer journey"

        >


            <form

                onSubmit={handleSubmit(onSubmit)}

                className="space-y-5"

            >


                <input

                    {...register("email")}

                    type="email"

                    placeholder="Email Address"

                    className="auth-input"

                />



                <div className="relative">


                    <input

                        {...register("password")}

                        type={
                            showPassword
                                ?
                                "text"
                                :
                                "password"
                        }

                        placeholder="Password"

                        className="auth-input"

                    />


                    <button

                        type="button"

                        onClick={() => setShowPassword(!showPassword)}

                        className="
absolute
right-3
top-3
text-gray-400
"

                    >

                        {
                            showPassword
                                ?
                                <EyeOff size={20} />
                                :
                                <Eye size={20} />
                        }

                    </button>


                </div>



                <div className="
flex
justify-between
text-sm
">


                    <label className="text-gray-400">

                        <input
                            type="checkbox"
                        />

                        Remember me

                    </label>


                    <Link

                        href="/forgot-password"

                        className="
text-blue-400
hover:text-blue-300
"

                    >

                        Forgot Password?

                    </Link>


                </div>



                <button

                    disabled={loading}

                    className="
w-full
bg-gradient-to-r
from-blue-600
to-purple-600
text-white
py-3
rounded-xl
font-medium
hover:scale-[1.02]
transition
disabled:opacity-50
"

                >

                    {
                        loading
                            ?
                            "Logging in..."
                            :
                            "Login"
                    }

                </button>


                <p className="
text-center
text-gray-400
text-sm
">


                    Don't have an account?

                    <Link

                        href="/signup"

                        className="
text-blue-400
ml-2
"

                    >

                        Create one

                    </Link>


                </p>



            </form>


        </AuthCard>

    )

}