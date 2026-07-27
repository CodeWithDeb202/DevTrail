"use client";

import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import AuthCard from "@/components/auth/AuthCard";


export default function SignupPage() {


    const {
        register,
        handleSubmit
    } = useForm();


    const { signup } = useAuth();

    const router = useRouter();



    const onSubmit = async (data) => {


        try {


            await signup(data);


            toast.success(
                "Account created successfully"
            );


            router.push("/login");


        } catch (error) {


            toast.error(
                "Signup failed"
            );


        }


    }



    return (

        <AuthCard

            title="Create Account"

            description="Start your developer journey with DevTrail"

        >


            <form

                onSubmit={handleSubmit(onSubmit)}

                className="space-y-4"

            >


                <input

                    {...register("name")}

                    placeholder="Full Name"

                    className="auth-input"

                />



                <input

                    {...register("username")}

                    placeholder="Username"

                    className="auth-input"

                />



                <input

                    {...register("email")}

                    placeholder="Email"

                    className="auth-input"

                />



                <input

                    type="password"

                    {...register("password")}

                    placeholder="Password"

                    className="auth-input"

                />



                <button

                    className="
w-full
bg-blue-600
hover:bg-blue-700
text-white
py-3
rounded-xl
transition
"

                >

                    Create Account

                </button>


            </form>


        </AuthCard>

    )

}