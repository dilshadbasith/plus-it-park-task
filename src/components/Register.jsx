import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://interview-plus.onrender.com/api/register", {
        name,
        email,
        password
      });

      if (response.status === 200) {
        toast.success('Registered Successfully!')
        navigate('/')
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("Registration failed!")
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <form className="w-1/3 p-6 border rounded-lg shadow-md bg-white backdrop-blur-3xl " onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Register</h2>
        <div className="mb-4 flex flex-col items-start">
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-md p-2 border-black"
            placeholder="Enter your name"
            required
          />
        </div>
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
            placeholder="enter email"
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
            placeholder="enter a password"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md" >
          Register
        </button>
        <p className="pt-4">Already have an account?<span className="text-blue-500 cursor-pointer" onClick={()=>navigate('/')}> Login</span></p>
      </form>
    </div>
  );
};

export default Register;
