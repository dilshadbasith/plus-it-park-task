import React from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const DeleteUser= () => {
  const [cookies] = useCookies(['cookie-token']);
  const navigate=useNavigate()


  const handleDeleteUser = async () => {
    try {

      const response = await axios.delete(
        "https://interview-plus.onrender.com/api/delete-user",
        {
          headers: {
            "x-access-token": cookies["cookie-token"]
          }
        }
      );

      if (response.status === 200) {
        toast.success("Account deleted Successfully!")
        navigate('/')
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
      <div className="w-1/3 p-6 border rounded-lg shadow-md bg-white">
        <h2 className="text-2xl mb-4">Delete User</h2>
        <p className="mb-4">Are you sure you want to delete your account?</p>
        <button
          onClick={handleDeleteUser}
          className="w-full bg-red-500 text-white py-2 rounded-md"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default DeleteUser;
