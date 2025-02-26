"use client"
import React from 'react';
import { FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";

const Signup = () => {
    const handleSignup = async (event) => {
       event.preventDefault();
       const newUser ={
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
       };
       const resp = await fetch("http://localhost:3000/signup/api", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers :{
            "contant-type":"application/json"
        }
       })
       if(resp.status === 200){
        event.target.reset()
       }
    }
    return (
        <div className="container mx-auto py-12 px-6 md:px-24 flex items-center justify-center min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-5xl shadow-lg p-8 md:p-12 rounded-lg border">
                {/* Left Side - Illustration */}
                <div className="hidden md:flex justify-center">
                    <img src="/assets/images/login/login.svg" alt="Sign Up Illustration" className="w-full max-w-sm" />
                </div>
                {/* Right Side - Form */}
                <div className="w-full">
                    <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
                    <form onSubmit={handleSignup}>
                        <label className="block mb-2 font-semibold">Name</label>
                        <input type="text" name="name" placeholder="Your name" className="input input-bordered w-full mb-4" required />
                        
                        <label className="block mb-2 font-semibold">Email</label>
                        <input type="email" name="email" placeholder="Your email" className="input input-bordered w-full mb-4" required />

                        <label className="block mb-2 font-semibold">Confirm Password</label>
                        <input type="password" name="password" placeholder="Your password" className="input input-bordered w-full mb-6" required />
                        
                        <button type="submit" className="btn btn-primary btn-outline w-full py-3 rounded-md">Sign Up</button>
                    </form>
                    
                    <div className="text-center my-5">Or Sign Up with</div>
                    <div className="flex items-center justify-center space-x-3">
                        <button className="btn btn-circle bg-gray-100 p-3"><FaLinkedin className="text-blue-700" /></button>
                        <button className="btn btn-circle bg-gray-100 p-3"><FaGoogle className="text-red-500" /></button>
                    </div>
                    <h6 className="mt-5 text-center">Already have an account? <a className="text-red-500 font-semibold" href="/login">Sign In</a></h6>
                </div>
            </div>
        </div>
    );
}

export default Signup;

