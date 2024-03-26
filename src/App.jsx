import { Route, Routes } from "react-router";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function App() {
  const [cookies,setCookie] = useCookies(['cookie-token']);
  const [auth,setAuth]=useState("")

  useEffect(()=>{
    async function ProtectedRoute(){
      const protectedroutes=await axios.get("https://interview-plus.onrender.com/api/protected",
      {
        headers: {
          "x-access-token": cookies["cookie-token"]
        }
      }
      )
      setAuth(protectedroutes.data.message)
    }
    ProtectedRoute()
  },[cookies["cookie-token"]])
  return (
    <>
    <ToastContainer autoClose={3000} position="top-center" />
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={auth=="This is a protected route" && cookies["cookie-token"]? <Home/>:<Login/>}/>
        <Route path="/update" element={auth=="This is a protected route" && cookies["cookie-token"]?<UpdateUser/>:<Login/>}/>
        <Route path="/delete" element={auth=="This is a protected route" && cookies["cookie-token"]?<DeleteUser/>:<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
