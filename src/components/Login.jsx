import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate =useNavigate()
  const [setCookie] = useCookies(['cookie-token']);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://interview-plus.onrender.com/api/login",
        {
          email,
          password
        }
      );

      if (response.status === 200) {
        const token = response.data.token;
        setCookie('cookie-token',token)
        toast.success("Login Successfull!")
        navigate('/home')
      } else {
        toast.error("Login Failed")
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("Login Failed")
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <form className="w-1/3 p-6 border rounded-lg shadow-md bg-white backdrop-blur-3xl " onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Login</h2>
        <div className="mb-4 flex flex-col items-start">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-md p-2 border-black"
            required
          />
        </div>
        <div className="mb-4 flex flex-col items-start">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-md p-2 border-black"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
          Login
        </button>
        <p className="pt-4">Doesn't have an account?<span className="text-blue-500 cursor-pointer" onClick={()=>navigate('/register')}> SignUp</span></p>
      </form>
    </div>
  );
};

export default Login;
