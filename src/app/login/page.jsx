"use client"
import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Page = () => {
    const handleLogin = async () => {

     }
    return (
        <div className="container mx-auto py-24 px-24">
            <div className="grid grid-cols-2 gap-12 items-center">
                <div>
                    <img src="/assets/images/login/login.svg" alt="login image" height="440" width="440" />
                </div>
                <div className="border-2 p-12 ">
                    <h6 className="text-3xl font-semibold text-primary text-center mb-12 ">Sign In</h6>
                    <form onSubmit={handleLogin} action="">
                        <label htmlFor="emmail">Email</label> <br />
                        <input type="text" name="email" placeholder="your email" className="input input-bordered w-full  mt-3" /> <br /> <br />

                        <label htmlFor="password">Password</label> <br />
                        <input type="text" name="Password" placeholder="Your Password" className="input input-bordered w-full  mt-3" /> <br /> <br />

                        <button type="submit" className="btn btn-primary btn-outline w-full ">Sign In</button>
                    </form> <br />
                    <div>
                        <h6 className="my-5 text-center">Or SignIn With</h6>
                        <div className="flex items-center justify-center space-x-3">
                            <button className="btn flex items-center justify-center text-green-500"><FaGoogle /></button>
                            <button className="btn flex items-center justify-center text-primary"><FaGithub /></button>
                        </div>
                    </div>
                    <h6 className="mt-5 text-center">Don't have account ? <a className="text-primary font-semibold" href="/signup">Sign Up</a></h6>
                </div>

            </div>
        </div>
    );
}

export default Page;
