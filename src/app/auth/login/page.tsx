"use client";

import { Fragment } from "react";
import { useForm } from "react-hook-form";
import UniversalUserData from "@/types/universalUserData";
import { useRouter } from "next/navigation";
import useAuth from "@/zustand/auth";

const LoginPage = () => {
    const router = useRouter();
    const { login, loading } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UniversalUserData>({
        mode: "onTouched",
    });
    const submit = (values: object) => {
        login(values, router);
    };

    return (
        <Fragment>
            <div className="min-h-screen flex items-center justify-center bg-blue-200">
                <form
                    onSubmit={handleSubmit(submit)}
                    className="max-w-sm px-6 shadow flex flex-col items-center justify-center">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <input
                                className="-ml-40 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-96 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-xl"
                                id="inline-full-name"
                                type="text"
                                placeholder="Username"
                                {...register("username", {
                                    required: "This field must not be empty!",
                                })}
                                required={true}
                                style={{
                                    border: `solid ${errors.username ? "crimson" : "dimgray"}`,
                                }}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <input
                                className="-ml-40 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-96 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-xl"
                                id="inline-password"
                                type="password"
                                placeholder="password"
                                {...register("password", {
                                    required: "Please enter the password!",
                                    minLength: {
                                        value: 5,
                                        message: "The password`s minimal length must be 5!",
                                    },
                                })}
                                style={{
                                    border: `solid ${errors.password ? "crimson" : "dimgray"}`,
                                }}
                                required={true}
                            />
                            {errors.password ? (
                                <p style={{ color: "crimson" }}>{errors.password?.message}</p>
                            ) : null}
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-0"></div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button
                                className="-ml-40 shadow bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 rounded w-96 px-4"
                                type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

export default LoginPage;
