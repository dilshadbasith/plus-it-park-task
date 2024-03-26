import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const UpdateUser = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cookies,setCookie] = useCookies(['cookie-token']);
  const navigate=useNavigate()
console.log(cookies["cookie-token"])
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
    
      const response = await axios.put(
        "https://interview-plus.onrender.com/api/update-user",
        {
          name,
          password
        },
        {
          headers: {
            "x-access-token": cookies["cookie-token"]
          }
        }
      );

      if (response.status === 200) {
        toast.success("Updated Successfully!")
        navigate('/home')
      } else {
        toast.error("something went wrong!")
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("something went wrong!")
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <form className="w-1/3 p-6 border rounded-lg shadow-md bg-white" onSubmit={handleUpdateUser}>
        <h2 className="text-2xl mb-4">Update User</h2>
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
            placeholder="enter a new name"
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
            placeholder="enter a new password"
            required
          />
        </div>
        <button type="submit" className="w-full bg-black text-white py-2 rounded-md">
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
